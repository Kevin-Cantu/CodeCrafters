"use client";

import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

const easeOutCubic = [0.16, 1, 0.3, 1] as const;

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
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
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      // Asegura que el scroll siempre inicie completamente a la izquierda
      carouselRef.current.scrollLeft = initialScroll ?? 0;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      // Ajustado a los nuevos tamaños y separación de las cards
      const cardWidth = isMobile() ? 256 : 384; // w-64 (256px) y md:w-96 (384px)
      const gap = isMobile() ? 24 : 32; // gap-6 (24px) y md:gap-8 (32px)
      const scrollPosition = (cardWidth + gap) * index; // alinea el card con el borde izquierdo visible
      carouselRef.current.scrollTo({ left: scrollPosition, behavior: "smooth" });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 md:py-20 [scrollbar-width:none] snap-x snap-mandatory"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div className="absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l" />

          {/* Inicia al borde izquierdo, padding simétrico y snap para ver cada card completa */}
          <div className="flex w-full flex-row justify-start gap-6 md:gap-8 pl-4 md:pl-8 pr-4 md:pr-8">
            {items.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 * index, ease: easeOutCubic } }}
                key={"card" + index}
                className="flex-none snap-start"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mr-10 flex justify-end gap-2">
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({ card, index, layout = false }: { card: Card; index: number; layout?: boolean }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") handleClose();
    }
    // Bloquear scroll del body detrás del modal
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

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
          <div className="fixed inset-0 z-50 h-screen overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            {/* Contenedor centrado con altura controlada */}
            <div className="relative z-[60] flex h-full w-full items-center justify-center p-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.25, ease: easeOutCubic } }}
                exit={{ opacity: 0, scale: 0.98 }}
                ref={containerRef}
                layoutId={layout ? `card-${card.title}` : undefined}
                className="w-full max-w-2xl md:max-w-5xl rounded-2xl md:rounded-3xl bg-white p-4 md:p-8 font-sans dark:bg-neutral-900 overflow-hidden h-[85vh] md:h-[88vh] shadow-2xl"
              >
                <button
                  className="absolute top-3 right-3 md:top-4 md:right-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/90 dark:bg-white"
                  onClick={handleClose}
                >
                  <IconX className="h-5 w-5 text-neutral-100 dark:text-neutral-900" />
                </button>
                {/* En mobile el contenido es scrolleable dentro del card; en desktop no */}
                <div className="h-full flex flex-col overflow-y-auto md:overflow-y-visible">
                  <motion.p
                    layoutId={layout ? `category-${card.title}` : undefined}
                    className="pt-6 md:pt-10 text-base font-medium text-black dark:text-white"
                  >
                    {card.category}
                  </motion.p>
                  <motion.p
                    layoutId={layout ? `title-${card.title}` : undefined}
                    className="mt-2 text-2xl md:text-5xl font-semibold text-neutral-700 dark:text-white"
                  >
                    {card.title}
                  </motion.p>
                  <div className="mt-4 md:mt-6 flex-1">
                    {card.content}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="relative z-10 flex h-64 w-64 md:h-96 md:w-96 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 dark:bg-neutral-900"
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
        <BlurImage src={card.src} alt={card.title} fill className="absolute inset-0 z-10 object-cover" />
      </motion.button>
    </>
  );
};

export const BlurImage = ({ height, width, src, className, alt, ...rest }: any) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <img
      className={cn("h-full w-full transition duration-300", isLoading ? "blur-0" : "blur-0", className)}
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
