"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function AnimatedHomeProfessional() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const textRevealVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -20 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 1.2, ease: "easeOut" as const },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1, delay: 1.5 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* 3D Background */}

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 pointer-events-none">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center justify-center text-center mt-12 md:mt-20"
        >
          {/* Radical Huge Headlines */}
          <div className="overflow-hidden mb-2 px-4">
            <motion.h1
              variants={textRevealVariants}
              className="text-[13vw] sm:text-[11vw] md:text-[10vw] lg:text-[9vw] xl:text-[8vw] 2xl:text-[9rem] font-black tracking-tighter leading-[0.95] uppercase py-1"
            >
              CREANDO
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-2 px-4">
            <motion.h1
              variants={textRevealVariants}
              className="text-[13vw] sm:text-[11vw] md:text-[10vw] lg:text-[9vw] xl:text-[8vw] 2xl:text-[9rem] font-black tracking-tighter leading-[0.95] uppercase text-transparent py-1"
              style={{ WebkitTextStroke: "1.2px rgba(255,255,255,0.8)" }}
            >
              FUTUROS
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-8 px-4">
            <motion.h1
              variants={textRevealVariants}
              className="text-[13vw] sm:text-[11vw] md:text-[10vw] lg:text-[9vw] xl:text-[8vw] 2xl:text-[9rem] font-black tracking-tighter leading-[0.95] uppercase py-1"
            >
              DIGITALES.
            </motion.h1>
          </div>

          <motion.div variants={fadeInVariants} className="max-w-2xl mx-auto mb-10 md:mb-16 pointer-events-auto">
            <p className="text-lg xs:text-xl sm:text-2xl text-white/50 font-light leading-relaxed px-4">
              Transformamos ideas en soluciones digitales extraordinarias
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={fadeInVariants}
            className="flex flex-col sm:flex-row gap-4 pointer-events-auto w-full sm:w-auto px-4 sm:px-0"
          >
            <Link
              href="/contacto"
              className="group relative inline-flex items-center justify-center px-6 py-4 xs:px-10 xs:py-5 text-base xs:text-lg font-bold text-black bg-white hover:bg-white/90 rounded-full transition-transform duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <span className="flex items-center gap-2">
                Iniciar Proyecto
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/proyectos"
              className="group relative inline-flex items-center justify-center px-6 py-4 xs:px-10 xs:py-5 text-base xs:text-lg font-bold text-white bg-white/5 border border-white/20 hover:bg-white/10 rounded-full transition-all duration-300 backdrop-blur-md hover:scale-105 w-full sm:w-auto"
            >
              Ver Casos de Éxito
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
