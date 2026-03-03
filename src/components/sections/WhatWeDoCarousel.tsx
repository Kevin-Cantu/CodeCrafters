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
const categoryIcons: Record<string, React.ElementType> = {
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
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white" />

        {/* Decorative orbs */}
        <motion.div
          className="absolute top-20 left-1/4 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-72 h-72 bg-purple-100/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Header Section */}
      <div className="container-custom relative pt-12">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}





          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900"
            variants={fadeInUp(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            Tecnologías que{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                dominamos
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: easeOutExpo }}
              />
            </span>
          </motion.h2>

          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
            variants={fadeInUp(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            Explorá nuestras especialidades y las tecnologías de vanguardia que
            utilizamos para crear soluciones digitales excepcionales.
          </motion.p>

          {/* Category pills */}
          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
            variants={fadeInUp(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {Object.entries(categoryIcons).map(([name, Icon], index) => (
              <motion.div
                key={name}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Icon className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">
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
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50/50 to-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-xl">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-pink-100/30 to-orange-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative">
        {/* Header */}
        <div className="mb-6">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {heading}
            </span>
          </motion.h2>

          {description && (
            <motion.p
              className="mt-4 text-gray-600 text-base md:text-lg max-w-3xl leading-relaxed"
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
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              Características principales
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/50 border border-gray-100 group hover:border-blue-200 hover:bg-white/80 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
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
            className="rounded-2xl bg-gradient-to-br from-gray-50 to-white p-6 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-center flex items-center justify-center gap-2">
              <Code2 className="w-5 h-5 text-blue-600" />
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
