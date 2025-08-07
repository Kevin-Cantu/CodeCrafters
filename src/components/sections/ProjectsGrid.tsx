const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico completa con Next.js, Stripe y gestión de inventario.',
    image: '/images/project-1.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
    category: 'E-commerce',
    link: '#',
  },
  {
    id: 2,
    title: 'Dashboard Analytics',
    description: 'Dashboard interactivo para análisis de datos con visualizaciones en tiempo real.',
    image: '/images/project-2.jpg',
    technologies: ['React', 'D3.js', 'Node.js', 'MongoDB', 'Socket.io'],
    category: 'Analytics',
    link: '#',
  },
  {
    id: 3,
    title: 'Mobile Banking App',
    description: 'Aplicación móvil bancaria con autenticación biométrica y transacciones seguras.',
    image: '/images/project-3.jpg',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Biometrics API'],
    category: 'Mobile',
    link: '#',
  },
  {
    id: 4,
    title: 'Learning Management System',
    description: 'Plataforma educativa con cursos online, evaluaciones y seguimiento de progreso.',
    image: '/images/project-4.jpg',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS S3', 'Stripe'],
    category: 'Education',
    link: '#',
  },
  {
    id: 5,
    title: 'Real Estate Portal',
    description: 'Portal inmobiliario con búsqueda avanzada, mapas interactivos y tours virtuales.',
    image: '/images/project-5.jpg',
    technologies: ['React', 'Google Maps API', 'Three.js', 'Express.js', 'MySQL'],
    category: 'Real Estate',
    link: '#',
  },
  {
    id: 6,
    title: 'Healthcare Management',
    description: 'Sistema de gestión hospitalaria con historiales médicos y citas online.',
    image: '/images/project-6.jpg',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC', 'Docker'],
    category: 'Healthcare',
    link: '#',
  },
]

export function ProjectsGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <div className="text-primary-600 font-medium">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <a
                  href={project.link}
                  className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-500"
                >
                  Ver Proyecto
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}