"use client";

import Link from 'next/link'
import { motion } from 'motion/react'
import { Sparkles, ArrowRight, ShieldCheck, Clock, Star } from 'lucide-react'

const easeOutCubic = [0.16, 1, 0.3, 1] as const

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: easeOutCubic } },
})

const stagger = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

export function CTASection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-600 to-primary-700" />
        {/* Subtle texture/shine */}
        <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_20%_20%,rgba(255,255,255,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_80%_30%,rgba(255,255,255,0.09),transparent_55%)]" />
        {/* Noise overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml;utf8,\
          <svg xmlns=\'http://www.w3.org/2000/svg\' width=\'256\' height=\'256\' viewBox=\'0 0 256 256\'>\
          <filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'2\' stitchTiles=\'stitch\'/></filter>\
          <rect width=\'256\' height=\'256\' filter=\'url(%23n)\' opacity=\'0.6\'/></svg>' }} />
        {/* Animated blobs */}
        <motion.div
          aria-hidden
          className="absolute -top-20 -left-16 h-56 w-56 rounded-full bg-white/15 blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: easeOutCubic }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.15, ease: easeOutCubic }}
        />
      </div>

      <div className="container-custom relative py-20">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Badge */}
          <motion.div
            className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 shadow-sm backdrop-blur"
            variants={fadeInUp(0)}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Consulta inicial sin costo
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.6rem] md:leading-tight"
            variants={fadeInUp(0.05)}
          >
            ¿Listo para comenzar tu proyecto?
            <span className="ml-2 bg-white/20 bg-clip-text text-transparent">Hablemos hoy mismo</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/80 md:text-lg"
            variants={fadeInUp(0.12)}
          >
            Te acompañamos desde la idea hasta el lanzamiento con un equipo experto en diseño, desarrollo y nube.
            Respuesta en menos de 24 horas.
          </motion.p>

          {/* Actions */}
          <motion.div
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            variants={fadeInUp(0.2)}
          >
            <Link
              href="/contacto"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-primary-700 shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 hover:bg-gray-50"
            >
              Hablar con un experto
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="/proyectos"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              Ver proyectos
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.ul
            className="mt-8 flex flex-col items-center justify-center gap-3 text-white/85 sm:flex-row"
            variants={fadeInUp(0.28)}
          >
            <li className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Respuesta en 24h
            </li>
            <li className="hidden h-4 w-px bg-white/30 sm:block" />
            <li className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" />
              Presupuesto sin compromiso
            </li>
            <li className="hidden h-4 w-px bg-white/30 sm:block" />
            <li className="inline-flex items-center gap-2">
              <Star className="h-4 w-4" />
              5/5 satisfacción de clientes
            </li>
          </motion.ul>
        </motion.div>
      </div>
    </section>
  )
}
