import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white py-20 lg:py-32">
      <div className="container-custom">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Desarrollamos el{' '}
            <span className="text-primary-600">futuro digital</span>{' '}
            de tu negocio
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            Somos una consultora especializada en desarrollo de software con frameworks modernos. 
            Creamos soluciones tecnológicas innovadoras que impulsan el crecimiento de tu empresa.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/contacto" className="btn-primary text-lg px-8 py-3">
              Comenzar Proyecto
            </Link>
            <Link href="/proyectos" className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600">
              Ver Proyectos <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}