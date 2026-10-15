import {
  ExperienceItem,
  PreviousRole,
  ProjectItem,
  SkillCategory,
  CertificationItem,
  EducationItem,
} from "@/types/portfolio";

export const personalInfo = {
  name: "Raúl Adalberto Mulato Vásquez",
  shortName: "Raúl Mulato",
  title: "Desarrollador Web Full Stack",
  subtitle: "Angular, PHP/Laravel & REST APIs",
  location: "San Salvador, El Salvador",
  country: "El Salvador",
  email: "rauladalberto07@gmail.com",
  phone: "+503 7817 7786",
  whatsappUrl: "https://wa.me/50378177786?text=Hola%20Ra%C3%BAl,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  platziProfile: "https://platzi.com/@rauladalbertomulatovasquez/",
  bio: "Desarrollador Full Stack apasionado por construir soluciones web escalables, arquitecturas modulares seguras y sistemas de alta disponibilidad. Especializado en el ecosistema Angular y PHP/Laravel, con amplia trayectoria en integración de APIs gubernamentales, facturación electrónica y desarrollo de dashboards analíticos empresariales.",
  experienceYears: "+3",
  statusBadge: "Disponible para proyectos & retos profesionales",
};

export const aboutHighlights = [
  {
    title: "Arquitectura Modular & Escalable",
    description:
      "Diseño de estructuras frontend con Angular y backends en Laravel con separación estricta de responsabilidades, componentes reutilizables y patrones limpios.",
  },
  {
    title: "Integraciones Gubernamentales Críticas",
    description:
      "Experiencia comprobada en conexión con endpoints del Ministerio de Hacienda de El Salvador para facturación electrónica (DTE) y cumplimiento normativo.",
  },
  {
    title: "Seguridad y Autenticación Robusta",
    description:
      "Implementación de esquemas de autenticación JWT, control de acceso basado en roles (RBAC) y sanitización estricta de datos para alta seguridad empresarial.",
  },
  {
    title: "Optimización de Datos & Reportería",
    description:
      "Modelado relacional en MySQL, PostgreSQL y SQL Server, optimización de queries con Eloquent ORM y generación masiva de reportes PDF y almacenamiento en AWS S3.",
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: "global-solutions",
    role: "Analista Programador",
    company: "Global Solutions Latinoamérica",
    period: "Octubre 2025 - Actual",
    location: "El Salvador",
    isCurrent: true,
    achievements: [
      "Desarrollo Full Stack de aplicaciones empresariales utilizando Angular y PHP/Laravel con autenticación JWT y arquitectura modular.",
      "Construcción de dashboards interactivos de consulta, conciliación y reportería ejecutiva con exportación automatizada a PDF.",
      "Integración de sistemas de facturación electrónica y conexión directa con APIs gubernamentales para el procesamiento seguro de DTEs.",
      "Diseño de servicios backend para orquestar reglas de negocio críticas, auditoría y despliegues estables en entornos de producción.",
    ],
    technologies: [
      "Angular",
      "PHP",
      "Laravel",
      "JWT",
      "PostgreSQL",
      "APIs RESTful",
      "Facturación Electrónica",
      "Git",
    ],
  },
  {
    id: "smartechnology",
    role: "Desarrollador Web",
    company: "Smartechnology",
    period: "Junio 2025 - Octubre 2025",
    location: "El Salvador",
    isCurrent: false,
    achievements: [
      "Desarrollo de módulos web en Laravel integrando interfaces responsivas con Bootstrap, jQuery y DataTables para manejo de grandes volúmenes de datos.",
      "Configuración, aprovisionamiento y despliegue continuo de servidores en entornos de hosting cPanel y WHM.",
      "Configuración de buckets en Amazon AWS S3 para almacenamiento seguro y optimizado de activos y archivos de usuario desde Laravel.",
      "Implementación de servicios de consumo para endpoints del Ministerio de Hacienda y generación automatizada de reportes mediante DOMPDF.",
    ],
    technologies: [
      "Laravel",
      "PHP",
      "Bootstrap",
      "jQuery",
      "DataTables",
      "AWS S3",
      "cPanel / WHM",
      "DOMPDF",
      "APIs Hacienda",
    ],
  },
];

