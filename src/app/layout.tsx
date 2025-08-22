import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { RouteTransition } from '@/components/layout/RouteTransition'
import { LenisProvider } from '@/providers/LenisProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
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
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <LenisProvider
              config={{
                lerp: 0.06,         // desktop: menor => más suave/lento
                wheelMultiplier: 0.9, // desktop: <1 => más "lento" al hacer scroll
                smoothWheel: true,
                smoothTouch: false,  // desktop no usa touch
              }}
              mobileConfig={{
                lerp: 0.06,          // puedes bajar a 0.05 si quieres aún más suave en móvil
                smoothTouch: true,    // activa suavizado táctil
                touchMultiplier: 0.75 // <1 => más lento al deslizar en móvil
              }}
              anchorDuration={1.2}    // duración al ir a #anclas (mayor => más lento)
            >
              <RouteTransition>{children}</RouteTransition>
            </LenisProvider>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
