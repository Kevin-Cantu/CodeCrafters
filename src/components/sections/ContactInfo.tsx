'use client'

import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { Github, Linkedin } from 'lucide-react'

const contactInfo = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    title: 'Email',
    content: siteConfig.links.email,
    link: `mailto:${siteConfig.links.email}`,
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    title: 'Teléfono',
    content: siteConfig.links.phone,
    link: `tel:${siteConfig.links.phone}`,
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: 'Ubicación',
    content: 'Nuevo León, México',
    link: '#',
  },
]

export function ContactInfo() {
  return (
    <div className="relative group">
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-purple-600/30 via-blue-600/30 to-cyan-600/30 opacity-60 blur transition-opacity duration-500 group-hover:opacity-90" />
      <div className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur shadow-2xl">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Información de Contacto
          </h2>
          <p className="text-slate-300">
            Estamos aquí para ayudarte. Escríbenos por cualquiera de estos medios o utiliza el formulario para enviarnos un mensaje.
          </p>
        </div>

        <div className="space-y-6">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white border border-blue-500/30">
                {item.icon}
              </div>
              <div>
                <h3 className="text-sm font-medium text-white">{item.title}</h3>
                {item.link !== '#' ? (
                  <a
                    href={item.link}
                    className="mt-1 inline-block text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="mt-1 text-sm text-slate-300">{item.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800">
          <h3 className="text-lg font-medium text-white mb-4">
            Síguenos
          </h3>

        </div>
      </div>
    </div>
  )
}
