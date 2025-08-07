export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  link?: string
  github?: string
  featured?: boolean
}

export const projectCategories = [
  "Todos",
  "E-commerce", 
  "Analytics",
  "Mobile",
  "Education",
  "Healthcare",
] as const

export type ProjectCategory = typeof projectCategories[number]

// Aquí puedes agregar tus proyectos reales
export const projects: Project[] = [
  // Ejemplo de estructura - reemplaza con tus proyectos reales
  // {
  //   id: "1",
  //   title: "Proyecto Ejemplo",
  //   description: "Descripción del proyecto",
  //   image: "/images/projects/proyecto-1.jpg",
  //   technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  //   category: "E-commerce",
  //   link: "https://ejemplo.com",
  //   github: "https://github.com/usuario/proyecto",
  //   featured: true,
  // },
]