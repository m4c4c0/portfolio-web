import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#060913",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Raúl Adalberto Mulato Vásquez | Desarrollador Web Full Stack",
  description:
    "Portafolio profesional de Raúl Mulato, Desarrollador Web Full Stack con experiencia en Angular, PHP/Laravel, REST APIs, Facturación Electrónica e integraciones gubernamentales en El Salvador.",
  keywords: [
    "Raúl Mulato",
    "Raúl Adalberto Mulato Vásquez",
    "Desarrollador Web Full Stack",
    "Angular",
    "Laravel",
    "PHP",
    "REST APIs",
    "Facturación Electrónica",
    "El Salvador",
    "Frontend",
    "Backend",
    "MySQL",
    "PostgreSQL",
  ],
  authors: [{ name: "Raúl Adalberto Mulato Vásquez" }],
  creator: "Raúl Mulato",
  openGraph: {
    type: "website",
    locale: "es_SV",
    url: "https://raulmulato.dev",
    title: "Raúl Mulato | Desarrollador Web Full Stack (Angular & Laravel)",
    description:
      "Desarrollador Web Full Stack enfocado en arquitecturas modulares, sistemas empresariales, facturación electrónica y servicios backend de alto rendimiento.",
    siteName: "Portafolio de Raúl Mulato",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raúl Mulato | Full Stack Developer",
    description:
      "Especialista en Angular, Laravel, REST APIs y Facturación Electrónica.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#060913] text-slate-100 selection:bg-indigo-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
