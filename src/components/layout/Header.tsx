'use client'
import { FC, useEffect, useState } from "react";
import { Code2, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

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
              ? "bg-white shadow-lg border border-gray-200 rounded-md"
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
            >
              <span className="sr-only">
                {mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              </span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white rounded-b-md">
            <div className="flex flex-col space-y-4 px-6 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-lg font-semibold transition-colors ${
                    pathname === item.href
                      ? 'text-purple-600'
                      : 'text-gray-700 hover:text-purple-700'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile CTA */}
              <div className="pt-2 border-t border-gray-200">
                <InteractiveHoverButton>
                  <Link 
                    href="/contacto" 
                    className="inline-block w-full text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contáctanos
                  </Link>
                </InteractiveHoverButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}