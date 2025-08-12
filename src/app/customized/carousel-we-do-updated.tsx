"use client";

import React from "react";
import { Carousel, Card } from "@/components/magicui/apple-cards-carousel";
import CarouselTech from "@/components/magicui/carousel-tech";
import { techWeb, techMovil, techFront, techBack, techIOS } from "@/data/carousel-data";
import { motion } from "motion/react";

const easeOutCubic = [0.16, 1, 0.3, 1] as const;

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: easeOutCubic } },
});

export function WhatWeDoCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100  relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      {/* Header Section */}
      <div className="container-custom relative">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-6 shadow-sm"
            variants={fadeInUp(0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
            Nuestros Servicios
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6"
            variants={fadeInUp(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            Tecnologías que{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              dominamos
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 leading-relaxed"
            variants={fadeInUp(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            Explorá nuestras especialidades y las tecnologías de vanguardia que utilizamos 
            para crear soluciones digitales excepcionales.
          </motion.p>
        </div>
      </div>

      {/* Carousel */}
      <motion.div
        className="relative pl-3"
        variants={fadeInUp(0.15)}
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
    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-800 p-8 md:p-14 rounded-3xl mb-4 border border-gray-100 dark:border-neutral-700 shadow-xl backdrop-blur-sm">
      <div className="mb-8">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-primary-500 bg-clip-text text-transparent">
            {heading}
          </span>
        </h2>
        
        {description && (
          <p className="text-neutral-600 dark:text-neutral-400 text-lg md:text-xl font-medium max-w-3xl leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Features List */}
      {features && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Características principales:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-gray-700 dark:text-gray-300 group">
                <div className="w-5 h-5 mr-3 flex-shrink-0 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technology Carousel */}
      {carousel && (
        <div className=" rounded-2xl p-6  ">
          <h3 className="text-lg font-semibold mb-4 text-center">
            Stack Tecnológico
          </h3>
          <div className="relative">
            {carousel}
          </div>
        </div>
      )}
    </div>
  );
};

const data = [
  {
    category: "Desarrollo Web",
    title: "Sitios modernos y responsivos",
    // Web: landing oscura local (siempre visible)
    src: "/assets/web-landing-dark.svg",
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
          "Deployment automatizado"
        ]}
        carousel={<CarouselTech items={techWeb} />}
      />
    ),
  },
  {
    category: "Desarrollo Móvil",
    title: "Apps intuitivas para Android ",
    // Móvil: teléfono con bokeh en negro (URL válida)
    src: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=3387&auto=format&fit=crop",
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
          "App Store optimization"
        ]}
        carousel={<CarouselTech items={techMovil} />}
      />
    ),
  },
  {
    category: "Frontend",
    title: "Interfaces atractivas y dinámicas",
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2515&auto=format&fit=crop",
    content: (
      <DummyContent
        heading="Frontend de Nueva Generación"
        description="Interfaces de usuario modernas con animaciones fluidas y experiencias interactivas excepcionales."
        features={[
          "Componentes reutilizables y modulares",
          "Animaciones y micro-interacciones",
          "Estado global optimizado",
          "Testing automatizado",
          "Accesibilidad web (WCAG)",
          "Progressive Web Apps (PWA)"
        ]}
        carousel={<CarouselTech items={techFront} />}
      />
    ),
  },
  {
    category: "Backend",
    title: "APIs robustas y seguras",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2793&auto=format&fit=crop",
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
          "Monitoreo y logging avanzado"
        ]}
        carousel={<CarouselTech items={techBack} />}
      />
    ),
  },
  {
    category: "iOS Apps",
    title: "Experiencias nativas en Apple",
    src: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=2048&auto=format&fit=crop",
    content: (
      <DummyContent
        heading="Desarrollo Nativo iOS"
        description="Aplicaciones iOS nativas que aprovechan al máximo el ecosistema Apple con SwiftUI y las últimas tecnologías."
        features={[
          "SwiftUI y UIKit moderno",
          "Integración con servicios Apple",
          "Core Data y CloudKit",
          "App Clips y Widgets",
          "Apple Pay y In-App Purchases",
          "TestFlight y App Store Connect"
        ]}
        carousel={<CarouselTech items={techIOS} />}
      />
    ),
  },
];
