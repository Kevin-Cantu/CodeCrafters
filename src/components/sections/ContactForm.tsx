'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SimpleCombobox, type ComboboxItem } from '@/components/ui/combobox'
import { User, Mail, Building2, Layers, MessageSquareText } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { z } from 'zod'

const easeOutCubic = [0.16, 1, 0.3, 1] as const

const projectTypes: ComboboxItem[] = [
  { value: 'web', label: 'Desarrollo Web' },
  { value: 'mobile', label: 'Aplicación Móvil' },
  { value: 'api', label: 'API/Backend' },
  { value: 'consulting', label: 'Consultoría' },
  { value: 'other', label: 'Otro' },
]

type ContactFormProps = {
  onSuccess?: (message: string) => void
}

type FormData = {
  name: string
  email: string
  company: string
  projectType: string
  message: string
}

const schema = z.object({
  name: z.string().min(1, 'el Nombre es obligatorio'),
  email: z.string().email('Ingresa un correo electrónico válido'),
  company: z.string().min(1, 'Empresa es obligatoria'),
  projectType: z.string().min(1, 'Tipo de Proyecto es obligatorio'),
  message: z.string().optional().or(z.literal('')),
})

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  })

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Limpia error del campo modificado
    setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validación con Zod
    const parsed = schema.safeParse(formData)
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {}
      parsed.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof FormData
        fieldErrors[path] = issue.message
      })
      setErrors(fieldErrors)
      return
    }

    try {
      setSubmitting(true)
      const templateParams = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        projectType: formData.projectType,
        message: formData.message,
      }

      const response = await emailjs.send('service_f74t434', 'template_22qckiz', templateParams, 'qZWpiXXlxCTGAjjyx')
      console.log('Correo enviado!', response.status, response.text)
      onSuccess?.('Mensaje enviado con éxito.')
      setFormData({ name:'', email:'', company:'', projectType:'', message:'' })
      setErrors({})
    } catch (err) {
      console.error('Error:', err)
      // Podemos agregar manejo de error general si deseas
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <motion.div
      id="contacto-form"
      className="relative group"
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: easeOutCubic }}
    >
      {/* Glow border */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-cyan-600/30 opacity-60 blur transition-opacity duration-500 group-hover:opacity-90" />

      {/* Container con fondo sutil (diseño base intacto) */}
      <div className="relative bg-slate-950/50 rounded-2xl border border-slate-800 shadow-2xl backdrop-blur p-6 sm:p-8">
        <motion.h2 className="text-2xl font-semibold text-white mb-2" initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: easeOutCubic }}>
          Cuéntanos sobre tu proyecto
        </motion.h2>
        <motion.p className="text-slate-300 text-sm mb-6" initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.05, ease: easeOutCubic }}>
          Respuesta en menos de 24h. Tu información está segura con nosotros.
        </motion.p>
        
        <motion.form noValidate onSubmit={handleSubmit} className="space-y-6" initial={false} animate="show" variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } }}>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6" variants={{ show: { opacity: 1, y: 0 } }} initial={false}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                Nombre <span className="text-red-400">*</span>
              </label>
              <div className="relative group/input">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400/80" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Juan Pérez"
                  className={`w-full pl-10 pr-3 py-2.5 rounded-lg bg-slate-950/60 border text-white placeholder:text-slate-500 focus:outline-none transition shadow-sm ${errors.name ? 'border-red-500 focus:ring-2 focus:ring-red-500/60 focus:border-red-500' : 'border-slate-700/80 focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/60'}`}
                />
              </div>
              {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email <span className="text-red-400">*</span>
              </label>
              <div className="relative group/input">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400/80" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className={`w-full pl-10 pr-3 py-2.5 rounded-lg bg-slate-950/60 border text-white placeholder:text-slate-500 focus:outline-none transition shadow-sm ${errors.email ? 'border-red-500 focus:ring-2 focus:ring-red-500/60 focus:border-red-500' : 'border-slate-700/80 focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/60'}`}
                />
              </div>
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
            </div>
          </motion.div>

          <motion.div variants={{ show: { opacity: 1, y: 0 } }} initial={false}>
            <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
              Empresa <span className="text-red-400">*</span>
            </label>
            <div className="relative group/input">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400/80" />
              <input
                type="text"
                id="company"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                placeholder="Nombre de tu empresa"
                className={`w-full pl-10 pr-3 py-2.5 rounded-lg bg-slate-950/60 border text-white placeholder:text-slate-500 focus:outline-none transition shadow-sm ${errors.company ? 'border-red-500 focus:ring-2 focus:ring-red-500/60 focus:border-red-500' : 'border-slate-700/80 focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/60'}`}
              />
            </div>
            {errors.company && <p className="mt-1 text-xs text-red-400">{errors.company}</p>}
          </motion.div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6" variants={{ show: { opacity: 1, y: 0 } }} initial={false}>
            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-slate-300 mb-2">
                Tipo de Proyecto <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <Layers className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400/80 z-10" />
                <SimpleCombobox
                  id="projectType"
                  items={projectTypes}
                  value={formData.projectType}
                  onChange={(val) => { setFormData((prev) => ({ ...prev, projectType: val })); setErrors((prev) => ({ ...prev, projectType: undefined })) }}
                  placeholder="Seleccionar..."
                  searchPlaceholder="Buscar tipo..."
                  emptyMessage="Sin resultados"
                  contentClassName="bg-black text-white border-slate-800"
                  commandClassName="bg-transparent"
                  buttonClassName={`pl-10 pr-3 py-2.5 bg-slate-950/60 border ${errors.projectType ? 'border-red-500' : 'border-slate-700/80'} hover:bg-slate-900/50`}
                />
              </div>
              {errors.projectType && <p className="mt-1 text-xs text-red-400">{errors.projectType}</p>}
              <p className="mt-2 text-xs text-slate-400">Esto nos ayuda a asignar el equipo adecuado.</p>
            </div>
          </motion.div>

          <motion.div variants={{ show: { opacity: 1, y: 0 } }} initial={false}>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
              Mensaje
            </label>
            <div className="relative">
              <MessageSquareText className="absolute left-3 top-3 h-4 w-4 text-slate-400/80" />
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntanos más detalles sobre tu proyecto, objetivos y plazos..."
                className={`w-full pl-10 pr-3 py-2.5 rounded-lg bg-slate-950/60 border text-white placeholder:text-slate-500 focus:outline-none transition shadow-sm ${errors.message ? 'border-red-500 focus:ring-2 focus:ring-red-500/60 focus:border-red-500' : 'border-slate-700/80 focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/60'}`}
              />
            </div>
            {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
            <p className="mt-2 text-xs text-slate-400">Cuanto más contexto nos des, mejor podremos ayudarte.</p>
          </motion.div>

          <motion.button
            type="submit"
            disabled={submitting}
            className="w-full group relative inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 border border-blue-500/30 shadow-lg shadow-blue-600/10 hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            whileHover={{ scale: submitting ? 1 : 1.01 }}
            whileTap={{ scale: submitting ? 1 : 0.99 }}
            variants={{ show: { opacity: 1, y: 0 } }}
            initial={false}
          >
            {submitting && (
              <svg className="absolute left-6 h-5 w-5 animate-spin text-white/90" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
              </svg>
            )}
            <span className="relative z-10">{submitting ? 'Enviando…' : 'Enviar Mensaje'}</span>
          </motion.button>

          <motion.p className="text-xs text-slate-400 text-center" variants={{ show: { opacity: 1, y: 0 } }} initial={false}>
            Al enviar, aceptas nuestra política de privacidad.
          </motion.p>
        </motion.form>
      </div>
    </motion.div>
  )
}
