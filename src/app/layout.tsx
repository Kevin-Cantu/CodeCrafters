import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

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
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}