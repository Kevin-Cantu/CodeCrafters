"use client";

import { VideoText } from "@/components/magicui/video-text";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroProjectsBackground } from "@/components/common/HeroProjectsBackground";

const easeOutCubic = [0.16, 1, 0.3, 1] as const;

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: easeOutCubic } },
});

const stagger = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

export function AnimatedHomeProfessional() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-6 ">
      {/* Fondo unificado tipo Proyectos */}
      <HeroProjectsBackground />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-52 2xl:px-12">
        <motion.div
          className="text-center"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* Company Logo/Brand */}
          <motion.div className="relative group py-11" variants={fadeInUp(0)}>
            <VideoText 
              src="/assets/video.mp4" 
              fontSize={16} 
              className="h-[200px] sm:h-[240px] md:h-[160px] transition-all duration-700 "
            >
              CodeCrafters
            </VideoText>
       
          </motion.div>

          {/* Main Headline */}
          <div className="space-y-3 max-w-5xl mx-auto ">
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight tracking-tight"
              variants={fadeInUp(0.05)}
            >
              Transformamos{" "}
              <span className="font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                ideas
              </span>{" "}
              en{" "}
              <span className="font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                soluciones digitales
              </span>
              <br />
              <span className="text-slate-300 font-extralight">extraordinarias</span>
            </motion.h1>
            
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light"
              variants={fadeInUp(0.1)}
            >
              Consultora especializada en desarrollo de software a medida.
              <br />
              <span className="text-slate-300">Convertimos visiones en productos digitales exitosos.</span>
            </motion.p>
          </div>

          {/* Call-to-Action Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8" variants={fadeInUp(0.15)}>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contacto"
                className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-medium text-white transition-all duration-300 ease-out bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl hover:from-blue-700 hover:to-purple-700 hover:shadow-xl hover:shadow-blue-500/20 border border-blue-500/20"
              >
                <span className="relative z-10 flex items-center">
                  Iniciar proyecto
                  <svg className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/proyectos"
                className="group inline-flex items-center justify-center px-10 py-4 text-lg font-medium text-slate-300 transition-all duration-300 ease-out border border-slate-600 rounded-2xl hover:border-slate-400 hover:text-white hover:bg-slate-800/50 backdrop-blur-sm"
              >
                <span className="flex items-center">
                  Ver portafolio
                  <svg 
                    className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Professional Stats */}
          <motion.div className="pt-20 grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-4xl mx-auto" variants={fadeInUp(0.2)}>
            {[
              { number: "8+", label: "Años de experiencia", gradient: "from-purple-400 to-pink-400", description: "En el mercado" },
              { number: "100%", label: "Satisfacción del cliente", gradient: "from-emerald-400 to-teal-400", description: "Garantía de calidad" }
            ].map((stat, index) => (
              <motion.div key={index} className="text-center space-y-3 group cursor-default" whileHover={{ scale: 1.04 }}>
                <div className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <div className="space-y-1">
                  <div className="text-white text-base sm:text-lg font-medium">
                    {stat.label}
                  </div>
                  <div className="text-slate-400 text-sm">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div className="pt-12 flex flex-col items-center space-y-4 pb-4" variants={fadeInUp(0.25)}>
            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xl">Consulta gratuita</span>
              <span className="text-slate-600">•</span>
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xl">Soporte continuo</span>
              <span className="text-slate-600">•</span>
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xl">Entrega garantizada</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
