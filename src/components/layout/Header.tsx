"use client";
import { useEffect, useState } from "react";
import { Code2, Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const navigation = [
  { name: "Inicio", href: "/" },
  // Proyectos eliminado para ocultar enlaces a /proyectos
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed left-0 right-0 z-[40] flex justify-center pointer-events-none transition-all duration-500 ease-in-out ${scrolled ? "top-0 md:top-4" : "top-0"
        }`}
    >
      <div
        className={`pointer-events-auto transition-all duration-500 ease-in-out relative isolate w-full ${scrolled
          ? "md:max-w-5xl md:mx-4 md:rounded-full bg-black/60 backdrop-blur-xl border-b md:border border-white/10 shadow-2xl shadow-purple-900/10"
          : "bg-transparent border-transparent md:max-w-[100vw] rounded-none py-2"
          }`}
      >
        <nav className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo/ccdark.svg"
              alt="CodeCrafters"
              width={160}
              height={72}
              className="sm:h-[4.5rem] h-16 w-auto transition-transform hover:scale-105 duration-300 "
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm tracking-widest uppercase font-bold transition-colors duration-300 ${pathname === item.href
                  ? "text-white"
                  : "text-white/50 hover:text-white"
                  }`}
              >
                {item.name}
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              href="/contacto"
              className="group relative cursor-pointer overflow-hidden rounded-full border border-purple-500/50 bg-purple-600 shadow-[0_0_15px_rgba(168,85,247,0.4)] px-6 py-2.5 text-xs tracking-widest uppercase font-black text-white hover:bg-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all duration-300"
              aria-label="Contáctanos"
            >
              <div className="flex items-center gap-2">
                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-8">
                  CONSTRUYAMOS
                </span>
              </div>
              <div className="absolute inset-0 flex h-full w-full items-center justify-center gap-2 translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span>INICIAR</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white/80 hover:text-purple-400 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Dropdown */}
              <motion.div
                key="sheet"
                id="mobile-menu"
                className="absolute inset-x-0 top-full z-[100] md:hidden mt-"
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <div className="w-full bg-black/95 backdrop-blur-xl border-y border-purple-500/20 shadow-2xl">
                  <div className="flex flex-col px-4 py-6 gap-2">
                    {navigation.map((item) => {
                      const active = pathname === item.href;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`flex items-center justify-between px-4 py-4 rounded-xl text-sm tracking-widest uppercase font-bold transition-all ${active ? "bg-purple-500/20 text-purple-300 border border-purple-500/30" : "text-white/60 hover:bg-white/5 hover:text-white"
                            }`}

                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span>{item.name}</span>
                          <ArrowRight className={`h-4 w-4 ${active ? "opacity-100 text-purple-400" : "opacity-0"}`} />
                        </Link>
                      );
                    })}

                    <div className="mt-4 px-2 pb-4">
                      <Link
                        href="/contacto"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex w-full items-center justify-center gap-2 rounded-xl px-4 py-4 text-sm font-black tracking-widest uppercase border border-purple-500/50 bg-purple-600 shadow-[0_0_15px_rgba(168,85,247,0.3)] text-white hover:bg-purple-500 transition-all"
                      >
                        Iniciar Ahora
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
