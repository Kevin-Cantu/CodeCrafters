import { Metadata } from 'next'
import { ContactHero } from '@/components/sections/ContactHero'
import { SectionBackdrop } from '@/components/common/SectionBackdrop'
import ContactSectionClient from '@/components/sections/ContactSectionClient'

export const metadata: Metadata = {
  title: 'Contacto | Consultora de Programación',
  description: 'Ponte en contacto con nosotros para discutir tu próximo proyecto de desarrollo de software.',
}

export default function ContactoPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Primero: Hero "Construyamos" */}
      <ContactHero />

      {/* Segundo: Formulario y detalles de contacto con un fondo sutil dedicado */}
      <section className="relative isolate overflow-hidden">
        <SectionBackdrop />
        <div className="container-custom py-16 relative z-10">
          <ContactSectionClient />
        </div>
      </section>
    </div>
  )
}
