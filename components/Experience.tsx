import SectionHeading from "./SectionHeading";
import { experiences, previousRoles } from "@/data/portfolio";
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  Building2,
  ChevronRight,
  History,
} from "lucide-react";

export default function Experience() {
  return (
    <section id="experiencia" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="02 // TRAYECTORIA LABORAL"
          title="Experiencia Profesional"
          subtitle="Historial cronológico de roles como Analista Programador y Desarrollador Full Stack en empresas de tecnología y soluciones corporativas."
        />

        {/* Main Experience Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 md:ml-32 pl-6 sm:pl-10 space-y-12 mb-16">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Node Icon */}
              <div
                className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  exp.isCurrent
                    ? "bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-500/40"
                    : "bg-slate-900 border-slate-700 text-slate-400 group-hover:border-indigo-500"
                }`}
              >
                <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>

              {/* Experience Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/30 transition-all duration-300 shadow-xl">
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          Puesto Actual
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-indigo-400 font-medium text-sm sm:text-base">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400 text-xs sm:text-sm">
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Period Tag */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs font-mono text-slate-300 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Achievements List */}
                <div className="space-y-2.5 my-5">
                  {exp.achievements.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs text-slate-400 font-mono mr-1">
                    Stack:
                  </span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Roles & Foundations */}
        <div className="mt-16 pt-10 border-t border-slate-800/80">
          <div className="flex items-center gap-2 mb-6">
            <History className="w-5 h-5 text-indigo-400" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Trayectoria y Roles Previos
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {previousRoles.map((role, idx) => (
              <div
                key={idx}
                className="glass-panel p-5 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-1">
                    {role.role}
                  </div>
                  <h4 className="text-base font-semibold text-white mb-2">
                    {role.company}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {role.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-1 text-[11px] text-slate-400">
                  <ChevronRight className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Soporte, Redes y Administración</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
