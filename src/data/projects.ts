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

// Real Projects data
export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Smart Glass - Privacidad Inteligente",
    description:
      "Landing page de alta gama para sistemas de vidrio inteligente. Enfocada en la exclusividad y el control de privacidad automatizado para espacios arquitectónicos modernos con un diseño minimalista y cinematográfico.",
    platforms: ["Web", "IoT"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/assets/smart.png",
    actions: {
      demo: "https://smart-glass.mx",
    },
  },
  {
    id: 2,
    title: "Soy Pilao - Gastronomía Venezolana",
    description:
      "Experiencia digital inmersiva para una marca de comida venezolana artesanal. El proyecto destaca la tradición y calidad de los ingredientes mediante una interfaz visualmente rica y un menú interactivo elegante.",
    platforms: ["Web"],
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Next.js"],
    image: "/assets/pilao.png",
    actions: {
      demo: "https://pilao.netlify.app",
    },
  },
  {
    id: 3,
    title: "Grupo Crateck - Ingeniería y Maquinaria",
    description:
      "Plataforma corporativa robusta para servicios de ingeniería y renta de maquinaria pesada. Implementa un catálogo de soluciones con flujo de conversión directo hacia asesoría personalizada vía WhatsApp.",
    platforms: ["Web", "B2B"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "WhatsApp API"],
    image: "/assets/cratek.png",
    actions: {
      demo: "https://vghdfrhdhdfhd.netlify.app",
    },
  },
  {
    id: 4,
    title: "Chocolate Drop - Brigadeiros Gourmet",
    description:
      "Landing page y e-commerce de brigadeiros gourmet en Monterrey. Permite personalizar cajas de dulces y ofrece servicios de catering con un diseño moderno y artesanal.",
    platforms: ["Web", "E-commerce"],
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    image: "/assets/chocolatedrop.png",
    actions: {
      demo: "https://chocolatedrop.store",
    },
  },
];
