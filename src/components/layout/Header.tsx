'use client'
import { FC, useEffect, useState } from "react";
import { Code2, Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { AnimatePresence, motion } from "framer-motion";

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Proyectos', href: '/proyectos' },
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
      className={`fixed left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-300 ease-in-out
        top-0 ${scrolled ? "translate-y-6" : "translate-y-0"}`}
    >
      <div
        className={`pointer-events-auto max-w-4xl w-full mx-4 transition-all duration-300 ease-in-out
          ${
            scrolled
              ? "bg-white/95 backdrop-blur border border-gray-200 rounded-md shadow-lg"
              : "bg-transparent rounded-xl"
          }`}
      >
        <nav className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Code2
              className={`h-6 w-6 transition-colors duration-300 ${
                scrolled ? "text-purple-600" : "text-purple-600"
              }`}
            />
            <span
              className={`text-xl font-bold transition-colors duration-300 ${
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

            {/* CTA Button */}
            <InteractiveHoverButton>
              <Link href="/contacto">
                Contáctanos
              </Link>
            </InteractiveHoverButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className={`transition-colors duration-300 ${
                scrolled ? "text-gray-700 hover:text-purple-600" : "text-white hover:text-purple-200"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation - attached to top */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                key="backdrop"
                className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
              />

              {/* Top sheet attached to the top edge (no floating box) */}
              <motion.div
                key="sheet"
                id="mobile-menu"
                className="fixed inset-x-0 top-0 z-50 md:hidden"
                initial={{ y: -24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -24, opacity: 0 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <div className="w-full border-b border-slate-200 bg-white/95 shadow-lg backdrop-blur">
                  <div className="flex items-center justify-between px-5 py-4">
                    <span className="text-sm font-medium text-slate-500">Menú</span>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="rounded-full p-2 text-slate-700 hover:bg-slate-100 active:scale-95 transition"
                      aria-label="Cerrar menú"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="flex flex-col px-2 pb-3">
                    {navigation.map((item) => {
                      const active = pathname === item.href;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`group relative mx-2 my-1 inline-flex items-center justify-between gap-2 rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                            active
                              ? 'bg-gradient-to-r from-violet-50 to-purple-50 text-purple-700 border border-purple-200'
                              : 'text-slate-700 hover:bg-slate-50 border border-transparent'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span>{item.name}</span>
                          <ArrowRight className={`h-4 w-4 transition-transform group-hover:translate-x-0.5 ${active ? 'text-purple-600' : 'text-slate-400'}`} />
                        </Link>
                      );
                    })}

                    <div className="mt-2 px-2">
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
