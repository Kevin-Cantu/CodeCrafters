import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { RouteTransition } from '@/components/layout/RouteTransition'
import { WhatsAppFloatingButton } from '@/components/common/WhatsAppFloatingButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Consultora de Programación | Desarrollo de Software | CodeCrafters MX',
  description:
    'Consultora especializada en desarrollo de software, aplicaciones web, inteligencia artificial y frameworks modernos. Creamos soluciones tecnológicas innovadoras, escalables y seguras para tu negocio.',
  keywords:
    'consultora, programación, desarrollo, software, frameworks, react, next.js, codecraftersmx, codecrafters, code crafters, consultoría web, desarrollo web, desarrollo de aplicaciones, desarrollo de apps, inteligencia artificial, machine learning, automatización, diseño web, UX, UI, sistemas, desarrollo backend, desarrollo frontend, integraciones API, sitios web profesionales, optimización SEO, hosting, mantenimiento web, soporte técnico, transformación digital, startups, soluciones digitales, tecnología, innovación, desarrollo empresarial, software a medida, páginas web, apps móviles, consultoría tecnológica, microservicios, bases de datos, node.js, python, javascript, typescript, proyectos tecnológicos, cloud computing, AWS, Azure, Google Cloud, desarrollo fullstack, desarrollo empresarial, proyectos web, software personalizado, servicios IT, TI, programación avanzada, aplicaciones inteligentes, desarrollo moderno, consultora digital, empresa de software, servicios tecnológicos, soluciones web, arquitectura de software, desarrollo escalable, desarrollo en la nube, desarrollo multiplataforma, SaaS, sistemas personalizados, automatización empresarial, frameworks modernos, herramientas tecnológicas, innovación digital, soluciones personalizadas, diseño de sistemas, implementación tecnológica',
  authors: [{ name: 'Consultora de Programación - CodeCrafters MX' }],
  metadataBase: new URL('https://codecraftersmx.com'),
  robots: { index: true, follow: true },
  icons: {
    icon: '/public/logo/ccbase.jpeg',
    shortcut: '/public/logo/ccbase.jpeg',
    apple: '/public/logo/ccbase.jpeg',
  },
  openGraph: {
    title: 'Consultora de Programación | CodeCrafters MX',
    description:
      'Desarrollo de software, aplicaciones web y soluciones tecnológicas innovadoras.',
    type: 'website',
    url: 'https://codecraftersmx.com',
    siteName: 'CodeCrafters',
    images: [
      {
        url: '/public/logo/ccbase.jpeg',
        width: 1200,
        height: 630,
        alt: 'CodeCrafters - Consultoría de software y desarrollo web',
      },
    ],
    locale: 'es_MX',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consultora de Programación | CodeCrafters MX',
    description:
      'Desarrollo de software, aplicaciones web y frameworks modernos. Soluciones digitales para tu negocio.',
    images: ['/assets/cc.jpeg'],
    creator: '@codecraftersmx',
  },
  alternates: {
    canonical: 'https://codecraftersmx.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
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
