import { Profile, Project, TechGroup, SocialLink } from "@/app/types/portfolio";

export const profile: Profile = {
  name: "Santiago Valverde Álvarez",
  role: "Desarrollador Full Stack & Ingeniero en Computación",
  location: "Cartago, Costa Rica",
  summary:
    "Construyo aplicaciones web y móviles escalables con enfoque en accesibilidad, performance y experiencia de usuario. Experiencia en desarrollo full-stack, ETL y arquitectura de bases de datos.",
  availability: "Disponible para prácticas a tiempo parcial.",
  email: "s.valverde04@gmail.com",
  cvUrl: "https://drive.google.com/file/d/13d18HViCOy-AwfCbNqo-Bf8WBewxcWcd/view?usp=sharing",
  socialLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/",
    },
    {
      label: "GitHub",
      href: "https://github.com/santivalverde4",
    },
  ] satisfies SocialLink[],
};

export const techGroups: TechGroup[] = [
  {
    area: "Frontend",
    items: ["React.js", "Next.js", "React Native", "TypeScript", "Tailwind CSS", "Vite", "Responsive Design"],
  },
  {
    area: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Python", "Microservices"],
  },
  {
    area: "Bases de Datos",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "Supabase", "Neo4j"],
  },
  {
    area: "DevOps y Herramientas",
    items: ["Git", "GitHub", "Docker", "npm", "CI/CD", "Postman"],
  },
  {
    area: "Especialidades",
    items: ["Accesibilidad (WCAG 2.1)", "ETL Pipelines", "Data Warehouse", "Mobile Accessibility"],
  },
];

export const projects: Project[] = [
  {
    title: "My Track Fit V.2 – Plataforma de Gestión de Fitness",
    description:
      "Aplicación móvil full-stack para gestión integral de fitness con seguimiento de rutinas, nutrición, lesiones y estadísticas personalizadas. Incluye accesibilidad completa para usuarios con discapacidad visual.",
    stack: ["React Native", "Vite", "Node.js", "Express", "PostgreSQL", "Supabase", "JWT"],
    highlights: [
      "Implementé autenticación JWT personalizada con confirmación de email y recuperación de contraseña.",
      "Diseñé esquema PostgreSQL de 12 tablas con relaciones complejas y sincronización en tiempo real.",
      "Cumplimiento WCAG 2.1 Nivel AAA: optimización completa para VoiceOver/TalkBack, etiquetas ARIA, navegación por teclado.",
      "Dashboard interactivo con visualización de datos (Recharts), filtros por rango de días y cálculos nutricionales.",
    ],
    demoUrl: "https://github.com/santivalverde4",
    repoUrl: "https://github.com/santivalverde4",
  },
  {
    title: "Data Warehouse Multi-Fuente con Pipeline ETL",
    description:
      "Sistema integrado de almacén de datos extrayendo información de 5 fuentes heterogéneas (SQL Server, MySQL, MongoDB, PostgreSQL, Neo4j) con procesamiento ETL y análisis de inteligencia empresarial.",
    stack: ["Python", "SQL Server", "MySQL", "MongoDB", "PostgreSQL", "Neo4j", "Docker", "Power BI"],
    highlights: [
      "Integración de 5 bases de datos heterogéneas en almacén unificado con Docker.",
      "Desarrollo de pipelines ETL iniciales usando scripts Python para extracción y transformación.",
      "Diseño de esquema en estrella con tablas de dimensión (Customer, Product, Time, Category) y hechos.",
      "Implementación de algoritmo Apriori para sistema de recomendaciones basado en minería de reglas de asociación.",
    ],
    demoUrl: "https://github.com/santivalverde4",
    repoUrl: "https://github.com/santivalverde4",
  },
  {
    title: "DB POC – Sistema REST API de Gestión de Empleados",
    description:
      "Aplicación completa full-stack para gestión de empleados con frontend moderno y backend optimizado con procedimientos almacenados.",
    stack: ["TypeScript", "Next.js", "React", "Express", "SQL Server", "TailwindCSS"],
    highlights: [
      "Interfaz completa de usuario con Next.js 15 y React 19, operaciones CRUD completas.",
      "Procedimientos almacenados en SQL Server para creación, consulta y listado de empleados con validación en BD.",
      "Integración frontend-backend con API RESTful tipificada en TypeScript.",
      "Implementación de validación de datos, ordenamiento y manejo robusto de errores.",
    ],
    demoUrl: "https://github.com/santivalverde4",
    repoUrl: "https://github.com/santivalverde4",
  },
  {
    title: "MorphoPymes – Plataforma Descentralizada de Micro-Inversión",
    description:
      "Plataforma blockchain para conectar PyMEs en Latinoamérica con inversores individuales, desarrollada durante el Hackathon Aleph 2024.",
    stack: ["React.js", "Web3.js", "ethers.js", "MetaMask", "Express.js", "MongoDB", "Base Sepolia"],
    highlights: [
      "Desarrollo completo del frontend React para dashboards de inversores y portales de emprendedores.",
      "Integración Web3 con MetaMask: conexión de billetera, firma de transacciones, monitoreo de eventos en contrato inteligente.",
      "Flujos completos de usuario (exploración, inversión, seguimiento) con interacciones On-chain y ENS.",
      "MVP funcional entregado en 48 horas con gestión de reputación On-chain.",
    ],
    demoUrl: "https://github.com/santivalverde4",
    repoUrl: "https://github.com/santivalverde4",
  },
];
