"use client";

import React, { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectItem } from "@/data/projects";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { X, ExternalLink, Github, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectsGridProps {
  projects: ProjectItem[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [active, setActive] = useState<ProjectItem | null>(null);

  // Lock body scroll when modal is active
  React.useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [active]);

  return (
    <div className="relative">
      {/* Background decoration */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 lg:auto-rows-[220px]">
        {projects.map((project, index) => {
          // Logic for Bento spans
          const isLarge = index === 0; // Solo el primero es grande para que los otros quepan mejor
          const isMedium = index === 1 || index === 2;
          
          return (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onOpen={() => setActive(project)} 
              isSmall={!isLarge}
              className={cn(
                isLarge ? "lg:col-span-4 lg:row-span-2" : "lg:col-span-2 lg:row-span-1",
                index === 1 ? "lg:col-span-2 lg:row-span-2" : "" // Crateck o Pilao mediano
              )}
            />
          );
        })}
      </div>

      <AnimatePresence>
        {active && (
          <ProjectModal key={active.id} project={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function ProjectCard({ project, onOpen, className, isSmall }: { project: ProjectItem; onOpen: () => void; isSmall?: boolean; className?: string }) {
  return (
    <motion.div
      layoutId={`card-${project.id}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/50 bg-white/40 shadow-sm backdrop-blur-md transition-all hover:border-primary-300/50 hover:shadow-2xl hover:shadow-primary-500/10 cursor-pointer",
        className
      )}
      onClick={onOpen}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={project.image} 
          alt={project.title} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50/50 px-3 py-1 backdrop-blur-sm">
            <Sparkles className="h-3 w-3 text-primary-600" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary-700">
              {project.platforms[0]}
            </span>
          </div>
        </div>

        <div className="mt-auto">
          <h3 className={cn(
            "font-bold tracking-tight text-slate-900 group-hover:text-primary-600 transition-colors",
            isSmall ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
          )}>
            {project.title}
          </h3>
          <p className={cn(
            "mt-2 text-slate-600 leading-relaxed",
            isSmall ? "text-xs line-clamp-1" : "text-sm sm:text-base line-clamp-2"
          )}>
            {project.description}
          </p>
          
          <div className="mt-4 flex items-center gap-2 text-[13px] font-bold text-primary-600 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
            Descubrir proyecto
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Shine effect */}
      <div className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(255,255,255,0.4)_0%,transparent_60%)]" />
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: ProjectItem; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  useOutsideClick(panelRef, () => onClose());

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 md:p-10"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-md"
        onClick={onClose}
      />

      <motion.div
        ref={panelRef}
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl md:h-[650px] overflow-y-auto md:overflow-hidden rounded-[2.5rem] bg-white shadow-2xl max-h-[90vh] md:max-h-none"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 h-full">
          {/* Visual Side */}
          <div className="relative lg:col-span-3 h-64 md:h-full overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="h-full w-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-white/10" />
            
            <button
              onClick={onClose}
              className="absolute top-6 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white/40 transition-colors md:hidden"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Info Side */}
          <div className="lg:col-span-2 flex flex-col p-8 sm:p-12 bg-white md:overflow-hidden">
            <div className="hidden md:flex justify-end mb-8">
              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex items-center gap-2 mb-4">
              {project.platforms.map((p, i) => (
                <span key={i} className="text-[10px] font-black uppercase tracking-widest text-primary-600 bg-primary-50 px-2 py-1 rounded">
                  {p}
                </span>
              ))}
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              {project.title}
            </h2>
            
            <div className="h-1 w-20 bg-primary-600 mb-8 rounded-full" />

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="mt-auto pt-6 pb-2">
              {project.actions?.demo && (
                <a
                  href={project.actions.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full rounded-2xl bg-slate-900 py-4 text-sm font-bold text-white shadow-xl hover:bg-primary-600 transition-all hover:scale-[1.02] active:scale-95"
                >
                  <ExternalLink className="h-5 w-5" />
                  Visitar Web
                </a>
              )}
              
              {project.actions?.docs && (
                <a
                  href={project.actions.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 w-full rounded-2xl border border-slate-200 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-all"
                >
                  <ExternalLink className="h-4 w-4" />
                  Ver Documentación
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
