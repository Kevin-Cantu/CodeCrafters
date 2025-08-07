// Constantes de la aplicación

export const SITE_CONFIG = {
  name: 'DevConsultora',
  description: 'Consultora especializada en desarrollo de software y frameworks modernos',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ogImage: '/images/og-image.jpg',
  links: {
    github: 'https://github.com/devconsultora',
    linkedin: 'https://linkedin.com/company/devconsultora',
    email: 'contacto@devconsultora.com',
    phone: '+1 (555) 123-4567',
  },
}

export const NAVIGATION_ITEMS = [
  { name: 'Inicio', href: '/' },
  { name: 'Proyectos', href: '/proyectos' },
  { name: 'Contacto', href: '/contacto' },
]

export const SERVICES = [
  {
    name: 'Desarrollo Web',
    description: 'Aplicaciones web modernas con React, Next.js y las últimas tecnologías.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'Aplicaciones Móviles',
    description: 'Apps nativas e híbridas para iOS y Android con React Native.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Firebase'],
  },
  {
    name: 'APIs y Backend',
    description: 'Servicios backend robustos y APIs RESTful escalables.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
  },
  {
    name: 'Consultoría Técnica',
    description: 'Asesoramiento en arquitectura de software y mejores prácticas.',
    technologies: ['Architecture', 'DevOps', 'Code Review', 'Mentoring'],
  },
]

export const PROJECT_CATEGORIES = [
  'Todos',
  'E-commerce',
  'Analytics',
  'Mobile',
  'Education',
  'Real Estate',
  'Healthcare',
]