import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Proyectos Realizados | Consultora de Programación',
  description: 'Conoce nuestros proyectos de desarrollo de software y las soluciones que hemos creado para nuestros clientes.',
}

export default function ProyectosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="text-center">
            {/* Hero de proyectos aquí */}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container-custom">
          {/* Grid de proyectos aquí */}
        </div>
      </section>
    </div>
  )
}