import { AnimatedHomeProfessional } from "@/components/magicui/animated-home-professional";
import { WhatWeDoCarousel } from "./customized/carousel-we-do-updated";
import { AboutSection } from "@/components/sections/AboutSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-6">
        <div className="text-center ">
          <AnimatedHomeProfessional />
        </div>
      </section>

      {/* Services Section (Carrusel existente) */}
      <section className="py-0 bg-gray-50">
        <WhatWeDoCarousel />
      </section>

      {/* About + Servicios profesionales (nueva sección dentro de AboutSection) */}
      <AboutSection />

      {/* CTA Section animada */}
      <CTASection />
    </div>
  );
}
