'use client'

import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { motion } from 'framer-motion'

const easeOutCubic = [0.16, 1, 0.3, 1] as const

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
    content: 'Ciudad de México, México',
    link: '#',
  },
]

export function ContactInfo() {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easeOutCubic }}
      viewport={{ once: true, amount: 0.2 }}
    >
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
            <motion.div key={index} className="flex items-start gap-4" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.05, ease: easeOutCubic }} viewport={{ once: true }}>
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
            </motion.div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800">
          <h3 className="text-lg font-medium text-white mb-4">
            Síguenos
          </h3>
          <div className="flex gap-4">
            <Link href={siteConfig.links.linkedin} className="text-slate-400 hover:text-white transition-colors" target="_blank">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </Link>
            <Link href={siteConfig.links.github} className="text-slate-400 hover:text-white transition-colors" target="_blank">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747 1.043 2.747 1.043.692 1.76.258 3.055.127 3.379.817.89 1.31 2.03 1.31 3.44 0 4.944-3.002 6.03-5.862 6.35.462.398.874 1.183.874 2.384 0 1.72-.016 3.104-.016 3.527 0 .268.18.58.688.481C19.134 20.194 22 16.44 22 12.017 22 6.484 17.523 2 12 2z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
