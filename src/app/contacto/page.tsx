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
    <>
      <section className="relative isolate bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <ContactHero />
      </section>
      <section className="relative z-50 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  )
}
