"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import Image from "next/image";
import { motion } from "framer-motion";

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

export const SponsorsSection = () => {
  return (
    <section
      id="sponsors"
      aria-labelledby="sponsors-title"
      className="relative isolate overflow-hidden py-16 md:py-32 bg-black"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
          <motion.h2
            id="sponsors-title"
            className="text-5xl xs:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOutExpo }}
            viewport={{ once: true }}
          >
            SOCIOS DE <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.6)" }}>
              CONFIANZA.
            </span>
          </motion.h2>

          <motion.p
            className="mt-6 md:mt-8 text-lg md:text-xl text-white/50 font-light px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOutExpo }}
            viewport={{ once: true }}
          >
            Las empresas más innovadoras escalan con nosotros.
          </motion.p>
        </div>

        {/* Carousel */}
        <motion.div
           className="relative"
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ duration: 1, delay: 0.4 }}
           viewport={{ once: true }}
        >
          {/* Gradient masks on sides for black background */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <div role="region" aria-label="Patrocinadores y clientes">
            <Marquee
              className="gap-8 md:gap-16 py-4 md:py-8"
              fade
              innerClassName="gap-8 md:gap-16"
            >
              {sponsors.map(({ logo, alt }, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-500 min-w-[120px] md:min-w-[200px]"
                >
                  <Image
                    src={logo}
                    alt={alt}
                    width={100}
                    height={50}
                    className="object-contain opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] md:w-[140px] md:h-[70px]"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
