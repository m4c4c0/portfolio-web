"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "@/data/portfolio";
import {
  Layout,
  Server,
  Database,
  Cloud,
  CheckCircle,
  Search,
  Sparkles,
} from "lucide-react";

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState("");

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <Layout className="w-5 h-5 text-sky-400" />;
      case "Backend":
        return <Server className="w-5 h-5 text-indigo-400" />;
      case "Bases de Datos":
        return <Database className="w-5 h-5 text-emerald-400" />;
      case "Cloud, DevOps & Herramientas":
        return <Cloud className="w-5 h-5 text-violet-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="habilidades" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="04 // STACK TECNOLÓGICO"
          title="Habilidades Técnicas"
          subtitle="Conjunto de herramientas, lenguajes y plataformas dominadas a nivel profesional para el desarrollo end-to-end de software moderno."
        />

        {/* Quick Filter Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar tecnología (ej. Angular, Laravel, SQL, AWS)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900/80 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Limpiar
              </button>
            )}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat) => {
            const filteredSkills = cat.skills.filter((s) =>
              s.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (searchTerm && filteredSkills.length === 0) {
              return null;
            }

            return (
              <div
                key={cat.category}
                className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-slate-700/80 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800/80">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                        {getCategoryIcon(cat.category)}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {cat.category}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {filteredSkills.length} tecnologías
                    </span>
                  </div>

                  {/* Skills Badges Grid */}
                  <div className="flex flex-wrap gap-2.5">
                    {filteredSkills.map((skill) => {
                      const isCert =
                        skill.level?.toLowerCase().includes("platzi") ||
                        skill.level?.toLowerCase().includes("certificado");

                      return (
                        <div
                          key={skill.name}
                          className={`group flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium border transition-all ${
                            isCert
                              ? "bg-indigo-950/40 border-indigo-500/40 text-indigo-200 hover:bg-indigo-900/50"
                              : "bg-slate-900/90 border-slate-800/90 text-slate-200 hover:border-slate-700 hover:text-white"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isCert ? "bg-indigo-400" : "bg-sky-400"
                            }`}
                          />
                          <span>{skill.name}</span>
                          {skill.level && (
                            <span
                              className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                                isCert
                                  ? "bg-indigo-500/20 text-indigo-300 font-semibold"
                                  : "bg-slate-800 text-slate-400"
                              }`}
                            >
                              {skill.level}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer status */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Aplicado activamente en proyectos de producción</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
