// Tipos generales para el proyecto

export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  link: string
}

export interface ContactFormData {
  name: string
  email: string
  company?: string
  projectType: string
  budget: string
  message: string
}

export interface Service {
  name: string
  description: string
  icon: React.ReactNode
}

export interface NavigationItem {
  name: string
  href: string
}

export interface SocialLink {
  name: string
  href: string
  icon: (props: any) => JSX.Element
}
