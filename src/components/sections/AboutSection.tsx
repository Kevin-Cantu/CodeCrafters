const stats = [
  { id: 1, name: 'Proyectos Completados', value: '50+' },
  { id: 2, name: 'Clientes Satisfechos', value: '30+' },
  { id: 3, name: 'Años de Experiencia', value: '5+' },
  { id: 4, name: 'Tecnologías Dominadas', value: '20+' },
]

export function AboutSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              ¿Por qué elegirnos?
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Somos un equipo de desarrolladores apasionados por crear soluciones tecnológicas 
              que marquen la diferencia. Nos especializamos en frameworks modernos y metodologías 
              ágiles para entregar proyectos de alta calidad.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Nuestro enfoque se centra en entender las necesidades específicas de cada cliente 
              y traducirlas en soluciones técnicas eficientes y escalables.
            </p>
          </div>
          <div>
            <dl className="grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div key={stat.id} className="text-center">
                  <dt className="text-sm font-medium text-gray-600">{stat.name}</dt>
                  <dd className="mt-2 text-3xl font-bold text-primary-600">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}