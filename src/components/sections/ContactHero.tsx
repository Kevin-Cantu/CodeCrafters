"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroProjectsBackground } from "@/components/common/HeroProjectsBackground";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Shield,
  Clock,
} from "lucide-react";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: easeOutExpo },
  },
});

const stagger = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export function ContactHero() {
  return (
    <section className="relative isolate pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 overflow-hidden">
      {/* Fondo unificado tipo Proyectos */}
      <HeroProjectsBackground />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-pink-500/20 to-cyan-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}


          {/* Title */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
            variants={fadeInUp(0.05)}
          >
            Construyamos algo
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              extraordinario
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mt-8 text-lg md:text-xl leading-relaxed text-slate-300 max-w-2xl mx-auto"
            variants={fadeInUp(0.1)}
          >
            Cuéntanos sobre tu idea, tu desafío o tu próximo producto. Nos
            encargamos de convertirlo en una solución digital de alto impacto.
          </motion.p>

          {/* CTA Button */}
          <motion.div className="mt-10" variants={fadeInUp(0.15)}>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a
                href="#contacto-form"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("contacto-form");
                  if (!el) return;
                  const offset = 160;
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset -
                    offset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
                className="group relative inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-semibold text-white overflow-hidden"
              >
                {/* Button background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-all duration-300" />

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />

                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-xl" />
                </div>

                <span className="relative z-10 flex items-center gap-2">
                  Cotiza tu proyecto
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
            variants={fadeInUp(0.2)}
          >
            {[
              { icon: CheckCircle2, text: "Consulta gratuita" },
              { icon: Shield, text: "Información protegida" },
              { icon: Clock, text: "Sin compromiso" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
              >
                <motion.div

                  transition={{ duration: 8, ease: "linear" }}
                >
                  <item.icon className="w-4 h-4 text-emerald-400" />
                </motion.div>
                <span className="text-sm font-medium text-white/80">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
