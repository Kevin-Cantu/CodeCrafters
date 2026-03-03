"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  Star,
  Zap,
  Rocket,
  Code2,
  MessageCircle,
} from "lucide-react";
import { useRef } from "react";

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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

// Animated background shapes
const AnimatedShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Floating circles */}
    <motion.div
      className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"
      animate={{
        x: [0, 30, 0],
        y: [0, -20, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
      animate={{
        x: [0, -40, 0],
        y: [0, 30, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-3xl"
      animate={{
        rotate: 360,
        scale: [1, 1.1, 1],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />

    {/* Grid pattern */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

    {/* Animated lines */}
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="cta-line-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      {[...Array(3)].map((_, i) => (
        <motion.line
          key={i}
          x1="0%"
          y1={`${30 + i * 20}%`}
          x2="100%"
          y2={`${30 + i * 20}%`}
          stroke="url(#cta-line-gradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{
            duration: 3,
            delay: i * 0.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      ))}
    </svg>
  </div>
);

// Floating icon component
const FloatingIcon = ({
  Icon,
  delay,
  className,
}: {
  Icon: React.ElementType;
  delay: number;
  className: string;
}) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
  >
    <motion.div
      className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 4,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Icon className="w-6 h-6 text-white/80" />
    </motion.div>
  </motion.div>
);

export function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <section ref={containerRef} className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600" />

        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-blue-600/50 via-purple-600/50 to-pink-600/50"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
        />

        {/* Noise overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,\
          <svg xmlns='http://www.w3.org/2000/svg' width='256' height='256' viewBox='0 0 256 256'>\
          <filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/></filter>\
          <rect width='256' height='256' filter='url(%23n)' opacity='0.6'/></svg>",
          }}
        />
      </div>

      {/* Animated shapes */}
      <AnimatedShapes />

      {/* Floating icons */}
      <FloatingIcon
        Icon={Code2}
        delay={0.2}
        className="top-20 left-[10%] hidden lg:flex"
      />
      <FloatingIcon
        Icon={Rocket}
        delay={0.4}
        className="top-32 right-[15%] hidden lg:flex"
      />
      <FloatingIcon
        Icon={Zap}
        delay={0.6}
        className="bottom-32 left-[20%] hidden lg:flex"
      />
      <FloatingIcon
        Icon={MessageCircle}
        delay={0.8}
        className="bottom-20 right-[10%] hidden lg:flex"
      />

      <motion.div
        className="container-custom relative py-24 lg:py-32"
        style={{ y, scale }}
      >
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* Title */}
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
            variants={fadeInUp(0.1)}
          >
            ¿Listo para comenzar
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">tu proyecto?</span>
              <motion.span
                className="absolute bottom-2 left-0 w-full h-3 bg-white/20 -z-0"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80"
            variants={fadeInUp(0.2)}
          >
            Te acompañamos desde la idea hasta el lanzamiento con un equipo
            experto en diseño, desarrollo y nube.
            <span className="block mt-2 text-white/60">
              Respuesta en menos de 24 horas.
            </span>
          </motion.p>

          {/* Actions */}
          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            variants={fadeInUp(0.3)}
          >
            {/* Primary CTA */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contacto"
                className="group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-gray-900 shadow-xl transition-all duration-300 hover:shadow-2xl overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-gray-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-purple-600" />
                  Hablar con un experto
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </span>
              </Link>
            </motion.div>

            {/* Secondary CTA */}

            {/* <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/proyectos"
                className="group relative inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white/20 overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  <Code2 className="w-5 h-5" />
                  Ver proyectos
                </span>
              </Link>
            </motion.div> */}
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-12 flex flex-col items-center justify-center gap-4 text-white/90"
            variants={fadeInUp(0.4)}
          >
            <div className="flex flex-wrap items-center justify-center gap-6">
              {[
                { icon: Clock, text: "Respuesta en 24h" },
                { icon: ShieldCheck, text: "Presupuesto sin compromiso" },
                { icon: Star, text: "5/5 satisfacción" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                >
                  <motion.div
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <item.icon className="w-4 h-4 text-white/80" />
                  </motion.div>
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Decorative bottom element */}
          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-white/30" />
              <motion.div
                className="w-3 h-3 rounded-full bg-white/20"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-white/30" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
