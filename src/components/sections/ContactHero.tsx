"use client";

import Link from 'next/link'
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern'
import { motion } from 'framer-motion'

const easeOutCubic = [0.16, 1, 0.3, 1] as const

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: easeOutCubic } },
})

const stagger = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

export function ContactHero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Animated background */}
      <AnimatedGridPattern
        numSquares={42}
        maxOpacity={0.06}
        duration={4}
        repeatDelay={1.5}
        className="text-slate-400/50 [mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
      />

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-950/10 via-transparent to-purple-950/10" />

      <div className="container-custom relative z-10">
        <motion.div className="text-center max-w-4xl mx-auto" variants={stagger} initial="hidden" animate="show">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/50 px-4 py-1.5 text-sm text-slate-300 backdrop-blur"
            variants={fadeInUp(0)}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Hablemos — respuesta en menos de 24h
          </motion.div>

          <motion.h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white" variants={fadeInUp(0.05)}>
            Construyamos algo extraordinario
          </motion.h1>

          <motion.p className="mt-5 text-lg md:text-xl leading-relaxed text-slate-300" variants={fadeInUp(0.1)}>
            Cuéntanos sobre tu idea, tu desafío o tu próximo producto. Nos encargamos de convertirlo en una solución digital de alto impacto.
          </motion.p>

          <motion.div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" variants={fadeInUp(0.15)}>
            <a
              href="#contacto-form"
              className="group inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 border border-blue-500/30 shadow-lg shadow-blue-600/10 hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              Cotiza tu proyecto
              <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              href="/proyectos"
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-medium text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white hover:bg-slate-900/40 backdrop-blur transition-all"
            >
              Ver trabajos
              <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          <motion.div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-slate-400 text-sm" variants={fadeInUp(0.2)}>
            <div className="inline-flex items-center gap-2">
              <svg className="h-4 w-4 text-emerald-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Consulta gratuita
            </div>
            <span className="text-slate-700">•</span>
            <div className="inline-flex items-center gap-2">
              <svg className="h-4 w-4 text-emerald-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              NDA disponible
            </div>
            <span className="text-slate-700">•</span>
            <div className="inline-flex items-center gap-2">
              <svg className="h-4 w-4 text-emerald-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Sin compromiso
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
