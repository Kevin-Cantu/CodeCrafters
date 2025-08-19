"use client";

import { motion } from "framer-motion";
import { HeroProjectsBackground } from "@/components/common/HeroProjectsBackground";

const easeOutCubic = [0.16, 1, 0.3, 1] as const;

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: easeOutCubic } },
});

export function ProjectsHero() {
  return (
    <section className="relative isolate pt-28 pb-14 sm:pt-36 sm:pb-20 overflow-x-clip">
      {/* Background unificado */}
      <HeroProjectsBackground />

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
        >
          <motion.div
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-xs font-medium text-slate-700 shadow-sm backdrop-blur"
            variants={fadeInUp(0)}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-primary-500" />
            Proyectos destacados
          </motion.div>

          <motion.h1
            className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-300"
            variants={fadeInUp(0.05)}
          >
            Soluciones a medida con un diseño
            <span className="mx-2 bg-gradient-to-r from-primary-600 via-purple-600 to-primary-500 bg-clip-text text-transparent">profesional</span>
            y performante
          </motion.h1>

          <motion.p
            className="mt-5 text-lg md:text-xl leading-relaxed text-slate-300"
            variants={fadeInUp(0.1)}
          >
            Casos reales de negocio resueltos con tecnología moderna. Calidad visual, rendimiento y resultados.
          </motion.p>

          {/* subtle divider */}
          <motion.div
            className="mx-auto mt-8 h-px w-40 bg-gradient-to-r from-transparent via-slate-300 to-transparent"
            variants={fadeInUp(0.15)}
          />
        </motion.div>
      </div>
    </section>
  );
}
