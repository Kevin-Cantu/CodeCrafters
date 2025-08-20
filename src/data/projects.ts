import { ReactNode } from "react";
import { techWeb, techMovil, techBack, } from "./carousel-data";

// Helper to create a map from technology name to icon ReactNode using existing tech data
const allTechArrays = [techWeb, techMovil, techBack, ];
const techIconMap = new Map<string, ReactNode>();
allTechArrays.forEach((arr) => {
  arr.forEach((t) => techIconMap.set(t.name.toLowerCase(), t.icon));
});

export type ProjectPlatform = "Web" | "Mobile" | "Desktop" | "API" | "iOS" | "Android" | "IoT" | string;

export interface ProjectActionLinks {
  demo?: string;
  github?: string;
  docs?: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  platforms: ProjectPlatform[];
  technologies: string[]; // keys that map to existing technology names
  image: string; // main/cover image URL or path
  thumbnail?: string; // optional smaller image
  actions?: ProjectActionLinks;
}

export const getTechItems = (techNames: string[]) => {
  return techNames.map((name) => ({
    name,
    icon: techIconMap.get(name.toLowerCase()) ?? null,
  }));
};

// Dummy content: replace with real projects easily following the same pattern
export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Plataforma E‑commerce Headless",
    description:
      "E‑commerce moderno con arquitectura headless, checkout optimizado y CMS para gestión de catálogo.",
    platforms: ["Web"],
    technologies: ["Next.js", "TypeScript", "Tailwind", "Node.js", "PostgreSQL"],
    image:
      "/assets/web-landing-dark.svg",
    actions: {
      demo: "https://demo.tu-ecommerce.com",
      github: "https://github.com/tu-org/tu-ecommerce",
    },
  },
  {
    id: 2,
    title: "App Móvil de Reservas",
    description:
      "Aplicación móvil para reservas con notificaciones push, modo offline y pagos integrados.",
    platforms: ["Mobile", "Android"],
    technologies: ["Android", "Kotlin", "Jetpack Compose", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1600&auto=format&fit=crop",
    actions: {
      demo: "https://play.google.com/",
    },
  },
  {
    id: 3,
    title: "Dashboard de Analítica",
    description:
      "Panel interactivo para métricas en tiempo real con gráficos avanzados y autenticación SSO.",
    platforms: ["Web", "Desktop"],
    technologies: ["React", "TypeScript", "Tailwind", "Node.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1551281044-8b89a09c3d59?q=80&w=1600&auto=format&fit=crop",
    actions: {
      github: "https://github.com/tu-org/analytics-dashboard",
    },
  },
  {
    id: 4,
    title: "API de Contenidos",
    description:
      "Microservicio GraphQL para contenidos con caching y rate limiting.",
    platforms: ["API"],
    technologies: ["Node.js", "GraphQL", "PostgreSQL", "Redis", "Docker"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    actions: {
      docs: "https://docs.api.com",
      github: "https://github.com/tu-org/content-api",
    },
  },
  {
    id: 5,
    title: "App iOS de Productividad",
    description:
      "Aplicación nativa iOS con sincronización en iCloud y widgets.",
    platforms: ["iOS", "Mobile"],
    technologies: ["Swift", "Xcode", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Landing Multi‑idioma SaaS",
    description:
      "Landing page performante con SEO técnico, i18n y formularios integrados.",
    platforms: ["Web"],
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    actions: {
      demo: "https://saas-demo.dev",
    },
  },
];
