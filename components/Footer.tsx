"use client";

import { ArrowUp } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, PlatziIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-[#04060d] py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          {/* Brand & Summary */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#hero"
              className="text-lg font-bold text-white tracking-tight flex items-center gap-2 mb-1"
            >
              <span className="flex items-center justify-center w-7 h-7 rounded bg-indigo-600 text-white font-mono text-xs">
                RM
              </span>
              <span>{personalInfo.name}</span>
            </a>
            <p className="text-xs text-slate-400 max-w-sm">
              Desarrollador Web Full Stack • Especialista en Angular, Laravel y
              Facturación Electrónica (El Salvador).
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-300">
            <a href="#hero" className="hover:text-indigo-400 transition-colors">
              Inicio
            </a>
            <a
              href="#sobre-mi"
              className="hover:text-indigo-400 transition-colors"
            >
              Sobre Mí
            </a>
            <a
              href="#experiencia"
              className="hover:text-indigo-400 transition-colors"
            >
              Experiencia
            </a>
            <a
              href="#proyectos"
              className="hover:text-indigo-400 transition-colors"
            >
              Proyectos
            </a>
            <a
              href="#habilidades"
              className="hover:text-indigo-400 transition-colors"
            >
              Habilidades
            </a>
            <a
              href="#certificaciones"
              className="hover:text-indigo-400 transition-colors"
            >
              Certificaciones
            </a>
            <a
              href="#contacto"
              className="hover:text-indigo-400 transition-colors"
            >
              Contacto
            </a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
              aria-label="GitHub de Raúl Mulato"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
              aria-label="LinkedIn de Raúl Mulato"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.platziProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 hover:text-emerald-300 hover:border-emerald-500/40 transition-all"
              aria-label="Platzi de Raúl Mulato"
              title="Perfil de Platzi"
            >
              <PlatziIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-600 hover:text-white transition-all"
              aria-label="Volver arriba"
              title="Volver al inicio"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 {personalInfo.name}. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Construido con Next.js 16 (App Router), TypeScript y Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
