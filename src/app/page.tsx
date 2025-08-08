import { AnimatedHome } from "@/components/magicui/animated-home";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center">
<AnimatedHome/>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          {/* Contenido de servicios aquí */}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container-custom">
          {/* Contenido sobre nosotros aquí */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="container-custom">
          {/* Call to action aquí */}
        </div>
      </section>
    </div>
  )
}