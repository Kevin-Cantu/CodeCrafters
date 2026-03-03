"use client";

import {
  Brain,
  Bot,
  Cloud,
  Palette,
  Workflow,
  BarChart3,
  Link as LinkIcon,
  ShieldCheck,
  ShoppingCart,
  LifeBuoy,
  Layers,
  Database,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const stats = [
  {
    id: 1,
    name: "Proyectos Completados",
    value: "50+",
    suffix: "+",
    icon: Zap,
  },
  {
    id: 2,
    name: "Clientes Satisfechos",
    value: "30+",
    suffix: "+",
    icon: Brain,
  },
  {
    id: 3,
    name: "Años de Experiencia",
    value: "8+",
    suffix: "+",
    icon: Workflow,
  },
  {
    id: 4,
    name: "Tecnologías Dominadas",
    value: "20+",
    suffix: "+",
    icon: Database,
  },
];

const services = [
  {
    title: "Integración de IA",
    description:
      "Modelos generativos, IA conversacional, RAG/embeddings, visión por computadora y predicción para casos reales.",
    Icon: Brain,
    gradient: "from-purple-500 to-pink-500",
    hoverGradient: "group-hover:from-purple-600 group-hover:to-pink-600",
  },
  {
    title: "Agentes de IA ",
    description:
      "Agentes autónomos/orquestados con herramientas (tools), workflows, seguridad y monitoreo end-to-end.",
    Icon: Bot,
    gradient: "from-blue-500 to-cyan-500",
    hoverGradient: "group-hover:from-blue-600 group-hover:to-cyan-600",
  },
  {
    title: "Servicios en la Nube",
    description:
      "Arquitecturas serverless, contenedores, CI/CD, observabilidad, optimización de costos y escalabilidad.",
    Icon: Cloud,
    gradient: "from-cyan-500 to-teal-500",
    hoverGradient: "group-hover:from-cyan-600 group-hover:to-teal-600",
  },
  {
    title: "Diseño UI/UX",
    description:
      "Research, wireframes, prototipado, design systems, accesibilidad (WCAG) y handoff impecable a desarrollo.",
    Icon: Palette,
    gradient: "from-pink-500 to-rose-500",
    hoverGradient: "group-hover:from-pink-600 group-hover:to-rose-600",
  },
  {
    title: "Data & Analytics",
    description:
      "ETL, data warehousing, BI, dashboards accionables y calidad de datos para decisiones con impacto.",
    Icon: BarChart3,
    gradient: "from-emerald-500 to-green-500",
    hoverGradient: "group-hover:from-emerald-600 group-hover:to-green-600",
  },
  {
    title: "Integraciones y APIs",
    description:
      "Diseño e implementación de APIs REST/GraphQL, webhooks, SDKs, documentación y seguridad.",
    Icon: LinkIcon,
    gradient: "from-orange-500 to-amber-500",
    hoverGradient: "group-hover:from-orange-600 group-hover:to-amber-600",
  },
  {
    title: "Seguridad TI",
    description:
      "Autenticación/autorización, OWASP, cifrado, auditoría y hardening de infraestructura.",
    Icon: ShieldCheck,
    gradient: "from-red-500 to-orange-500",
    hoverGradient: "group-hover:from-red-600 group-hover:to-orange-600",
  },
  {
    title: "E‑commerce, Pagos y Puntos de venta",
    description:
      "Carritos, checkouts, suscripciones, antifraude y pasarelas como Stripe, PayPal y Mercado Pago.",
    Icon: ShoppingCart,
    gradient: "from-violet-500 to-purple-500",
    hoverGradient: "group-hover:from-violet-600 group-hover:to-purple-600",
  },
  {
    title: "Mantenimiento y Soporte",
    description:
      "SRE/DevOps, SLAs, mejoras continuas, monitoreo y performance para mantener tu sistema saludable.",
    Icon: LifeBuoy,
    gradient: "from-teal-500 to-cyan-500",
    hoverGradient: "group-hover:from-teal-600 group-hover:to-cyan-600",
  },
  {
    title: "Gestión de Relaciones con el Cliente (CRM)",
    description:
      "Implementación de plataformas CRM para centralizar clientes, ventas, marketing y soporte, mejorando la experiencia del usuario.",
    Icon: Workflow,
    gradient: "from-indigo-500 to-blue-500",
    hoverGradient: "group-hover:from-indigo-600 group-hover:to-blue-600",
  },
  {
    title: "Planificación de Recursos Empresariales (ERP)",
    description:
      "Soluciones ERP para integrar finanzas, operaciones, logística, inventario y recursos humanos en un único ecosistema.",
    Icon: Layers,
    gradient: "from-slate-500 to-gray-600",
    hoverGradient: "group-hover:from-slate-600 group-hover:to-gray-700",
  },
  {
    title: "Migraciones y Actualizaciones de Datos",
    description:
      "Estrategias seguras para migrar, limpiar y actualizar datos entre sistemas, garantizando integridad, continuidad y mínima interrupción.",
    Icon: Database,
    gradient: "from-yellow-500 to-orange-500",
    hoverGradient: "group-hover:from-yellow-600 group-hover:to-orange-600",
  },
] as const;

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: easeOutExpo },
  },
});

