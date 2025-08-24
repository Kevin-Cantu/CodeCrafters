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

  // Estado visual: blanco si hay scroll o menú abierto; transparente si no hay scroll y menú cerrado
  const isLightBg = scrolled || mobileMenuOpen;

  // Overlay transparente y por debajo del header (solo click-catcher)
  const overlayClass = "bg-transparent";

  // Panel del menú móvil: siempre claro
  const panelClass = "border-none bg-white";

  const linkBase =
    "group relative mx-2 my-1 inline-flex items-center justify-between gap-2 rounded-xl px-4 py-3 text-base font-semibold transition-colors";

  const linkActive =
    "bg-gradient-to-r from-violet-50 to-purple-50 text-purple-700 border border-purple-200";

  const linkInactive =
    "text-slate-700 hover:bg-slate-50 border border-transparent";

  // Estilos del contenedor del navbar
  // Ancho: expandir a full-width SOLO en mobile cuando no hay scroll y el menú está abierto; en md+ mantener el ancho original
  const headerContainerWidth = !scrolled && mobileMenuOpen
    ? "w-full mx-0 md:max-w-4xl md:w-full md:mx-4"
    : "max-w-4xl w-full mx-4";

  // Fondo del header: transparente cuando no hay scroll ni menú; blanco en el resto
  const headerContainerBase = isLightBg
    ? "bg-white rounded-t-sm shadow-lg"
    : "bg-transparent rounded-xl";

  // Sin overrides adicionales
  const headerContainerOverride = "";

  return (
    <header
      className={`fixed left-0 right-0 z-[40] flex justify-center pointer-events-none transition-all duration-300 ease-in-out top-0 ${
        scrolled ? "translate-y-6" : "translate-y-0"
      }`}
    >
      <div
        className={`pointer-events-auto ${headerContainerWidth} transition-all duration-300 ease-in-out relative isolate ${headerContainerBase} ${headerContainerOverride}`}
      >
        {/* Underlay: pinta el fondo del navbar solo en mobile cuando no hay scroll y el menú está abierto. No bloquea clics */}
        {!scrolled && mobileMenuOpen && (
          <div className="absolute inset-0 z-0 bg-white border-none md:hidden pointer-events-none" />
        )}

        <nav className="relative z-10 flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-purple-600" />
            <span
              className={`text-xl font-bold transition-colors duration-300 opacity-100 ${
                isLightBg ? "text-gray-800" : "text-gray-200"
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
                    ? isLightBg
                      ? "text-purple-600"
                      : "text-gray-200"
                    : isLightBg
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
                isLightBg ? "text-gray-700 hover:text-purple-600" : "text-white hover:text-purple-200"
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

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop (click-catcher) por debajo del header y transparente */}
              <motion.div
                key="backdrop"
                className={`fixed inset-0 z-10 md:hidden ${overlayClass}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
              />

              {/* Dropdown: limitado al contenedor (PC sin cambios) y top-full para no tapar el header */}
              <motion.div
                key="sheet"
                id="mobile-menu"
                className="absolute inset-x-0 top-full z-[100] md:hidden"
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <div className={`w-full rounded-b-xl rounded-t-none overflow-hidden border shadow-lg ${!scrolled ? "border-t-0" : ""} ${panelClass}`}>
                  <div className="flex flex-col px-2 pb-3 pt-2">
                    {navigation.map((item) => {
                      const active = pathname === item.href;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`${linkBase} ${active ? linkActive : linkInactive}`}
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
                        className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-base font-semibold shadow-md active:scale-[0.99] transition-colors bg-gradient-to-r from-blue-600 to-purple-600 text-white border border-blue-500/20`}
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
