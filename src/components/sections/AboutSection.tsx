import { Brain, Bot, Cloud, Palette, Workflow, BarChart3, Link as LinkIcon, ShieldCheck, ShoppingCart, LifeBuoy } from "lucide-react"

const stats = [
  { id: 1, name: 'Proyectos Completados', value: '50+' },
  { id: 2, name: 'Clientes Satisfechos', value: '30+' },
  { id: 3, name: 'Años de Experiencia', value: '5+' },
  { id: 4, name: 'Tecnologías Dominadas', value: '20+' },
]

const services = [
  {
    title: 'Integración de IA',
    description:
      'Modelos generativos, IA conversacional, RAG/embeddings, visión por computadora y predicción para casos reales.',
    Icon: Brain,
  },
  {
    title: 'Agentes de IA',
    description:
      'Agentes autónomos/orquestados con herramientas (tools), workflows, seguridad y monitoreo end-to-end.',
    Icon: Bot,
  },
  {
    title: 'Servicios en la Nube',
    description:
      'Arquitecturas serverless, contenedores, CI/CD, observabilidad, optimización de costos y escalabilidad.',
    Icon: Cloud,
  },
  {
    title: 'Diseño UI/UX',
    description:
      'Research, wireframes, prototipado, design systems, accesibilidad (WCAG) y handoff impecable a desarrollo.',
    Icon: Palette,
  },
  {
    title: 'Automatización y RPA',
    description:
      'Bots, integraciones con APIs, Zapier/Make y flujos de negocio para eliminar tareas repetitivas.',
    Icon: Workflow,
  },
  {
    title: 'Data & Analytics',
    description:
      'ETL, data warehousing, BI, dashboards accionables y calidad de datos para decisiones con impacto.',
    Icon: BarChart3,
  },
  {
    title: 'Integraciones y APIs',
    description:
      'Diseño e implementación de APIs REST/GraphQL, webhooks, SDKs, documentación y seguridad.',
    Icon: LinkIcon,
  },
  {
    title: 'Seguridad y Cumplimiento',
    description:
      'Autenticación/autorización, OWASP, cifrado, auditoría y hardening de infraestructura.',
    Icon: ShieldCheck,
  },
  {
    title: 'E‑commerce y Pagos',
    description:
      'Carritos, checkouts, suscripciones, antifraude y pasarelas como Stripe, PayPal y Mercado Pago.',
    Icon: ShoppingCart,
  },
  {
    title: 'Mantenimiento y Soporte',
    description:
      'SRE/DevOps, SLAs, mejoras continuas, monitoreo y performance para mantener tu sistema saludable.',
    Icon: LifeBuoy,
  },
] as const

export function AboutSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        {/* Bloque: ¿Por qué elegirnos? */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              ¿Por qué elegirnos?
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Somos un equipo de desarrolladores apasionados por crear soluciones tecnológicas que marquen la diferencia.
              Nos especializamos en frameworks modernos y metodologías ágiles para entregar proyectos de alta calidad.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Nuestro enfoque se centra en entender las necesidades específicas de cada cliente y traducirlas en soluciones técnicas eficientes y escalables.
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

        {/* Bloque: Servicios profesionales */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Soluciones profesionales
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              De la estrategia al delivery: tecnología, diseño y negocio trabajando juntos para impulsar tu crecimiento.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ title, description, Icon }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-600 ring-1 ring-primary-100">
                    <Icon className="h-6 w-9" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">
                      {title}
                    </h4>
                    <p className="mt-2 text-sm text-gray-600">{description}</p>
                  </div>
                </div>
                <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-primary-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