// Animated counter component
const AnimatedCounter = ({
  value,
  suffix,
}: {
  value: string;
  suffix?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  const numericValue = parseInt(value.replace(/\D/g, "")) || 0;

  useState(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.floor(numericValue * easeOut));

        if (currentStep >= steps) {
          clearInterval(interval);
          setDisplayValue(numericValue);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  });

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

export function AboutSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-100/50 to-orange-100/50 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container-custom relative">
        {/* Bloque: ¿Por qué elegirnos? */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 mb-6"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">
                ¿Por qué nosotros?
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOutExpo }}
              viewport={{ once: true, amount: 0.2 }}
            >
              ¿Por qué elegirnos?
            </motion.h2>

            <motion.p
              className="mt-6 text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Somos un equipo de desarrolladores apasionados por crear
              soluciones tecnológicas que marquen la diferencia. Nos
              especializamos en frameworks modernos y metodologías ágiles para
              entregar proyectos de alta calidad.
            </motion.p>

            <motion.p
              className="mt-4 text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: easeOutExpo }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Nuestro enfoque se centra en entender las necesidades específicas
              de cada cliente y traducirlas en soluciones técnicas eficientes y
              escalables.
            </motion.p>

          </div>

          <div>
            <motion.dl
              className="grid grid-cols-2 gap-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.1 },
                },
              }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  className="relative group"
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.95 },
                    show: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={{ duration: 0.5, ease: easeOutExpo }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="relative p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/50 group-hover:to-purple-50/50 transition-all duration-500" />

                    <div className="relative">
                      <motion.div
                        className="inline-flex p-2 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 mb-3"
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <stat.icon className="w-5 h-5 text-blue-600" />
                      </motion.div>

                      <dt className="text-sm font-medium text-gray-500">
                        {stat.name}
                      </dt>
                      <dd className="mt-1 text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {stat.value}
                      </dd>
                    </div>

                    {/* Corner decoration */}
                    <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              ))}
            </motion.dl>
          </div>
        </div>

        {/* Bloque: Servicios profesionales */}
        <div className="mt-32">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 mb-6"
            >
              <Zap className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">
                Nuestros servicios
              </span>
            </motion.div>

            <motion.h3
              className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOutExpo }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Soluciones profesionales
            </motion.h3>

            <motion.p
              className="mt-4 text-lg text-gray-600"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
              viewport={{ once: true, amount: 0.2 }}
            >
              De la estrategia al delivery: tecnología, diseño y negocio
              trabajando juntos para impulsar tu crecimiento.
            </motion.p>
          </div>

          <motion.div
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: { opacity: 1 },
              show: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {services.map(
              ({ title, description, Icon, gradient, hoverGradient }, idx) => (
                <motion.div
                  key={title}
                  className="group relative"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: easeOutExpo }}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-2xl transition-all duration-500">
                    {/* Top gradient line */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50/0 to-gray-50/0 group-hover:from-gray-50/50 group-hover:to-white/50 transition-all duration-500" />

                    <div className="relative flex items-start gap-4">
                      <motion.div
                        className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="h-7 w-7 text-white" />
                      </motion.div>

                      <div className="flex-1">
                        <h4 className={`text-lg font-semibold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r ${hoverGradient} group-hover:bg-clip-text transition-all duration-300`}>
                          {title}
                        </h4>
                        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                          {description}
                        </p>
                      </div>
                    </div>

                    {/* Arrow indicator */}



                    {/* Corner decoration */}
                    <div
                      className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    />
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
