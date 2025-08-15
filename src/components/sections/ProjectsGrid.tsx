"use client";

import React, { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectItem, getTechItems } from "@/data/projects";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { X, ExternalLink, Github, MonitorSmartphone, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectsGridProps {
  projects: ProjectItem[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [active, setActive] = useState<ProjectItem | null>(null);
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={() => setActive(project)} />
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <ProjectModal key={active.id} project={active} onClose={() => setActive(null)} />)
        }
      </AnimatePresence>
    </div>
  );
}

function ProjectCard({ project, onOpen }: { project: ProjectItem; onOpen: () => void }) {
  return (
    <motion.button
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.995 }}
      onClick={onOpen}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 shadow-sm backdrop-blur-sm transition-colors hover:border-slate-300 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
    >
      {/* Decorative gradient ring */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Cover */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />

        {/* Platforms badge */}
        <div className="absolute left-3 top-3 z-10 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/50 px-2.5 py-1 text-[11px] font-medium text-white/90 backdrop-blur">
          <MonitorSmartphone className="h-3.5 w-3.5" />
          {project.platforms.slice(0, 2).join(" • ")}
        </div>
      </div>

      {/* Content */}
      <div className="relative p-5">
        <h3 className="text-base/6 sm:text-lg font-semibold text-slate-900">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-slate-600">
          {project.description}
        </p>

        {/* Tech chips */}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {getTechItems(project.technologies).slice(0, 4).map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50/80 px-2.5 py-1 text-[11px] font-medium text-slate-700"
            >
              {t.icon && (
                <span className="inline-flex h-4 w-4 items-center justify-center [&_svg]:h-4 [&_svg]:w-4">
                  {t.icon}
                </span>
              )}
              {t.name}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="rounded-full border border-slate-200 bg-slate-50/80 px-2.5 py-1 text-[11px] text-slate-600">+{project.technologies.length - 4}</span>
          )}
        </div>

        {/* CTA Row */}
        <div className="mt-4 flex items-center justify-between">
          <div className="h-px w-24 bg-gradient-to-r from-slate-200 via-slate-300 to-transparent" />
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700">
            Ver detalles
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>

      {/* Shine on hover */}
      <div className="pointer-events-none absolute -inset-x-16 -inset-y-8 translate-x-[-60%] rotate-[25deg] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.button>
  );
}

function ProjectModal({ project, onClose }: { project: ProjectItem; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  useOutsideClick(panelRef, () => onClose());

  const techItems = useMemo(() => getTechItems(project.technologies), [project]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[60]"
        role="dialog"
        aria-modal="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/65 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        <div className="absolute inset-0 overflow-y-auto">
          <motion.div
            ref={panelRef}
            className="relative mx-auto max-w-[98rem] bg-white shadow-2xl"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* Fullscreen layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[100svh]">
              {/* Left content */}
              <div className="relative flex flex-col">
                {/* Sticky top bar */}
                <div className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur">
                  <div className="flex items-center justify-between px-5 py-4 sm:px-8">
                    <div className="text-sm font-medium text-slate-500">Proyecto</div>
                    <button
                      onClick={onClose}
                      className="inline-flex items-center justify-center rounded-full bg-slate-900/90 p-2 text-white shadow hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                      <X className="h-5 w-5" />
                      <span className="sr-only">Cerrar</span>
                    </button>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-10 sm:py-10">
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                    <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-primary-500 bg-clip-text text-transparent">
                      {project.title}
                    </span>
                  </h2>
                  <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {project.platforms.map((p, idx) => (
                      <span key={idx} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                        {p}
                      </span>
                    ))}
                  </div>

                  {(project.actions?.demo || project.actions?.github || project.actions?.docs) && (
                    <div className="mt-7 flex flex-wrap gap-3">
                      {project.actions?.demo && (
                        <a
                          href={project.actions.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-primary-700"
                        >
                          <ExternalLink className="h-4 w-4" /> Demo
                        </a>
                      )}
                      {project.actions?.github && (
                        <a
                          href={project.actions.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                        >
                          <Github className="h-4 w-4" /> Código
                        </a>
                      )}
                      {project.actions?.docs && (
                        <a
                          href={project.actions.docs}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                        >
                          <ExternalLink className="h-4 w-4" /> Docs
                        </a>
                      )}
                    </div>
                  )}

                  {/* Divider */}
                  <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                  <h3 className="text-lg font-semibold text-slate-900">Tecnologías utilizadas</h3>
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {techItems.map((t, idx) => (
                      <div key={idx} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                        {t.icon && (
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-slate-50 [&_svg]:h-5 [&_svg]:w-5">
                            {t.icon}
                          </span>
                        )}
                        <span className="text-sm text-slate-700">{t.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right image side */}
              <div className="relative hidden md:block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-l from-white/0 via-transparent to-white/5" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
