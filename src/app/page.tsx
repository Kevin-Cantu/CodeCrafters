import { AnimatedHome } from "@/components/magicui/animated-home";
import { AnimatedHomeProfessional } from "@/components/magicui/animated-home-professional";
import { WhatWeDoCarousel } from "./customized/carousel-we-do";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-6">
          <div className="text-center ">
            <AnimatedHomeProfessional />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 bg-gray-50">
        <WhatWeDoCarousel/>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container-custom">
          {/* Contenido sobre nosotros aquí */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="container-custom">{/* Call to action aquí */}</div>
      </section>
    </div>
  );
}
