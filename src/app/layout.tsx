import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { RouteTransition } from '@/components/layout/RouteTransition'
import { WhatsAppFloatingButton } from '@/components/common/WhatsAppFloatingButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Consultora de Programación | Desarrollo de Software',
  description: 'Consultora especializada en desarrollo de software y frameworks modernos. Creamos soluciones tecnológicas innovadoras para tu negocio.',
  keywords: 'consultora, programación, desarrollo, software, frameworks, react, next.js,codecraftersmx, codecrafters, code crafters, consultoria web,',
  authors: [{ name: 'Consultora de Programación' }],
  metadataBase: new URL('https://codecraftersmx.com'),
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.icass',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Consultora de Programación',
    description: 'Desarrollo de software y frameworks modernos',
    type: 'website',
    url: 'https://codecraftersmx.com',
    siteName: 'CodeCrafters',
    images: [
      {
        url: '/assets/cc.jpeg',
        width: 1200,
        height: 630,
        alt: 'CodeCrafters - Consultoría de software',
      },
    ],
    locale: 'es_MX',
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
            <RouteTransition>{children}</RouteTransition>
          </main>

          {/* Floating WhatsApp button shown on all pages */}
          <WhatsAppFloatingButton position="br" tooltip="¿Hablamos por whatsap?" />

          <Footer />
        </div>
      </body>
    </html>
  )
}
