"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { personalInfo } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, PlatziIcon } from "./Icons";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
} from "lucide-react";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Consulta de Proyecto / Oportunidad Laboral",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate fast dispatch and open email client fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
      )}`;

      window.location.href = mailtoUrl;

      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          subject: "Consulta de Proyecto / Oportunidad Laboral",
          message: "",
        });
      }, 5000);
    }, 800);
  };

  return (
    <section id="contacto" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="06 // HABLEMOS"
          title="Iniciemos una Conversación"
          subtitle="¿Tienes un proyecto en mente, requieres asesoría en facturación electrónica o buscas sumar un desarrollador full stack a tu equipo?"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Cards Column */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card with Copy */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/30 transition-all shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 text-xs text-slate-300 hover:text-white transition-colors border border-slate-700"
                  title="Copiar correo al portapapeles"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                Correo Electrónico
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-base sm:text-lg font-bold text-white hover:text-indigo-400 transition-colors break-all"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-all shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-300 text-xs border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors"
                >
                  <span>Chat Directo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                Teléfono & WhatsApp
              </div>
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-bold text-white hover:text-emerald-400 transition-colors"
              >
                {personalInfo.phone}
              </a>
            </div>

            {/* Location & Availability Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Ubicación & Modalidad
                  </div>
                  <div className="text-sm font-bold text-white">
                    {personalInfo.location}
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Disponible para trabajo remoto global o presencial/híbrido en El
                Salvador.
              </p>
            </div>

            {/* Social Links Banner */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-300">
                Redes Profesionales:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  aria-label="GitHub de Raúl Mulato"
                  title="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  aria-label="LinkedIn de Raúl Mulato"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.platziProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30 transition-colors"
                  title="Perfil Platzi"
                >
                  <PlatziIcon className="w-3.5 h-3.5" />
                  <span>Platzi</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2 mb-6 text-indigo-400">
                <MessageSquare className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white">
                  Envíame un Mensaje Directo
                </h3>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-center animate-in fade-in">
                  <Check className="w-10 h-10 mx-auto mb-3 text-emerald-400" />
                  <h4 className="text-lg font-bold text-white mb-1">
                    ¡Gracias por contactarme!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mb-2">
                    He preparado tu correo para despacharlo directamente a{" "}
                    <strong>{personalInfo.email}</strong>.
                  </p>
                  <p className="text-xs text-slate-400">
                    Te responderé a la brevedad posible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                        Tu Nombre *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Juan Pérez"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/60 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                        Tu Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ejemplo@empresa.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/60 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Asunto / Interés *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/60 transition-all"
                    >
                      <option value="Consulta de Proyecto / Oportunidad Laboral">
                        Consulta de Proyecto / Oportunidad Laboral
                      </option>
                      <option value="Facturación Electrónica y Conexión Hacienda (DTE)">
                        Facturación Electrónica y Conexión Hacienda (DTE)
                      </option>
                      <option value="Desarrollo Full Stack con Angular & Laravel">
                        Desarrollo Full Stack con Angular & Laravel
                      </option>
                      <option value="Consultoría Técnica / Arquitectura">
                        Consultoría Técnica / Arquitectura
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Detalles del Mensaje *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Cuéntame sobre tu proyecto, objetivos, requerimientos o vacante..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/60 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-lg shadow-indigo-500/25 transition-all duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Procesando mensaje...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
