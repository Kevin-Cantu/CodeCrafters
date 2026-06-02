"use client";

import { motion } from "framer-motion";
import { HeroProjectsBackground } from "@/components/common/HeroProjectsBackground";

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] } },
});

const textRevealVariants = {
  hidden: { opacity: 0, y: 80, rotateX: -20 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
  },
};

export function ProjectsHero() {
  return (
    <section className="relative isolate pt-32 pb-14 sm:pt-40 sm:pb-20 overflow-x-clip">
      {/* Background unificado */}
      <HeroProjectsBackground />

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
        >
          <div className="overflow-hidden">
            <motion.h1
              className="text-[12vw] xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] uppercase text-white"
              variants={textRevealVariants}
            >
              INGENIERÍA
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              className="text-[12vw] xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] uppercase text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.7)" }}
              variants={textRevealVariants}
            >
              QUE IMPULSA
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-6 sm:mb-8">
            <motion.h1
              className="text-[12vw] xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] uppercase text-white"
              variants={textRevealVariants}
            >
              VISIONES.
            </motion.h1>
          </div>

          <motion.p
            className="mt-8 text-lg md:text-xl font-light leading-relaxed text-slate-400 max-w-2xl mx-auto px-4"
            variants={fadeInUp(0.4)}
          >
            Explora nuestra selección de proyectos donde la innovación técnica se encuentra con el diseño de vanguardia.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
