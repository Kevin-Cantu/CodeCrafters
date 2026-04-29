import { AnimatedHomeProfessional } from "@/components/magicui/animated-home-professional";
import { WhatWeDoCarousel } from "@/components/sections/WhatWeDoCarousel";
import { AboutSection } from "@/components/sections/AboutSection";
import { CTASection } from "@/components/sections/CTASection";
import { SponsorsSection } from "./customized/sponsors";

export default function HomePage() {
  return (
    <div className="min-h-screen overscroll-none">
      {/* Hero Section */}
      <section className="">
        <div className="text-center">
          <AnimatedHomeProfessional />
        </div>
      </section>

      {/* Services Section (Carrusel existente) */}
      <section className="">
        <WhatWeDoCarousel />
      </section>

      {/* About + Servicios profesionales (nueva sección dentro de AboutSection) */}
      <AboutSection />
      <SponsorsSection />

      {/* CTA Section animada */}
      <CTASection />
    </div>
  );
}
