"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/portfolio";
import { ProjectItem } from "@/types/portfolio";
import { GithubIcon } from "./Icons";
import {
  ExternalLink,
  CheckCircle2,
  Code2,
  Receipt,
  BriefcaseBusiness,
  FileBarChart2,
  Sparkles,
  Info,
  X,
  Layers,
} from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  const getProjectIcon = (id: string) => {
    switch (id) {
      case "facturacion-electronica":
        return <Receipt className="w-6 h-6 text-indigo-400" />;
      case "romws-platform":
        return <BriefcaseBusiness className="w-6 h-6 text-sky-400" />;
      case "audit-dashboard":
        return <FileBarChart2 className="w-6 h-6 text-emerald-400" />;
      default:
        return <Code2 className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="proyectos" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="03 // PORTAFOLIO DE PROYECTOS"
          title="Proyectos Destacados"
          subtitle="Sistemas empresariales e institucionales desarrollados con arquitecturas modulares, estándares de seguridad y alta disponibilidad."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl hover:shadow-indigo-500/10"
            >
              {/* Card Header & Visual Indicator */}
              <div className="p-6 sm:p-7 flex-1">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 group-hover:border-indigo-500/30 transition-all">
                    {getProjectIcon(project.id)}
                  </div>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {project.highlights.slice(0, 2).map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                      +{project.technologies.length - 4} más
                    </span>
                  )}
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="px-6 py-4 bg-slate-900/50 border-t border-slate-800 flex items-center justify-between text-xs">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 font-semibold transition-colors focus:outline-none"
                >
                  <Info className="w-4 h-4" />
                  <span>Ver Detalles & Arquitectura</span>
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="Repositorio de referencia"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-400 hover:bg-slate-800 transition-colors"
                    title="Vista previa del sistema"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="glass-panel w-full max-w-2xl rounded-2xl border border-slate-700/80 p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {selectedProject.category}
                </span>
                <span className="text-xs text-emerald-400 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Sistema Validado
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 pr-10">
                {selectedProject.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Highlights Detailed */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider font-mono mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-400" />
                  Puntos Clave y Características
                </h4>
                <div className="space-y-2.5">
                  {selectedProject.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80"
                    >
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* All Technologies */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Tecnologías Utilizadas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-lg bg-slate-800/90 border border-slate-700 text-slate-200 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 border-t border-slate-800">
                <span className="text-xs text-slate-400">
                  Código y módulos bajo confidencialidad institucional
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
                >
                  Entendido / Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
