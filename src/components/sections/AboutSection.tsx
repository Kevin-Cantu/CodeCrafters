"use client";

import { Brain, Bot, Cloud, Palette, Workflow, BarChart3, Link as LinkIcon, ShieldCheck, ShoppingCart, LifeBuoy, Layers, Database } from "lucide-react"
import { motion } from "framer-motion"

const stats = [
  { id: 1, name: 'Proyectos Completados', value: '50+' },
  { id: 2, name: 'Clientes Satisfechos', value: '30+' },
  { id: 3, name: 'Años de Experiencia', value: '8+' },
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
    title: 'Seguridad TI',
    description:
      'Autenticación/autorización, OWASP, cifrado, auditoría y hardening de infraestructura.',
    Icon: ShieldCheck,
  },
  {
    title: 'E‑commerce, Pagos y Puntos de venta',
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
  {
    title: 'Gestión de Relaciones con el Cliente (CRM)',
    description:
      'Implementación de plataformas CRM para centralizar clientes, ventas, marketing y soporte, mejorando la experiencia del usuario.',
    Icon: Workflow,
  },
  {
    title: 'Planificación de Recursos Empresariales (ERP)',
    description:
      'Soluciones ERP para integrar finanzas, operaciones, logística, inventario y recursos humanos en un único ecosistema.',
    Icon: Layers,
  },
  {
    title: 'Migraciones y Actualizaciones de Datos',
    description:
      'Estrategias seguras para migrar, limpiar y actualizar datos entre sistemas, garantizando integridad, continuidad y mínima interrupción.',
    Icon: Database,
  },
] as const

export function AboutSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        {/* Bloque: ¿Por qué elegirnos? */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
            >
              ¿Por qué elegirnos?
            </motion.h2>
            <motion.p
              className="mt-6 text-lg text-gray-600"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Somos un equipo de desarrolladores apasionados por crear soluciones tecnológicas que marquen la diferencia.
              Nos especializamos en frameworks modernos y metodologías ágiles para entregar proyectos de alta calidad.
            </motion.p>
            <motion.p
              className="mt-4 text-lg text-gray-600"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Nuestro enfoque se centra en entender las necesidades específicas de cada cliente y traducirlas en soluciones técnicas eficientes y escalables.
            </motion.p>
          </div>
          <div>
            <motion.dl
              className="grid grid-cols-2 gap-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.12, delayChildren: 0.1 },
                },
              }}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.id}
                  className="text-center"
                  variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <dt className="text-sm font-medium text-gray-600">{stat.name}</dt>
                  <dd className="mt-2 text-3xl font-bold text-primary-600">{stat.value}</dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>
        </div>

        {/* Bloque: Servicios profesionales */}
        <div className="mt-36">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h3
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Soluciones profesionales
            </motion.h3>
            <motion.p
              className="mt-4 text-lg text-gray-600"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
            >
              De la estrategia al delivery: tecnología, diseño y negocio trabajando juntos para impulsar tu crecimiento.
            </motion.p>
          </div>

          <motion.div
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: { opacity: 1 },
              show: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {services.map(({ title, description, Icon }, idx) => (
              <motion.div
                key={title}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.03 }}
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
                <motion.div
                  className="pointer-events-none absolute -bottom-6 -right-6 h-16 w-16 rounded-full bg-primary-50 translate-x-3/4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
