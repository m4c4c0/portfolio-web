"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { certifications, educationList, personalInfo } from "@/data/portfolio";
import { PlatziIcon } from "./Icons";
import {
  Award,
  GraduationCap,
  ExternalLink,
  Clock,
  Calendar,
  CheckCircle2,
  Copy,
  Check,
  Building,
  Database,
  Coffee,
  ShieldCheck,
} from "lucide-react";

export default function EducationCertifications() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const getCertIcon = (id: string) => {
    if (id.includes("java")) {
      return <Coffee className="w-6 h-6 text-amber-400" />;
    }
    return <Database className="w-6 h-6 text-emerald-400" />;
  };

  return (
    <section id="certificaciones" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="05 // FORMACIÓN CONTINUA & ACADÉMICA"
          title="Educación y Certificaciones Oficiales"
          subtitle="Formación universitaria en Ingeniería de Computación complementada con certificaciones técnicas aprobadas en Platzi."
        />

        {/* Platzi Certifications Showcase Header */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <PlatziIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <span>Certificaciones Platzi</span>
                  <span className="text-xs font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    3 Aprobadas
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Cursos aprobados y certificados con validación digital en línea
                </p>
              </div>
            </div>

            <a
              href={personalInfo.platziProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-emerald-500/40 hover:bg-slate-800/80 transition-all self-start sm:self-auto"
            >
              <PlatziIcon className="w-4 h-4 text-emerald-400" />
              <span>Ver Perfil Oficial en Platzi</span>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
            </a>
          </div>

          {/* 3 Platzi Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-105 transition-transform">
                      {getCertIcon(cert.id)}
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      Aprobado
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                    {cert.title}
                  </h4>

                  <div className="text-xs font-medium text-slate-400 mb-4 flex items-center gap-1.5">
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <PlatziIcon className="w-3 h-3 inline" />
                      Platzi
                    </span>
                    <span>•</span>
                    <span>{cert.category}</span>
                  </div>

                  {/* Details Badges */}
                  <div className="flex flex-wrap gap-2 text-xs text-slate-300 mb-5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px]">
                      <Calendar className="w-3 h-3 text-sky-400" />
                      {cert.issueDate}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px]">
                      <Clock className="w-3 h-3 text-indigo-400" />
                      {cert.hours} horas teóricas y prácticas
                    </span>
                  </div>

                  {/* Skills Covered */}
                  <div className="space-y-1.5 mb-6">
                    <div className="text-[11px] font-mono uppercase text-slate-400 mb-1">
                      Competencias Validadas:
                    </div>
                    {cert.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1.5 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer with Verification Code */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="text-[10px] font-mono text-slate-400 mb-1">
                    Código de Validación:
                  </div>
                  <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-slate-950/70 border border-slate-800 text-[11px] font-mono text-slate-300">
                    <span className="truncate" title={cert.credentialCode}>
                      {cert.credentialCode.substring(0, 16)}...
                    </span>
                    <button
                      onClick={() => handleCopyCode(cert.credentialCode)}
                      className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors shrink-0"
                      title="Copiar código del certificado"
                    >
                      {copiedCode === cert.credentialCode ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <a
                    href={cert.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 w-full inline-flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-emerald-300 hover:text-emerald-200 transition-colors"
                  >
                    <span>Verificar en Platzi</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formal University Education Section */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Educación Universitaria
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Formación académica superior en Ciencias de la Computación
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 hover:border-indigo-500/30 transition-all flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {edu.status}
                    </span>
                    <span className="text-xs text-slate-400">{edu.location}</span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {edu.degree}
                  </h4>

                  <div className="flex items-center gap-2 text-indigo-400 font-medium text-sm mb-4">
                    <Building className="w-4 h-4" />
                    <span>{edu.institution}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Sólidas bases en algoritmos, estructuras de datos,
                    ingeniería de software, redes de comunicación, bases de datos
                    relacionales y metodologías ágiles de desarrollo.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>San Salvador, El Salvador</span>
                  <span className="text-indigo-400 font-mono">UDB</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
