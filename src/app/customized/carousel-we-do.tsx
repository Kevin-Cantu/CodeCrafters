"use client";

import React from "react";
import { Carousel, Card } from "@/components/magicui/apple-cards-carousel";
import CarouselTech from "@/components/magicui/carousel-tech";
import { techWeb } from "@/data/carousel-data";

export function WhatWeDoCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    
    <div className="">
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = ({
  heading,
  description,
  carousel,
}: {
  heading: string;
  description?: string;
  carousel?: React.ReactNode;
}) => {
  return (
    <div className="bg-[#F5F5F7]  dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-indigo-100 via-purple-400 to-pink-200 bg-clip-text text-transparent">
        {heading}
      </h2>
      {description && (
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          {description}
        </p>
      )}
      {carousel && <div className="mt-4">{carousel}</div>}
    </div>
  );
};

const data = [
  {
    category: "Desarrollo Web",
    title: "Sitios modernos y responsivos",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556",
    content: (
      <DummyContent
        heading="Nuestro stack tecnológico para Desarrollo Web"
        description="Estas son algunas de las tecnologias que usamos ala hora de desarollar una pagina web"
        carousel={<CarouselTech items ={techWeb} />}
      />
    ),
  },
  {
    category: "Desarrollo Móvil",
    title: "Apps intuitivas para Android",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387",
    content: (
      <DummyContent
        heading="Herramientas para desarrollo móvil"
        description="React Native, Flutter, Swift, Kotlin y más."
        carousel={<div>Aquí iría un carrusel de plataformas móviles</div>}
      />
    ),
  },
  {
    category: "FrontEnd",
    title: "Interfaces atractivas y dinámicas",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515",
    content: (
      <DummyContent
        heading="Tecnologías de FrontEnd modernas"
        description="Animaciones, interactividad y rendimiento óptimo con React y Tailwind."
        carousel={<div>Carrusel de interfaces UI</div>}
      />
    ),
  },
  {
    category: "Backend",
    title: "APIs robustas y seguras",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793",
    content: (
      <DummyContent
        heading="Conectando tu app con el mundo"
        description="Node.js, Express, PostgreSQL, JWT y otras herramientas de servidor."
        carousel={<div>Diagrama de arquitectura backend</div>}
      />
    ),
  },
  {
    category: "iOS Apps",
    title: "Experiencias nativas en Apple",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048",
    content: (
      <DummyContent
        heading="Desarrollo nativo para iOS"
        description="SwiftUI, Xcode y diseño adaptado al ecosistema Apple."
        carousel={<div>Mockups de apps iOS</div>}
      />
    ),
  },
];