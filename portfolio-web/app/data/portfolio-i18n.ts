import { Profile, Project, TechGroup, SocialLink } from "@/app/types/portfolio";

export type Language = "es" | "en";

export const portfolioData: Record<Language, { profile: Profile; techGroups: TechGroup[]; projects: Project[] }> = {
  en: {
    profile: {
      name: "Santiago Valverde Álvarez",
      role: "Full Stack Developer & Computer Engineer",
      location: "Cartago, Costa Rica",
      summary:
        "I build scalable web and mobile applications with a focus on accessibility, performance, and user experience. Experience in full-stack development, ETL, and database architecture.",
      availability: "Available for part-time internships.",
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
    },
    techGroups: [
      {
        area: "Frontend",
        items: ["React.js", "Next.js", "React Native", "TypeScript", "Tailwind CSS", "Vite", "Responsive Design"],
      },
      {
        area: "Backend",
        items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Python", "Microservices"],
      },
      {
        area: "Databases",
        items: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "Supabase", "Neo4j"],
      },
      {
        area: "DevOps & Tools",
        items: ["Git", "GitHub", "Docker", "npm", "CI/CD", "Postman"],
      },
      {
        area: "Specialties",
        items: ["Accessibility (WCAG 2.1)", "ETL Pipelines", "Data Warehouse", "Mobile Accessibility"],
      },
    ],
    projects: [
      {
        title: "My Track Fit V.2 – Fitness Management Platform",
        description:
          "Full-stack mobile application for comprehensive fitness management with workout tracking, nutrition, injuries, and personalized statistics. Includes complete accessibility for users with visual disabilities.",
        stack: ["React Native", "Vite", "Node.js", "Express", "PostgreSQL", "Supabase", "JWT"],
        highlights: [
          "Implemented custom JWT authentication with email confirmation and password recovery.",
          "Designed PostgreSQL schema with 12 tables with complex relationships and real-time synchronization.",
          "WCAG 2.1 Level AAA compliance: complete optimization for VoiceOver/TalkBack, ARIA labels, keyboard navigation.",
          "Interactive dashboard with data visualization (Recharts), date range filters, and nutritional calculations.",
        ],
        demoUrl: "https://github.com/santivalverde4",
        repoUrl: "https://github.com/santivalverde4",
      },
      {
        title: "Multi-Source Data Warehouse with ETL Pipeline",
        description:
          "Integrated data warehouse system extracting information from 5 heterogeneous sources (SQL Server, MySQL, MongoDB, PostgreSQL, Neo4j) with ETL processing and business intelligence analysis.",
        stack: ["Python", "SQL Server", "MySQL", "MongoDB", "PostgreSQL", "Neo4j", "Docker", "Power BI"],
        highlights: [
          "Integration of 5 heterogeneous databases into unified warehouse with Docker.",
          "Development of initial ETL pipelines using Python scripts for extraction and transformation.",
          "Star schema design with dimension tables (Customer, Product, Time, Category) and fact tables.",
          "Implementation of Apriori algorithm for recommendation system based on association rule mining.",
        ],
        demoUrl: "https://github.com/santivalverde4",
        repoUrl: "https://github.com/santivalverde4",
      },
      {
        title: "DB POC – Employee Management REST API System",
        description:
          "Complete full-stack application for employee management with modern frontend and optimized backend with stored procedures.",
        stack: ["TypeScript", "Next.js", "React", "Express", "SQL Server", "TailwindCSS"],
        highlights: [
          "Complete user interface with Next.js 15 and React 19, full CRUD operations.",
          "Stored procedures in SQL Server for creation, query, and employee listing with database validation.",
          "Frontend-backend integration with typed RESTful API in TypeScript.",
          "Implementation of data validation, sorting, and robust error handling.",
        ],
        demoUrl: "https://github.com/santivalverde4",
        repoUrl: "https://github.com/santivalverde4",
      },
      {
        title: "MorphoPymes – Decentralized Micro-Investment Platform",
        description:
          "Blockchain platform connecting SMEs in Latin America with individual investors, developed during the Aleph 2024 Hackathon.",
        stack: ["React.js", "Web3.js", "ethers.js", "MetaMask", "Express.js", "MongoDB", "Base Sepolia"],
        highlights: [
          "Complete React frontend development for investor dashboards and entrepreneur portals.",
          "Web3 integration with MetaMask: wallet connection, transaction signing, smart contract event monitoring.",
          "Complete user flows (exploration, investment, tracking) with on-chain interactions and ENS.",
          "Functional MVP delivered in 48 hours with on-chain reputation management.",
        ],
        demoUrl: "https://github.com/santivalverde4",
        repoUrl: "https://github.com/santivalverde4",
      },
    ],
  },
  es: {
    profile: {
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
    },
    techGroups: [
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
    ],
    projects: [
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
    ],
  },
};
