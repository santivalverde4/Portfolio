import { Profile, Project, TechGroup, SocialLink } from "@/app/types/portfolio";

export type Language = "es" | "en";

export const portfolioData: Record<
  Language,
  { profile: Profile; techGroups: TechGroup[]; projects: Project[] }
> = {
  en: {
    profile: {
      name: "Santiago Valverde \u00c1lvarez",
      role: "Full Stack Developer & Computer Engineer",
      location: "Cartago, Costa Rica",
      summary:
        "I build scalable web and mobile applications with a strong focus on accessibility, performance, and user experience. My work spans full-stack delivery, ETL flows, and solid database architecture.",
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
        items: [
          "React.js",
          "Next.js",
          "React Native",
          "TypeScript",
          "Tailwind CSS",
          "Vite",
          "Responsive Design",
        ],
      },
      {
        area: "Backend",
        items: [
          "Node.js",
          "Express.js",
          "REST APIs",
          "JWT Authentication",
          "Python",
          "Microservices",
        ],
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
        items: [
          "Accessibility (WCAG 2.1)",
          "ETL Pipelines",
          "Data Warehouse",
          "Mobile Accessibility",
        ],
      },
    ],
    projects: [
      {
        title: "My Track Fit V.2 - Fitness Management Platform",
        description:
          "Full-stack mobile application for comprehensive fitness management with workout tracking, nutrition, injuries, and personalized statistics. Built with complete accessibility support for users with visual disabilities.",
        stack: ["React Native", "Vite", "Node.js", "Express", "PostgreSQL", "Supabase", "JWT"],
        highlights: [
          "Implemented custom JWT authentication with email confirmation and password recovery.",
          "Designed PostgreSQL schema with 12 tables with complex relationships and real-time synchronization.",
          "WCAG 2.1 Level AAA compliance with VoiceOver/TalkBack support, ARIA labels, and keyboard navigation.",
          "Interactive dashboard with data visualization, date range filters, and nutritional calculations.",
        ],
        demoUrl: "https://github.com/santivalverde4",
        repoUrl: "https://github.com/santivalverde4",
      },
      {
        title: "Multi-Source Data Warehouse with ETL Pipeline",
        description:
          "Integrated data warehouse system extracting information from five heterogeneous sources with ETL processing and business intelligence analysis.",
        stack: ["Python", "SQL Server", "MySQL", "MongoDB", "PostgreSQL", "Neo4j", "Docker", "Power BI"],
        highlights: [
          "Integrated five heterogeneous databases into a unified warehouse running in Docker.",
          "Built initial ETL pipelines in Python for extraction, transformation, and loading workflows.",
          "Designed a star schema with dimension tables and fact tables for analytical workloads.",
          "Implemented the Apriori algorithm for product recommendations based on association rules.",
        ],
        demoUrl: "https://github.com/santivalverde4",
        repoUrl: "https://github.com/santivalverde4",
      },
      {
        title: "DB POC - Employee Management REST API System",
        description:
          "Full-stack employee management application with a modern frontend and an optimized backend powered by stored procedures.",
        stack: ["TypeScript", "Next.js", "React", "Express", "SQL Server", "TailwindCSS"],
        highlights: [
          "Built the full user interface with Next.js 15 and React 19, including complete CRUD flows.",
          "Implemented SQL Server stored procedures for creation, queries, listing, and database validation.",
          "Connected frontend and backend through a typed REST API in TypeScript.",
          "Added robust validation, sorting, and error handling for smoother product behavior.",
        ],
        demoUrl: "https://github.com/santivalverde4",
        repoUrl: "https://github.com/santivalverde4",
      },
      {
        title: "MorphoPymes - Decentralized Micro-Investment Platform",
        description:
          "Blockchain platform connecting SMEs in Latin America with individual investors, built during the Aleph 2024 Hackathon.",
        stack: ["React.js", "Web3.js", "ethers.js", "MetaMask", "Express.js", "MongoDB", "Base Sepolia"],
        highlights: [
          "Owned the complete React frontend for investor dashboards and entrepreneur portals.",
          "Integrated MetaMask for wallet connection, transaction signing, and smart contract event tracking.",
          "Designed end-to-end investment and tracking flows with ENS and on-chain interactions.",
          "Delivered a functional MVP in 48 hours with on-chain reputation management.",
        ],
        demoUrl: "https://github.com/santivalverde4",
        repoUrl: "https://github.com/santivalverde4",
      },
    ],
  },
  es: {
    profile: {
      name: "Santiago Valverde \u00c1lvarez",
      role: "Desarrollador Full Stack & Ingeniero en Computacion",
      location: "Cartago, Costa Rica",
      summary:
        "Construyo aplicaciones web y moviles escalables con enfoque en accesibilidad, performance y experiencia de usuario. Tengo experiencia en desarrollo full-stack, ETL y arquitectura de bases de datos.",
      availability: "Disponible para practicas a tiempo parcial.",
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
        items: [
          "React.js",
          "Next.js",
          "React Native",
          "TypeScript",
          "Tailwind CSS",
          "Vite",
          "Responsive Design",
        ],
      },
      {
        area: "Backend",
        items: [
          "Node.js",
          "Express.js",
          "REST APIs",
          "JWT Authentication",
          "Python",
          "Microservices",
        ],
      },
      {
        area: "Bases de datos",
        items: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "Supabase", "Neo4j"],
      },
      {
        area: "DevOps y herramientas",
        items: ["Git", "GitHub", "Docker", "npm", "CI/CD", "Postman"],
      },
      {
        area: "Especialidades",
        items: [
          "Accesibilidad (WCAG 2.1)",
          "ETL Pipelines",
          "Data Warehouse",
          "Mobile Accessibility",
        ],
      },
    ],
    projects: [
      {
        title: "My Track Fit V.2 - Plataforma de gestion de fitness",
        description:
          "Aplicacion movil full-stack para gestion integral de fitness con seguimiento de rutinas, nutricion, lesiones y estadisticas personalizadas. Incluye accesibilidad completa para usuarios con discapacidad visual.",
        stack: ["React Native", "Vite", "Node.js", "Express", "PostgreSQL", "Supabase", "JWT"],
        highlights: [
          "Implemente autenticacion JWT personalizada con confirmacion de email y recuperacion de contrasena.",
          "Disene un esquema PostgreSQL de 12 tablas con relaciones complejas y sincronizacion en tiempo real.",
          "Cumplimiento WCAG 2.1 nivel AAA con optimizacion para VoiceOver/TalkBack, etiquetas ARIA y navegacion por teclado.",
          "Dashboard interactivo con visualizacion de datos, filtros por rango de dias y calculos nutricionales.",
        ],
        demoUrl: "https://github.com/santivalverde4",
        repoUrl: "https://github.com/santivalverde4",
      },
      {
        title: "Data warehouse multi-fuente con pipeline ETL",
        description:
          "Sistema integrado de almacen de datos que extrae informacion de cinco fuentes heterogeneas con procesamiento ETL y analisis de inteligencia empresarial.",
        stack: ["Python", "SQL Server", "MySQL", "MongoDB", "PostgreSQL", "Neo4j", "Docker", "Power BI"],
        highlights: [
          "Integre cinco bases de datos heterogeneas en un almacen unificado con Docker.",
          "Desarrolle pipelines ETL iniciales usando scripts Python para extraccion y transformacion.",
          "Disene un esquema en estrella con tablas de dimension y tablas de hechos.",
          "Implemente el algoritmo Apriori para un sistema de recomendaciones basado en reglas de asociacion.",
        ],
        demoUrl: "https://github.com/santivalverde4",
        repoUrl: "https://github.com/santivalverde4",
      },
      {
        title: "DB POC - Sistema REST API de gestion de empleados",
        description:
          "Aplicacion full-stack para gestion de empleados con frontend moderno y backend optimizado con procedimientos almacenados.",
        stack: ["TypeScript", "Next.js", "React", "Express", "SQL Server", "TailwindCSS"],
        highlights: [
          "Constru\u00ed la interfaz completa con Next.js 15 y React 19, incluyendo operaciones CRUD.",
          "Implemente procedimientos almacenados en SQL Server para creacion, consulta y listado de empleados con validacion en base de datos.",
          "Integre frontend y backend mediante una API REST tipificada en TypeScript.",
          "Agregue validacion de datos, ordenamiento y manejo robusto de errores.",
        ],
        demoUrl: "https://github.com/santivalverde4",
        repoUrl: "https://github.com/santivalverde4",
      },
      {
        title: "MorphoPymes - Plataforma descentralizada de micro-inversion",
        description:
          "Plataforma blockchain para conectar PyMEs en Latinoamerica con inversores individuales, desarrollada durante el Hackathon Aleph 2024.",
        stack: ["React.js", "Web3.js", "ethers.js", "MetaMask", "Express.js", "MongoDB", "Base Sepolia"],
        highlights: [
          "Desarrolle el frontend React completo para dashboards de inversores y portales de emprendedores.",
          "Integre MetaMask para conexion de billetera, firma de transacciones y monitoreo de eventos.",
          "Modele flujos completos de usuario con interacciones on-chain y ENS.",
          "Entregue un MVP funcional en 48 horas con gestion de reputacion on-chain.",
        ],
        demoUrl: "https://github.com/santivalverde4",
        repoUrl: "https://github.com/santivalverde4",
      },
    ],
  },
};
