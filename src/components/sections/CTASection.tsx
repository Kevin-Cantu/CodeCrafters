"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code2, Rocket, MessageCircle, Zap } from "lucide-react";
import { useRef } from "react";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" as const },
  },
});

const stagger = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-black text-white py-16 md:py-24">
      {/* Structural Minimal Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

      {/* Heavy glow behind CTA text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        className="container-custom relative z-10"
        style={{ y }}
      >
        <motion.div
          className="mx-auto max-w-5xl flex flex-col items-center text-center"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Header */}
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/20 mb-6 md:mb-8"
            variants={fadeInUp(0)}
          >
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-white/80">Iniciar Ahora</span>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-[12vw] xs:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8"
            variants={fadeInUp(0.1)}
          >
            CONSTRUYE <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.8)" }}>
              EL FUTURO.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="mx-auto max-w-2xl text-lg md:text-2xl font-light leading-relaxed text-white/50 mb-10 md:mb-16 px-4"
            variants={fadeInUp(0.2)}
          >
            ¿Tienes un proyecto en mente? Hablemos sobre cómo podemos escalar tu visión con ingeniería de clase mundial.
          </motion.p>

          {/* Primary CTA */}
          <motion.div variants={fadeInUp(0.3)} className="w-full xs:w-auto px-6 xs:px-0">
            <Link
              href="/contacto"
              className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-4 xs:px-10 xs:py-5 text-base xs:text-lg font-black text-black transition-all duration-300 hover:scale-105 hover:bg-white/90 uppercase tracking-widest overflow-hidden w-full xs:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                Hablar con un experto
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
          </motion.div>

          {/* Trust tags */}
          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
            variants={fadeInUp(0.4)}
          >
            <motion.div
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              <Zap className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-white/80">Respuesta en 24h</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-white/80">Sin compromiso</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              <Rocket className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-white/80">Calidad Premium</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