export const previousRoles: PreviousRole[] = [
  {
    company: "Comercial Mely S.A de C.V",
    role: "Soporte y Sistemas",
    description:
      "Mantenimiento preventivo y correctivo de sistemas internos, soporte técnico a usuarios finales y optimización de flujos operativos.",
  },
  {
    company: "Ministerio de Agricultura y Ganadería (MAG)",
    role: "Soporte Técnico en TI",
    description:
      "Asistencia técnica de infraestructura de redes y estaciones de trabajo, gestión de incidencias y aseguramiento de operatividad en dependencias institucionales.",
  },
  {
    company: "Universidad Don Bosco (UDB)",
    role: "Auxiliar de Laboratorios de Cómputo",
    description:
      "Supervisión y soporte de laboratorios especializados, administración de software educativo y orientación técnica a estudiantes de ingeniería.",
  },
];

export const projects: ProjectItem[] = [
  {
    id: "facturacion-electronica",
    title: "Módulo de Facturación Electrónica y Conciliación",
    category: "Fintech & Enterprise",
    description:
      "Sistema integral para la emisión, firma, transmisión y conciliación de Documentos Tributarios Electrónicos (DTE). Conecta de forma automatizada con los servidores del Ministerio de Hacienda, gestiona contingencias y genera comprobantes PDF oficiales con códigos QR.",
    highlights: [
      "Transmisión y validación síncrona/asíncrona de DTEs gubernamentales",
      "Módulo de conciliación bancaria y contable automatizada",
      "Generación y firmado de representaciones gráficas PDF",
      "Arquitectura desacoplada y trazabilidad completa de eventos",
    ],
    technologies: [
      "Laravel",
      "Angular",
      "PostgreSQL",
      "MySQL",
      "JWT",
      "REST API",
      "DOMPDF",
    ],
    liveUrl: "#",
    githubUrl: "#",
    isFeatured: true,
  },
  {
    id: "romws-platform",
    title: "ROMWS Working Website",
    category: "Portal Web & Reclutamiento",
    description:
      "Plataforma web dinámica orientada a la intermediación laboral y bolsa de empleo. Incluye paneles diferenciados para postulantes y reclutadores, gestión de hojas de vida, filtros avanzados por habilidades y notificaciones.",
    highlights: [
      "Arquitectura MVC limpia desarrollada en PHP nativo modular",
      "Filtrado dinámico de vacantes con AJAX y base de datos relacional",
      "Panel de administración con métricas de postulación y estado de candidatos",
      "Diseño responsivo y adaptado para dispositivos móviles",
    ],
    technologies: ["PHP MVC", "Bootstrap", "MySQL", "JavaScript", "HTML5/CSS3"],
    liveUrl: "#",
    githubUrl: "#",
    isFeatured: true,
  },
  {
    id: "audit-dashboard",
    title: "Dashboard de Auditoría y Reportes PDF",
    category: "Reportería & Cloud Storage",
    description:
      "Panel analítico administrativo diseñado para auditar flujos transaccionales y generar reportes financieros complejos. Integra subida y consulta de evidencias almacenadas en AWS S3 con políticas de acceso controlado.",
    highlights: [
      "Renderizado ultra rápido de reportes tabulares y gráficos de rendimiento",
      "Almacenamiento y recuperación encriptada de comprobantes en AWS S3",
      "Módulo de auditoría con registro detallado de bitácoras por usuario",
      "Exportación masiva a formatos PDF estructurados y hojas de cálculo",
    ],
    technologies: [
      "Laravel",
      "AWS S3",
      "DOMPDF",
      "DataTables",
      "Eloquent ORM",
      "Bootstrap",
    ],
    liveUrl: "#",
    githubUrl: "#",
    isFeatured: true,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    iconName: "Layout",
    skills: [
      { name: "Angular", level: "Avanzado" },
      { name: "TypeScript", level: "Avanzado" },
      { name: "JavaScript (ES6+)", level: "Avanzado" },
      { name: "Vue.js", level: "Intermedio" },
      { name: "HTML5", level: "Avanzado" },
      { name: "CSS3", level: "Avanzado" },
      { name: "Tailwind CSS", level: "Intermedio / Avanzado" },
      { name: "Bootstrap", level: "Avanzado" },
    ],
  },
  {
    category: "Backend",
    iconName: "Server",
    skills: [
      { name: "PHP", level: "Avanzado" },
      { name: "Laravel", level: "Avanzado" },
      { name: "APIs RESTful", level: "Avanzado" },
      { name: "JWT (Json Web Tokens)", level: "Avanzado" },
      { name: "C#", level: "Intermedio" },
      { name: "Java", level: "Certificado Platzi" },
      { name: "Arquitectura Modular", level: "Avanzado" },
      { name: "Microservicios & Integraciones", level: "Intermedio" },
    ],
  },
  {
    category: "Bases de Datos",
    iconName: "Database",
    skills: [
      { name: "MySQL", level: "Certificado Platzi" },
      { name: "SQL Server", level: "Intermedio / Avanzado" },
      { name: "PostgreSQL", level: "Intermedio / Avanzado" },
      { name: "Fundamentos de Bases de Datos", level: "Certificado Platzi" },
      { name: "Eloquent ORM", level: "Avanzado" },
      { name: "Optimización de Queries", level: "Avanzado" },
    ],
  },
  {
    category: "Cloud, DevOps & Herramientas",
    iconName: "Cloud",
    skills: [
      { name: "Git", level: "Avanzado" },
      { name: "GitHub", level: "Avanzado" },
      { name: "AWS (S3)", level: "Intermedio" },
      { name: "cPanel / WHM", level: "Avanzado" },
      { name: "Postman", level: "Avanzado" },
      { name: "Windows Server", level: "Intermedio" },
      { name: "DOMPDF / Reportes", level: "Avanzado" },
      { name: "Linux CLI", level: "Intermedio" },
    ],
  },
];

