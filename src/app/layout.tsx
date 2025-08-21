'use client' // necesario para usar useEffect

import { useEffect } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { RouteTransition } from '@/components/layout/RouteTransition';

const inter = Inter({ subsets: ['latin'] });

 const metadata: Metadata = {
  title: 'Consultora de Programación | Desarrollo de Software',
  description: 'Consultora especializada en desarrollo de software y frameworks modernos. Creamos soluciones tecnológicas innovadoras para tu negocio.',
  keywords: 'consultora, programación, desarrollo, software, frameworks, react, next.js',
  authors: [{ name: 'Consultora de Programación' }],
  openGraph: {
    title: 'Consultora de Programación',
    description: 'Desarrollo de software y frameworks modernos',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    let startY = 0;
  
    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };
  
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const currentY = e.touches[0].clientY;
      const deltaY = startY - currentY;
      window.scrollBy({ top: deltaY * 0.3, left: 0 });
      startY = currentY;
    };
  
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
  
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <RouteTransition>{children}</RouteTransition>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}