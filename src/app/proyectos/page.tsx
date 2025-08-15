import { Metadata } from 'next'
import { ProjectsHero } from '@/components/sections/ProjectsHero'
import { ProjectsGrid } from '@/components/sections/ProjectsGrid'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Proyectos Realizados | Consultora de Programación',
  description: 'Conoce nuestros proyectos de desarrollo de software y las soluciones que hemos creado para nuestros clientes.',
}

export default function ProyectosPage() {
  return (
    <div className="min-h-screen">
      <ProjectsHero />

      <section className="py-12 sm:py-16">
        <div className="container-custom">
          <ProjectsGrid projects={projects} />
        </div>
      </section>
    </div>
  )
}
