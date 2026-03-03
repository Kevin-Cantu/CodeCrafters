"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Star, Users } from "lucide-react";

interface Sponsor {
  logo: string;
  alt: string;
}

const sponsors: Sponsor[] = [
  { logo: "/assets/Kinedu.png", alt: "Kinedu" },
  { logo: "/assets/gruposalinas.png", alt: "Grupo Salinas" },
  { logo: "/assets/axity.png", alt: "Axity" },
  { logo: "/assets/once.webp", alt: "Once" },
  { logo: "/assets/vonman.png", alt: "Vonman" },
  { logo: "/assets/crateclogo.png", alt: "Cratec" },
  { logo: "/assets/chocodrop.png", alt: "Chocodrop" },
  { logo: "/assets/upax.webp", alt: "Upax" },
];

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: easeOutExpo },
  },
});

export const SponsorsSection = () => {
  return (
    <section
      id="sponsors"
      aria-labelledby="sponsors-title"
      className="relative isolate overflow-hidden py-12"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Top and bottom gradient fades */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">


          <motion.h2
            id="sponsors-title"
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
            viewport={{ once: true }}
          >
            Marcas que confían
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              en nosotros
            </span>
          </motion.h2>

          <motion.p
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: easeOutExpo }}
            viewport={{ once: true }}
          >
            Empresas líderes que han transformado sus ideas en realidad con
            nosotros
          </motion.p>

          {/* Decorative line */}
          <motion.div
            className="mt-4 flex justify-center"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-blue-300" />
              <motion.div
                className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-purple-300" />
            </div>
          </motion.div>
        </div>

        {/* Carousel */}
        <motion.div
          className="relative "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: easeOutExpo }}
          viewport={{ once: true }}
        >
          {/* Gradient masks on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div role="region" aria-label="Patrocinadores y clientes">
            <Marquee
              className="gap-[4rem] py-8"
              fade
              innerClassName="gap-[4rem]"
            >
              {sponsors.map(({ logo, alt }, index) => (
                <motion.div
                  key={alt}
                  className="flex items-center group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="relative p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 group-hover:border-blue-200 group-hover:bg-white/80 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-blue-500/5">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500" />

                    <Image
                      src={logo}
                      alt={alt}
                      width={140}
                      height={70}
                      className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    />
                  </div>
                </motion.div>
              ))}
            </Marquee>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