export const certifications: CertificationItem[] = [
  {
    id: "platzi-fundamentos-db-sql",
    title: "Curso de Fundamentos de Bases de Datos y SQL",
    issuer: "Platzi",
    issueDate: "9 de Septiembre de 2026",
    hours: 12,
    credentialCode: "d94f6a26-df5d-4336-b0e3-6fff4ee2711d",
    profileUrl: "https://platzi.com/@rauladalbertomulatovasquez/",
    credentialUrl: "https://platzi.com/@rauladalbertomulatovasquez/",
    category: "Bases de Datos",
    skills: [
      "Modelo Relacional",
      "Normalización",
      "DDL & DML",
      "Consultas SQL",
      "Integridad de Datos",
    ],
  },
  {
    id: "platzi-sql-mysql",
    title: "Curso de SQL y MySQL",
    issuer: "Platzi",
    issueDate: "30 de Septiembre de 2026",
    hours: 14,
    credentialCode: "b158d1d1-21bf-45cd-af52-f05b37739b94",
    profileUrl: "https://platzi.com/@rauladalbertomulatovasquez/",
    credentialUrl: "https://platzi.com/@rauladalbertomulatovasquez/",
    category: "Bases de Datos & Backend",
    skills: [
      "MySQL Avanzado",
      "Joins & Subconsultas",
      "Índices & Rendimiento",
      "Transacciones ACID",
      "Stored Procedures",
    ],
  },
  {
    id: "platzi-java",
    title: "Curso de Java",
    issuer: "Platzi",
    issueDate: "14 de Octubre de 2026",
    hours: 14,
    credentialCode: "6b41de15-5477-48b5-bd5e-79c03368afee",
    profileUrl: "https://platzi.com/@rauladalbertomulatovasquez/",
    credentialUrl: "https://platzi.com/@rauladalbertomulatovasquez/",
    category: "Programación & Backend",
    skills: [
      "Java SE",
      "Programación Orientada a Objetos",
      "Manejo de Colecciones",
      "Control de Excepciones",
      "Estructuras de Datos",
    ],
  },
];

export const educationList: EducationItem[] = [
  {
    degree: "Ingeniería en Ciencias de la Computación",
    institution: "Universidad Don Bosco (UDB)",
    location: "El Salvador",
    status: "En curso / Grado Profesional",
  },
  {
    degree: "Técnico en Ingeniería en Computación",
    institution: "Universidad Don Bosco (UDB)",
    location: "El Salvador",
    status: "Graduado / Titulado",
  },
];
