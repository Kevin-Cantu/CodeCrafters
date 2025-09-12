"use client";

import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import { IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

const easeOutCubic = [0.16, 1, 0.3, 1] as const;

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

// Card shape used by the carousel
export type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Locks to stabilize index while animating to a dash target
  const isProgrammaticRef = useRef(false);
  const programmaticUntilRef = useRef<number>(0);
  const lastClickedIndexRef = useRef<number | null>(null);

  // Helpers to work with item nodes and positions
  const getItemNodes = () =>
    Array.from(
      listRef.current?.querySelectorAll<HTMLElement>(".rovocard-item") || []
    );

  const updateCurrentIndex = () => {
    // If we're still within the stabilization window, keep the last clicked index
    if (isProgrammaticRef.current || Date.now() < programmaticUntilRef.current)
      return;

    const scroller = scrollerRef.current;
    const nodes = getItemNodes();
    if (!scroller || nodes.length === 0) return;

    const sl = scroller.scrollLeft;
    const maxSl = scroller.scrollWidth - scroller.clientWidth;

    // Edge stabilization (small to avoid early jump)
    const nearEnd = maxSl - sl <= 2; // px
    const nearStart = sl <= 2; // px
    if (nearEnd) {
      setCurrentIndex(nodes.length - 1);
      return;
    }
    if (nearStart) {
      setCurrentIndex(0);
      return;
    }

    const base = nodes[0].offsetLeft;

    // Choose the item whose LEFT edge is closest to scrollLeft (stable for multi-visible)
    let best = 0;
    let bestDelta = Infinity;
    for (let i = 0; i < nodes.length; i++) {
      const itemLeft = nodes[i].offsetLeft - base;
      const d = Math.abs(itemLeft - sl);
      if (d < bestDelta) {
        bestDelta = d;
        best = i;
      }
    }
    setCurrentIndex(best);
  };

  useEffect(() => {
    if (!scrollerRef.current) return;
    scrollerRef.current.scrollLeft = initialScroll ?? 0;

    const onResize = () => {
      updateCurrentIndex();
    };

    const list = listRef.current;
    const onLoadCapture = () => {
      updateCurrentIndex();
    };
    list?.addEventListener("load", onLoadCapture, true);

    const ro = new ResizeObserver(() => {
      updateCurrentIndex();
    });
    if (list) ro.observe(list);
    if (scrollerRef.current) ro.observe(scrollerRef.current);

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      list?.removeEventListener("load", onLoadCapture, true);
      ro.disconnect();
    };
  }, [initialScroll]);

  // Smoothly animate scrollLeft to target without CSS snap interference
  const animateScrollTo = (
    targetLeft: number,
    onDone?: () => void,
    duration = 260
  ) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const prevSnap = scroller.style.scrollSnapType;
    const prevBehavior = scroller.style.scrollBehavior as string;
    scroller.style.scrollSnapType = "none";
    scroller.style.scrollBehavior = "auto";

    const maxSl = scroller.scrollWidth - scroller.clientWidth;
    const clampedExact = Math.max(0, Math.min(targetLeft, Math.max(0, maxSl)));
    const clamped = Math.floor(clampedExact); // avoid subpixel rounding pushing next

    const start = scroller.scrollLeft;
    const delta = clamped - start;
    const startTime = performance.now();

    const step = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      scroller.scrollLeft = start + delta * eased;
      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        scroller.scrollLeft = clamped;
        requestAnimationFrame(() => {
          scroller.style.scrollSnapType = prevSnap || "";
          scroller.style.scrollBehavior = prevBehavior || "";
          onDone?.();
        });
      }
    };

    requestAnimationFrame(step);
  };

  const scrollToIndex = (index: number) => {
    const scroller = scrollerRef.current;
    const nodes = getItemNodes();
    if (!scroller || !nodes[index]) return;

    const base = nodes[0].offsetLeft;
    // Exact left offset of the item relative to the first
    let targetLeft = nodes[index].offsetLeft - base;

    // On mobile, bias a bit to the left to avoid overshooting to the next card due to rounding
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    if (isMobile) targetLeft = Math.max(0, targetLeft - 4);

    // Lock updates for a short window to avoid flicker to next index
    isProgrammaticRef.current = true;
    programmaticUntilRef.current = Date.now() + 500; // 0.5s stabilization window
    lastClickedIndexRef.current = index;

    setCurrentIndex(index);
    animateScrollTo(targetLeft, () => {
      // Keep lock a bit longer to absorb any momentum
      setTimeout(() => {
        if (!scrollerRef.current) return;
        const sc = scrollerRef.current;
        // Snap to integer left again to stabilize
        sc.scrollLeft = Math.floor(targetLeft);
        isProgrammaticRef.current = false;
      }, 120);
    });
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: (i) => scrollToIndex(i), currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 [scrollbar-width:none] touch-auto"
          ref={scrollerRef}
          onScroll={updateCurrentIndex}
        >
          {/* Right gradient hint (no pointer events) */}
          <div className="pointer-events-none absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l" />

          {/* Show ~2.25 cards on mobile, full cards on md+ */}
          <div
            ref={listRef}
            className="flex w-full flex-row justify-start 2xl:justify-center gap-0 md:gap-8 pl-0 md:pl-8 pr-0 md:pr-8"
          >
            {items.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: easeOutCubic,
                  },
                }}
                key={"card" + index}
                className="rovocard-item flex-none basis-[calc(100%/2.25)] sm:basis-[calc(100%/2.25)] md:basis-auto px-2 md:px-0 first:pl-0 last:pr-0"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dash pagination (hidden on md+ i.e., PC) */}
        <div className="mt-2 flex w-full items-center justify-center gap-2 md:hidden">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Ir al slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === currentIndex ? "w-6 bg-gray-800/80" : "w-3 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentInnerRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [desktopScale, setDesktopScale] = useState(1);
  const [shortScreen, setShortScreen] = useState(false); // pantallas "bajas" (Nest Hub, tablets landscape)
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") handleClose();
    }
    // Bloquear scroll del body detrás del modal
    document.body.style.overflow = open ? "hidden" : "auto";

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [open]);

  // Ajuste automático para que en desktop siempre quepa sin scroll interno
  useEffect(() => {
    if (!open) return;

    const recompute = () => {
      if (typeof window === "undefined") return;
      const isDesktop = window.innerWidth >= 768;
      if (!isDesktop) {
        setDesktopScale(1);
        return;
      }
      const vh = window.innerHeight;
      const available = Math.floor(vh * 0.98);
      const headerH = headerRef.current?.offsetHeight || 0;
      const paddingY = shortScreen ? 16 * 2 : 24 * 2;
      const contentH = contentInnerRef.current?.scrollHeight || 0;
      const target = available - headerH - paddingY;
      const minScale = vh < 840 ? 0.6 : 0.8;
      const scale =
        target > 0 && contentH > 0
          ? Math.min(1, Math.max(minScale, target / contentH))
          : 1;
      setDesktopScale(scale);
    };

    recompute();
    window.addEventListener("resize", recompute);
    const t = setTimeout(recompute, 50);
    return () => {
      window.removeEventListener("resize", recompute);
      clearTimeout(t);
    };
  }, [open, shortScreen]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>    
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-[100svh] overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />

            {/* Contenedor principal del modal (centro en desktop, full en móvil) */}
            <div className="relative z-[60] flex h-full w-full items-start justify-center md:items-center p-0 md:p-3">
              <motion.div
                initial={{ opacity: 0, y: 0, scale: 0.98 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.25, ease: easeOutCubic },
                }}
                exit={{ opacity: 0, y: 0, scale: 0.98 }}
                ref={containerRef}
                layoutId={layout ? `card-${card.title}` : undefined}
                className={cn(
                  "w-full h-full md:h-auto md:max-w-5xl rounded-none md:rounded-3xl bg-white dark:bg-neutral-900 shadow-2xl flex flex-col overflow-y-auto overflow-x-hidden",
                  shortScreen ? "md:max-h-[98vh]" : "md:max-h-[96vh]"
                )}
              >
                {/* Toda la vista (incluida la imagen) scrollea en móvil; en md+ no hay scroll */}
                <div
                  ref={scrollAreaRef}
                  className={cn(
                    "min-h-0 flex-1 overflow-y-auto overscroll-y-contain touch-pan-y [-webkit-overflow-scrolling:touch]",
                    "md:overflow-y-hidden"
                  )}
                >
                  {/* Hero/Image dentro del flujo (no fijo) */}
                  <div
                    ref={headerRef}
                    className={cn(
                      "relative w-full",
                      "h-[20vh] min-h-[100px] max-h-[46vh]",
                      shortScreen ? "md:h-[110px]" : "md:h-[160px]"
                    )}
                  >
                    <BlurImage
                      src={card.src}
                      alt={card.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />

                    {/* Botón de cerrar */}
                    <button
                      className="absolute right-3 top-[max(10px,env(safe-area-inset-top))] z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 hover:bg-black/70 dark:bg-white/15 dark:hover:bg-white/25 backdrop-blur text-white md:right-4 md:top-4 ring-1 ring-white/20"
                      onClick={handleClose}
                      aria-label="Cerrar"
                    >
                      <IconX className="h-5 w-5" />
                    </button>

                    {/* Títulos */}
                    <div className="absolute bottom-4 left-0 right-0 px-4 md:px-5">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[16px] font-medium text-white/90 backdrop-blur-sm shadow-sm">
                        {card.category}
                      </span>
                      <h3 className="mt-2 w-fit rounded-lg bg-black/15 px-4 py-2 text-3xl font-semibold text-white md:text-4xl [text-wrap:balance] backdrop-blur-sm shadow-sm">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div
                    ref={contentInnerRef}
                    className={cn(
                      "mx-auto w-full px-4 py-5",
                      shortScreen
                        ? "md:max-w-6xl md:px-4 md:py-4"
                        : "md:max-w-6xl md:px-6 md:py-6"
                    )}
                    style={{
                      transform: `scale(${desktopScale})`,
                      transformOrigin: "top center",
                    }}
                  >
                    {card.content}
                  </div>

                  {/* Safe area inferior iOS */}
                  <div className="h-[max(env(safe-area-inset-bottom,16px),16px)] md:h-0" />
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={() => setOpen(true)}
        className="relative z-10 flex h-64 w-full md:h-96 md:w-96 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 dark:bg-neutral-900"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        <div className="relative z-40 p-6 md:p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-left font-sans text-xs md:text-sm font-medium text-white"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="mt-1 md:mt-2 max-w-[12rem] md:max-w-[16rem] text-left font-sans text-lg md:text-2xl font-semibold [text-wrap:balance] text-white"
          >
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="absolute inset-0 z-10 object-cover"
        />
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: any) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <img
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-0" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src as string}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      alt={alt || "Background image"}
      {...rest}
    />
  );
};
