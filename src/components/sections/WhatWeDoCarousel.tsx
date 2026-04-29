"use client";

import React from "react";
import { Carousel, Card } from "@/components/magicui/apple-cards-carousel";
import CarouselTech from "@/components/magicui/carousel-tech";
import {
  techWeb,
  techMovil,
  techBack,
  techIA,
  techAgentIA,
} from "@/data/carousel-data";
import { motion } from "framer-motion";
import {
  Sparkles,
  Code2,
  Smartphone,
  Server,
  Brain,
  Bot,
  ArrowRight,
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

// Category icons mapping
const categoryIcons: Record<string, any> = {
  "Desarrollo Web": Code2,
  "Desarrollo Móvil": Smartphone,
  Backend: Server,
  "IA y Agentes de IA": Brain,
};

export function WhatWeDoCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-black" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Header Section */}
      <div className="container-custom relative pt-8 md:pt-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}





          <motion.h2
            className="text-5xl xs:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase leading-none"
            variants={fadeInUp(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            NUESTRA <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)" }}>
              EXPERIENCIA
            </span>
          </motion.h2>

          <motion.p
            className="mt-6 md:mt-8 text-lg md:text-2xl text-white/50 leading-relaxed max-w-2xl mx-auto font-light"
            variants={fadeInUp(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            Dominamos la tecnología de vanguardia para crear infraestructuras inflexibles y experiencias memorables.
          </motion.p>

          {/* Category pills */}
          <motion.div
            className="mt-10 hidden md:flex flex-wrap items-center justify-center gap-3"
            variants={fadeInUp(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {Object.entries(categoryIcons).map(([name, Icon], index) => (
              <motion.div
                key={name}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Icon className="w-5 h-5 text-white" />
                <span className="text-sm font-bold tracking-wider uppercase text-white">
                  {name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Carousel */}
      <motion.div
        className="relative min-h-[50dvh] md:min-h-[70dvh] "
        variants={fadeInUp(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <Carousel items={cards} />
      </motion.div>
    </div>
  );
}

const DummyContent = ({
  heading,
  description,
  carousel,
  features,
}: {
  heading: string;
  description?: string;
  carousel?: React.ReactNode;
  features?: string[];
}) => {
  return (
    <div className="relative overflow-hidden bg-black p-6 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative">
        {/* Header */}
        <div className="mb-8">
          <motion.h2
            className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {heading}
          </motion.h2>

          {description && (
            <motion.p
              className="mt-6 text-white/50 text-lg md:text-xl max-w-2xl leading-relaxed font-light"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {description}
            </motion.p>
          )}
        </div>

        {/* Features List */}
        {features && (
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg md:text-xl font-bold text-white mb-6 flex items-center gap-3 uppercase tracking-widest">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              Características
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 group hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                >
                  <div className="w-2 h-2 rounded-full bg-white group-hover:scale-150 transition-transform duration-300" />
                  <span className="text-base md:text-lg font-light text-white/80 group-hover:text-white transition-colors">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Technology Carousel */}
        {carousel && (
          <motion.div
            className="rounded-3xl bg-black/50 backdrop-blur-xl p-6 md:p-8 border border-white/10 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-center flex items-center justify-center gap-3 text-white uppercase tracking-widest">
              <Code2 className="w-6 h-6 text-white" />
              Stack Tecnológico
            </h3>
            <div className="relative">{carousel}</div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

const data = [
  {
    category: "Desarrollo Web",
    title: "Sitios modernos y responsivos",
    src: "https://imgs.search.brave.com/nIggKIF8rn6p53XeeSKi354MezIshqJMuEqHkMwYz8U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmFra3kubXgvd3At/Y29udGVudC91cGxv/YWRzLzIwMjQvMDMv/cmVzcG9uc2l2ZS13/ZWItZGVzaWduLmpw/Zw",
    content: (
      <DummyContent
        heading="Stack Web Moderno"
        description="Desarrollamos aplicaciones web de alto rendimiento utilizando las tecnologías más avanzadas del mercado."
        features={[
          "Arquitectura escalable y mantenible",
          "Optimización SEO avanzada",
          "Diseño responsive y accesible",
          "Performance de carga optimizada",
          "Integración con APIs modernas",
          "Deployment automatizado",
        ]}
        carousel={<CarouselTech items={techWeb} />}
      />
    ),
  },
  {
    category: "Desarrollo Móvil",
    title: "Apps intuitivas para Android",
    src: "https://img.freepik.com/vector-gratis/fondo-degradado-ui-ux_23-2149065783.jpg?semt=ais_hybrid&w=740&q=80",
    content: (
      <DummyContent
        heading="Desarrollo Móvil Multiplataforma"
        description="Creamos aplicaciones móviles nativas e híbridas con experiencias de usuario excepcionales."
        features={[
          "Apps nativas para iOS y Android",
          "Desarrollo híbrido con React Native",
          "Integración con servicios nativos",
          "Push notifications inteligentes",
          "Offline-first arquitectura",
          "App Store optimization",
        ]}
        carousel={<CarouselTech items={techMovil} />}
      />
    ),
  },
  {
    category: "Backend",
    title: "APIs robustas y seguras",
    src: "https://imgs.search.brave.com/tffjEcdkDAOrQhdtzS9Gi8aeSz_WhjaIIzysjEdBhGM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by93ZWItZGV2ZWxv/cG1lbnQtcHJvZ3Jh/bW1pbmctY29kZS1h/cHAtZGV2ZWxvcG1l/bnQtd2ViLWRlc2ln/bi1jb21wdXRlci1z/ZW8tM2QtYmFja2dy/b3VuZF8xMjUzMjIt/NDUwLmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDAmcT04MA",
    content: (
      <DummyContent
        heading="Arquitectura Backend Escalable"
        description="Servicios backend robustos con APIs RESTful y GraphQL, optimizados para alto rendimiento y seguridad."
        features={[
          "APIs RESTful y GraphQL",
          "Microservicios y arquitectura distribuida",
          "Autenticación y autorización JWT",
          "Base de datos optimizada",
          "Caching inteligente",
          "Monitoreo y logging avanzado",
        ]}
        carousel={<CarouselTech items={techBack} />}
      />
    ),
  },
  {
    category: "IA y Agentes de IA",
    title: "Soluciones de Inteligencia Artificial",
    src: "https://farolbi.com.br/wp-content/uploads/2018/01/146248-o-que-e-inteligencia-artificial-e-como-ela-afeta-o-nosso-trabalho.jpg",
    content: (
      <DummyContent
        heading="Inteligencia Artificial Aplicada"
        description="Desarrollamos soluciones basadas en IA que potencian procesos, automatizan tareas y transforman datos en decisiones inteligentes."
        features={[
          "Modelos de Machine Learning entrenados a medida",
          "Procesamiento de lenguaje natural (NLP)",
          "Visión por computadora",
          "Sistemas de recomendación",
          "Automatización con IA generativa",
          "Integración con herramientas como OpenAI, Google Cloud AI, etc.",
        ]}
        carousel={<CarouselTech items={techIA} />}
      />
    ),
  },
];
