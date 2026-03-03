"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroProjectsBackground } from "@/components/common/HeroProjectsBackground";
import Image from "next/image";
import { ArrowRight, Sparkles, Zap, Code2, Rocket, Stars } from "lucide-react";

const easeOutCubic = [0.16, 1, 0.3, 1] as const;
const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: easeOutExpo },
  },
});

const fadeInScale = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
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

// Floating particles component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Animated gradient orbs
const GradientOrbs = () => {
  return (
    <>
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-cyan-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </>
  );
};

export function AnimatedHomeProfessional() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-6">
      {/* Fondo unificado tipo Proyectos */}
      <HeroProjectsBackground />

      {/* Animated gradient orbs */}
      <GradientOrbs />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-52 2xl:px-14 mt-14">
        <motion.div
          className="text-center"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}

          {/* Company Logo/Brand */}
          <motion.div
            className="relative group -mt-16 sm:-mb-8 mb-12"
            variants={fadeInScale(0.05)}
          >
            <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/logo/ccdarkfull.svg"
                alt="CodeCrafters logo"
                width={100}
                height={100}
                className="h-[200px] sm:h-[240px] md:h-[360px] w-auto transition-all duration-700 relative z-10 drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Main Headline */}
          <div className="space-y-3 max-w-5xl mx-auto">
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight tracking-tight -mt-12 xl:mt-12"
              variants={fadeInUp(0.1)}
            >
              Transformamos{" "}
              <span className="relative inline-block">
                <span className="font-medium bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                  ideas
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8, ease: easeOutCubic }}
                />
              </span>{" "}
              en{" "}
              <span className="relative inline-block">
                <span className="font-medium bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                  soluciones digitales
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8, ease: easeOutCubic }}
                />
              </span>
              <br />
              <span className="text-slate-300 font-extralight">
                extraordinarias
              </span>
            </motion.h1>

            <motion.p
              className="hidden sm:block text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light"
              variants={fadeInUp(0.15)}
            >
              Consultora especializada en desarrollo de software a medida.
              <br />
              <span className="text-slate-400">
                Convertimos visiones en productos digitales exitosos.
              </span>
            </motion.p>
          </div>

          {/* Call-to-Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-10"
            variants={fadeInUp(0.2)}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ backgroundSize: "200% 200%" }}
              />
              <Link
                href="/contacto"
                className="relative inline-flex items-center justify-center px-10 py-4 text-lg font-medium text-white transition-all duration-300 ease-out bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl border border-white/20 overflow-hidden group/btn"
                style={{ backgroundSize: "200% 200%" }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Iniciar proyecto
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/proyectos"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white/90 transition-all duration-300 ease-out bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Code2 className="w-5 h-5" />
                  Ver proyectos
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Professional Stats */}
          <motion.div
            className="sm:pt-8 pt-12 grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto"
            variants={fadeInUp(0.25)}
          >
            {[
              {
                number: "8+",
                label: "Años de experiencia",
                gradient: "from-purple-400 via-pink-400 to-purple-400",
                description: "En el mercado",
                icon: Zap,
              },
              {
                number: "+20",
                label: "Proyectos realizados",
                gradient: "from-emerald-400 via-teal-400 to-emerald-400",
                description: "Garantía de calidad",
                icon: Rocket,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="relative group cursor-default"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-6 rounded-2xl border border-white/5 group-hover:border-white/10 transition-colors duration-500">
                  <div className="flex items-center justify-center gap-4">
                    <motion.div
                      className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient} bg-opacity-10`}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="text-left">
                      <motion.div
                        className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                          delay: index * 0.3,
                        }}
                        style={{ backgroundSize: "200% 200%" }}
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-white text-base sm:text-lg font-medium">
                        {stat.label}
                      </div>
                      <div className="text-slate-400 text-sm">
                        {stat.description}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="sm:mb-12 -mb-14" />

          {/* Trust Indicators */}
          <motion.div
            className="pt-16 flex flex-col items-center space-y-4 pb-4"
            variants={fadeInUp(0.3)}
          ></motion.div>

          {/* Scroll indicator */}
        </motion.div>
      </div>
    </section>
  );
}
