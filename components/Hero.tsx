import {
  MapPin,
  ArrowRight,
  Mail,
  FileCode2,
  CheckCircle2,
  Terminal,
  ExternalLink,
  Layers,
  Database,
  Cpu,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Subtle Ambient Glows */}
      <div className="glow-ambient w-96 h-96 -top-20 -left-20 bg-indigo-600/25" />
      <div className="glow-ambient w-96 h-96 top-1/3 -right-24 bg-sky-500/20" />
      <div className="glow-ambient w-80 h-80 -bottom-20 left-1/3 bg-violet-600/20" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Info Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-medium text-emerald-300 shadow-sm shadow-emerald-500/10 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.statusBadge}</span>
            </div>

            {/* Location Tag */}
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>{personalInfo.location}</span>
              <span className="text-slate-600">|</span>
              <span className="text-indigo-400 font-semibold">Full Stack Engineer</span>
            </div>

            {/* Name Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Hola, soy{" "}
              <span className="gradient-accent block sm:inline">
                {personalInfo.name}
              </span>
            </h1>

            {/* Subtitle / Role */}
            <div className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-200 mb-6 flex flex-wrap items-center gap-2">
              <span className="text-indigo-400">{personalInfo.title}</span>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="text-slate-300 text-base sm:text-lg">
                {personalInfo.subtitle}
              </span>
            </div>

            {/* Bio Introduction */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              Especializado en el desarrollo de arquitecturas modulares de alta
              disponibilidad, sistemas de facturación electrónica con el Ministerio
              de Hacienda, y dashboards corporativos con{" "}
              <strong className="text-white font-semibold">Angular</strong>,{" "}
              <strong className="text-white font-semibold">PHP/Laravel</strong> y{" "}
              <strong className="text-white font-semibold">APIs RESTful</strong>.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#proyectos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 hover:from-indigo-500 hover:to-sky-400 shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-95"
              >
                <span>Ver Proyectos</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all duration-200 hover:text-white"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Contactar</span>
              </a>

              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 transition-all duration-200"
              >
                <span>WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 border-t border-slate-800/80 w-full max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                  +3 Años
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Desarrollo Web & APIs
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-mono">
                  100%
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Integración DTE / Hacienda
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-mono">
                  3x
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Certificaciones Platzi
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Code & Architecture Preview Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl glass-panel p-5 sm:p-6 shadow-2xl shadow-indigo-950/50 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300">
              {/* Header bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    dte-service.module.ts
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Angular + Laravel
                </span>
              </div>

              {/* Code Snippet */}
              <div className="font-mono text-xs leading-relaxed text-slate-300 space-y-2 overflow-x-auto pb-2">
                <div className="text-slate-500">
                  // Integración Facturación Electrónica DTE
                </div>
                <div>
                  <span className="text-purple-400">@Injectable</span>()
                </div>
                <div>
                  <span className="text-blue-400">export class</span>{" "}
                  <span className="text-yellow-300">DteDispatcherService</span>{" "}
                  &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">private</span>{" "}
                  <span className="text-sky-300">apiUrl</span> ={" "}
                  <span className="text-emerald-300">
                    &apos;/api/v1/hacienda/transmit&apos;
                  </span>
                  ;
                </div>
                <div className="pl-4 text-slate-400">
                  async <span className="text-yellow-300">transmitirDte</span>(
                  payload: <span className="text-indigo-300">DteDocument</span>)
                  &#123;
                </div>
                <div className="pl-8 text-slate-300">
                  <span className="text-purple-400">const</span> signedDte ={" "}
                  <span className="text-blue-400">await</span> this.
                  <span className="text-yellow-300">signJwt</span>(payload);
                </div>
                <div className="pl-8 text-slate-300">
                  <span className="text-purple-400">return</span> this.http.
                  <span className="text-yellow-300">post</span>(this.apiUrl,
                  signedDte);
                </div>
                <div className="pl-4">&#125;</div>
                <div>&#125;</div>
              </div>

              {/* Architecture Stack Badges Inside Terminal Card */}
              <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/70 border border-slate-700 text-[11px] text-slate-300">
                  <Layers className="w-3 h-3 text-red-400" />
                  <span>Angular 18+</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/70 border border-slate-700 text-[11px] text-slate-300">
                  <Cpu className="w-3 h-3 text-red-500" />
                  <span>Laravel 11</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/70 border border-slate-700 text-[11px] text-slate-300">
                  <Database className="w-3 h-3 text-sky-400" />
                  <span>PostgreSQL / MySQL</span>
                </div>
              </div>

              {/* Live Status indicator */}
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Servicio Hacienda: En Línea</span>
                </div>
                <span className="text-indigo-400">200 OK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
