"use client";
import { useEffect, useState } from "react";
import { Code2, Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Proyectos", href: "/proyectos" },
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
      className={`fixed left-0 right-0 z-[40] flex justify-center pointer-events-none transition-all duration-300 ease-in-out top-0 ${
        scrolled ? "translate-y-6" : "translate-y-0"
      }`}
    >
      <div
        className={`pointer-events-auto max-w-4xl w-full mx-4 transition-all duration-300 ease-in-out relative isolate ${
          scrolled
            ? "bg-white/95  border border-gray-200 rounded-t-sm shadow-lg"
            : "bg-transparent rounded-xl"
        }`}
      >
        <nav className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-purple-600" />
            <span
              className={`text-xl font-bold transition-colors duration-300 opacity-100 ${
                scrolled ? "text-gray-800" : "text-gray-200"
              }`}
            >
              CodeCrafters
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-lg font-semibold transition-colors duration-300 ${
                  pathname === item.href
                    ? scrolled
                      ? "text-purple-600"
                      : "text-gray-200"
                    : scrolled
                    ? "text-gray-700 hover:text-purple-700"
                    : "text-gray-200 hover:text-purple-400"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* CTA Button - full clickable area */}
            <Link
              href="/contacto"
              className="group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-background px-6 py-2 text-center font-semibold"
              aria-label="Contáctanos"
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary transition-all duration-300 group-hover:scale-[100.8]"></div>
                <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                  Contáctanos
                </span>
              </div>
              <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
                <span>Contáctanos</span>
                <ArrowRight />
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className={`transition-colors duration-300 ${
                scrolled
                  ? "text-gray-700 hover:text-purple-600"
                  : "text-white hover:text-purple-200"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
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

        {/* Mobile Navigation - drop just below navbar */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop behind content but below header */}
              <motion.div
                key="backdrop"
                className="fixed inset-0 z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
              />

              {/* Dropdown attached right under the navbar */}
              <motion.div
                key="sheet"
                id="mobile-menu"
                className="absolute inset-x-0 top-full z-[60] md:hidden"
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <div className="w-full border-b border-slate-200 bg-white/95 shadow-lg backdrop-blur rounded-b-md overflow-hidden">
                  {/* Sin encabezado (sin texto "Menú" ni botón X) */}
                  <div className="flex flex-col px-2 pb-3 pt-2">
                    {navigation.map((item) => {
                      const active = pathname === item.href;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`group relative mx-2 my-1 inline-flex items-center justify-between gap-2 rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                            active
                              ? "bg-gradient-to-r from-violet-50 to-purple-50 text-purple-700 border border-purple-200"
                              : "text-slate-700 hover:bg-slate-50 border border-transparent"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span>{item.name}</span>
                          <ArrowRight
                            className={`h-4 w-4 transition-transform group-hover:translate-x-0.5 ${
                              active ? "text-purple-600" : "text-slate-400"
                            }`}
                          />
                        </Link>
                      );
                    })}

                    <div className="mt-2 px-2 pb-4">
                      <Link
                        href="/contacto"
                        onClick={() => setMobileMenuOpen(false)}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-base font-semibold text-white shadow-md active:scale-[0.99]"
                      >
                        Contáctanos
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
