import Link from 'next/link'

export function CTASection() {
  return (
    <section className="bg-primary-600">
      <div className="container-custom py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ¿Listo para comenzar tu proyecto?
          </h2>
          <p className="mt-6 text-lg leading-8 text-primary-100">
            Conversemos sobre tu idea y cómo podemos ayudarte a hacerla realidad
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contacto"
              className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Contactar Ahora
            </Link>
            <Link
              href="/proyectos"
              className="text-sm font-semibold leading-6 text-white hover:text-primary-100"
            >
              Ver Nuestro Trabajo <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}