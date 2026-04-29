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
import { useRef, useState, useEffect } from "react";

const stats = [
  { id: 1, name: "PROYECTOS", value: "50+", suffix: "+", icon: Zap },
  { id: 2, name: "CLIENTES", value: "30+", suffix: "+", icon: Brain },
  { id: 3, name: "AÑOS EXP", value: "8+", suffix: "+", icon: Workflow },
  { id: 4, name: "TECNOLOGÍAS", value: "20+", suffix: "+", icon: Database },
];

const services = [
  {
    title: "AI INTEGRATION",
    description: "LLMs, RAG, y modelos generativos para transformar procesos empresariales y automatizar toma de decisiones.",
    Icon: Brain,
  },
  {
    title: "AI AGENTS",
    description: "Desarrollo de agentes autónomos con tools, memoria y RAG orquestados para flujos de trabajo complejos.",
    Icon: Bot,
  },
  {
    title: "CLOUD SERVICES",
    description: "Arquitecturas serverless y multi-cloud optimizadas para escalabilidad infinita y zero-downtime.",
    Icon: Cloud,
  },
  {
    title: "UI/UX DESIGN",
    description: "Diseño premium orientado a conversión y experiencias de usuario memorables, nivel Awwwards.",
    Icon: Palette,
  },
  {
    title: "DATA ARCHITECTURE",
    description: "Lagos de datos, ETL y analítica en tiempo real para insights accionables de negocio.",
    Icon: BarChart3,
  },
  {
    title: "API ECOSYSTEMS",
    description: "Construcción y diseño de APIs robustas escalables en GraphQL, REST y tRPC.",
    Icon: LinkIcon,
  },
  {
    title: "CYBERSECURITY",
    description: "Auditoría de seguridad, pentesting, y hardening de infraestructura cloud crítica.",
    Icon: ShieldCheck,
  },
  {
    title: "E-COMMERCE",
    description: "Plataformas headless, experiencias de checkout optimizadas y pasarelas de pago globales.",
    Icon: ShoppingCart,
  },
  {
    title: "SITE RELIABILITY",
    description: "SRE, monitoreo proactivo y respuesta a incidentes 24/7 para garantizar alta disponibilidad.",
    Icon: LifeBuoy,
  },
  {
    title: "ENTERPRISE CRM",
    description: "Desarrollo e integración de CRMs y software interno para automatización corporativa.",
    Icon: Workflow,
  },
  {
    title: "ERP SOLUTIONS",
    description: "Sistemas centralizados para integración de logística, operaciones y finanzas.",
    Icon: Layers,
  },
  {
    title: "DATA MIGRATION",
    description: "Migraciones de misión crítica entre proveedores cloud sin pérdida de datos ni tiempo de inactividad.",
    Icon: Database,
  },
] as const;

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export function AboutSection() {
  return (
    <section className="relative py-16 md:py-32 bg-black overflow-hidden">
      {/* Structural Minimal Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* Massive About Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-end mb-16 md:mb-32">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/20 mb-6 md:mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-white/80 font-bold">
                Quiénes Somos
              </span>
            </motion.div>

            <motion.h2
              className="text-5xl xs:text-6xl md:text-7xl font-black tracking-tighter text-white uppercase leading-[0.9]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOutExpo }}
              viewport={{ once: true }}
            >
              CÓDIGO <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px rgba(168,85,247,0.8)" }}>
                QUE INSPIRA.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOutExpo }}
            viewport={{ once: true }}
            className="text-lg md:text-2xl text-white/50 font-light leading-relaxed"
          >
            Somos arquitectos digitales obsesionados con el detalle. Combinamos diseño de élite y tecnología de vanguardia para crear productos que dominan el mercado.
          </motion.div>
        </div>

        {/* Stats Grid - Massive Bordered Layout */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-white/10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              className={`py-10 md:py-16 px-6 ${i !== stats.length - 1 ? 'border-r border-white/10' : ''} group flex flex-col justify-between`}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            >
              <div className="flex items-center justify-between opacity-50 group-hover:opacity-100 transition-opacity mb-8">
                <stat.icon className="w-6 h-6 text-white" />
                <ArrowRight className="w-5 h-5 text-white -rotate-45" />
              </div>
              <div>
                <div className="text-4xl md:text-7xl font-bold text-white tracking-tighter mb-2">{stat.value}</div>
                <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/50">{stat.name}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services / Solutions Sections */}
        <div className="mt-20 md:mt-40">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-5xl xs:text-6xl md:text-7xl font-black tracking-tighter text-white uppercase">
              CAPACIDADES <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px rgba(168,85,247,0.8)" }}>
                TECH.
              </span>
            </h3>
            <p className="text-xl text-white/50 max-w-sm font-light">
              Desde la conceptualización hasta la escalabilidad cloud.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.05 } },
            }}
          >
            {services.map(({ title, description, Icon }) => (
              <motion.div
                key={title}
                className="group relative border-b border-purple-500/20 pb-8"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <div className="flex justify-between items-center mb-6">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-white group-hover:text-black transition-colors duration-500">
                    <Icon className="w-5 h-5 text-inherit transition-colors" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-white/30 group-hover:text-white transition-colors duration-500">Service</div>
                </div>

                <h4 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide group-hover:ml-4 transition-all duration-500">
                  {title}
                </h4>
                <p className="text-base text-white/50 font-light leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                  {description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
