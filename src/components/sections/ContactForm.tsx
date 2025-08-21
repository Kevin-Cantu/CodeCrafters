'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SimpleCombobox, type ComboboxItem } from '@/components/ui/combobox'

const easeOutCubic = [0.16, 1, 0.3, 1] as const

const projectTypes: ComboboxItem[] = [
  { value: 'web', label: 'Desarrollo Web' },
  { value: 'mobile', label: 'Aplicación Móvil' },
  { value: 'api', label: 'API/Backend' },
  { value: 'consulting', label: 'Consultoría' },
  { value: 'other', label: 'Otro' },
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: '',
      budget: '',
      message: '',
    })
  }

  return (
    <motion.div
      id="contacto-form"
      className="relative group"
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: easeOutCubic }}
    >
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-cyan-600/30 opacity-60 blur transition-opacity duration-500 group-hover:opacity-90" />
      <div className="relative bg-slate-900/60 rounded-2xl border border-slate-800 shadow-2xl backdrop-blur p-8">
        <motion.h2 className="text-2xl font-semibold text-white mb-2" initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: easeOutCubic }}>
          Cuéntanos sobre tu proyecto
        </motion.h2>
        <motion.p className="text-slate-300 text-sm mb-6" initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.05, ease: easeOutCubic }}>
          Respuesta en menos de 24h. Tu información está segura con nosotros.
        </motion.p>
        
        <motion.form onSubmit={handleSubmit} className="space-y-6" initial={false} animate="show" variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } }}>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6" variants={{ show: { opacity: 1, y: 0 } }} initial={false}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                Nombre *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Juan Pérez"
                className="w-full px-3 py-2 rounded-lg bg-slate-950/60 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/60 transition"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className="w-full px-3 py-2 rounded-lg bg-slate-950/60 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/60 transition"
              />
            </div>
          </motion.div>

          <motion.div variants={{ show: { opacity: 1, y: 0 } }} initial={false}>
            <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
              Empresa
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Nombre de tu empresa"
              className="w-full px-3 py-2 rounded-lg bg-slate-950/60 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/60 transition"
            />
          </motion.div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6" variants={{ show: { opacity: 1, y: 0 } }} initial={false}>
            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-slate-300 mb-2">
                Tipo de Proyecto
              </label>
              <SimpleCombobox
                id="projectType"
                items={projectTypes}
                value={formData.projectType}
                onChange={(val) => setFormData((prev) => ({ ...prev, projectType: val }))}
                placeholder="Seleccionar..."
                searchPlaceholder="Buscar tipo..."
                emptyMessage="Sin resultados"
                contentClassName="bg-black text-white border-slate-800"
                commandClassName="bg-transparent"
              />
            </div>
          </motion.div>

          <motion.div variants={{ show: { opacity: 1, y: 0 } }} initial={false}>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
              Mensaje *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Cuéntanos más detalles sobre tu proyecto, objetivos y plazos..."
              className="w-full px-3 py-2 rounded-lg bg-slate-950/60 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/60 transition"
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full group relative inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 border border-blue-500/30 shadow-lg shadow-blue-600/10 hover:from-blue-700 hover:to-purple-700 transition-all"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            variants={{ show: { opacity: 1, y: 0 } }}
            initial={false}
          >
            <span className="relative z-10">Enviar Mensaje</span>
            <svg className="ml-2 h-5 w-5 absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>

          <motion.p className="text-xs text-slate-400 text-center" variants={{ show: { opacity: 1, y: 0 } }} initial={false}>
            Al enviar, aceptas nuestra política de privacidad.
          </motion.p>
        </motion.form>
      </div>
    </motion.div>
  )
}
