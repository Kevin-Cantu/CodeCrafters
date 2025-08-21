import { Metadata } from 'next'
import { ContactHero } from '@/components/sections/ContactHero'
import { ContactForm } from '@/components/sections/ContactForm'
import { ContactInfo } from '@/components/sections/ContactInfo'

export const metadata: Metadata = {
  title: 'Contacto | Consultora de Programación',
  description: 'Ponte en contacto con nosotros para discutir tu próximo proyecto de desarrollo de software.',
}

export default function ContactoPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Primero: Formulario y detalles de contacto */}
      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>

      {/* Segundo: Hero más compacto */}
      <ContactHero />
    </div>
  )
}
