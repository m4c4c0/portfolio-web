import SectionHeading from "./SectionHeading";
import { aboutHighlights, personalInfo } from "@/data/portfolio";
import {
  ShieldCheck,
  Cpu,
  Layers,
  FileSpreadsheet,
  Check,
  UserCheck,
  Code2,
} from "lucide-react";

export default function About() {
  const iconList = [Layers, Cpu, ShieldCheck, FileSpreadsheet];

  return (
    <section id="sobre-mi" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="01 // PERFIL PROFESIONAL"
          title="Ingeniería y Desarrollo de Alto Impacto"
          subtitle="Enfocado en resolver problemas complejos de negocio mediante código limpio, arquitectura desacoplada y sistemas institucionales seguros."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Biography Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-3 mb-4 text-indigo-400">
                <Code2 className="w-5 h-5" />
                <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                  Filosofía de Trabajo & Metodología
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Construyendo soluciones de misión crítica para el sector empresarial y gubernamental
              </h3>

              <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                <p>
                  Soy un Desarrollador Web Full Stack radicado en{" "}
                  <span className="text-white font-medium">El Salvador</span>,
                  con experiencia consolidada en el ecosistema de{" "}
                  <strong className="text-sky-400 font-semibold">Angular</strong>{" "}
                  y{" "}
                  <strong className="text-indigo-400 font-semibold">
                    PHP/Laravel
                  </strong>
                  . A lo largo de mi trayectoria he liderado y participado en el
                  desarrollo de módulos institucionales para empresas clave,
                  priorizando siempre la robustez, el orden y la escalabilidad.
                </p>
                <p>
                  Mi trabajo abarca desde la conceptualización de arquitecturas
                  modulares y el consumo/diseño de{" "}
                  <span className="text-white font-medium">APIs RESTful</span> con
                  autenticación JWT, hasta la integración directa con
                  plataformas gubernamentales como el{" "}
                  <span className="text-emerald-400 font-medium">
                    Ministerio de Hacienda
                  </span>{" "}
                  para emisión y conciliación de Documentos Tributarios
                  Electrónicos (DTE).
                </p>
                <p>
                  Complemento mi perfil técnico con sólidos conocimientos en bases
                  de datos relacionales (MySQL, SQL Server, PostgreSQL),
                  despliegues en servidores cPanel/WHM y almacenamiento de
                  archivos a escala en Amazon Web Services (AWS S3).
                </p>
              </div>

              {/* Bullet highlights */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded-full bg-indigo-500/20 text-indigo-400">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>Arquitectura modular y desacoplada</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded-full bg-indigo-500/20 text-indigo-400">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>Integración de Facturación Electrónica (DTE)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded-full bg-indigo-500/20 text-indigo-400">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>Dashboards analíticos y reportería PDF</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded-full bg-indigo-500/20 text-indigo-400">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>Despliegues en producción y AWS S3</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Specialization Cards Column */}
          <div className="lg:col-span-5 space-y-4">
            {aboutHighlights.map((item, index) => {
              const Icon = iconList[index % iconList.length];
              return (
                <div
                  key={index}
                  className="glass-panel glass-panel-hover p-5 rounded-xl border border-slate-800/90 flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-lg bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Quick Credentials Info Box */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-950/40 via-slate-900 to-sky-950/30 border border-indigo-500/20 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <UserCheck className="w-4 h-4 text-emerald-400" />
                <span>Formación: Universidad Don Bosco & Platzi</span>
              </div>
              <a
                href="#certificaciones"
                className="text-indigo-400 hover:text-indigo-300 font-medium underline underline-offset-2"
              >
                Ver certificados &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
