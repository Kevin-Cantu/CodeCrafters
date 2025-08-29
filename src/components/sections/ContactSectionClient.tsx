"use client";

import { useEffect, useState } from 'react'
import { ContactForm } from '@/components/sections/ContactForm'
import { ContactInfo } from '@/components/sections/ContactInfo'
import { AnimatePresence, motion } from 'framer-motion'
import { X, CheckCircle2 } from 'lucide-react'

export function ContactSectionClient() {
  const [successMsg, setSuccessMsg] = useState<string | null>(null)
  const [toastKey, setToastKey] = useState(0)

  // Autocierre del toast después de 5 segundos
  useEffect(() => {
    if (!successMsg) return
    setToastKey((k) => k + 1)
    const t = setTimeout(() => setSuccessMsg(null), 5000)
    return () => clearTimeout(t)
  }, [successMsg])

  return (
    <div className="relative">
      {/* Toast flotante animado en la esquina superior derecha - éxito (sin HeroUI) */}
      <AnimatePresence>
        {successMsg && (
          <motion.div
            key={toastKey}
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-4 right-0 z-40 w-full flex justify-end px-4 sm:px-6 lg:px-8 pointer-events-none"
          >
            <div className="pointer-events-auto max-w-md w-full sm:w-auto">
              <div className="relative overflow-hidden rounded-xl ring-1 ring-emerald-400/25 bg-slate-900/90 backdrop-blur shadow-2xl">
                <div className="pointer-events-none absolute inset-0 opacity-35">
                  <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_100%_0%,rgba(16,185,129,0.18),transparent_55%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_0%_0%,rgba(16,185,129,0.14),transparent_60%)]" />
                </div>
                <div className="relative flex items-start gap-3 p-3 sm:p-4 text-white">
                  <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-md bg-emerald-500/90 ring-1 ring-white/15">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">¡Enviado!</div>
                    <div className="mt-0.5 text-sm text-white/95">{successMsg}</div>
                  </div>
                  <button
                    type="button"
                    aria-label="Cerrar"
                    onClick={() => setSuccessMsg(null)}
                    className="-mr-1 inline-flex h-7 w-7 items-center justify-center rounded-md text-white/85 hover:text-white hover:bg-white/10 transition"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ContactForm onSuccess={(msg) => setSuccessMsg(msg)} />
        <ContactInfo />
      </div>
    </div>
  )
}

export default ContactSectionClient;
