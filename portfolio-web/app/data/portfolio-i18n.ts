import { Profile, Project, TechGroup, SocialLink } from "@/app/types/portfolio";

export type Language = "es" | "en";

export const portfolioData: Record<Language, { profile: Profile; techGroups: TechGroup[]; projects: Project[] }> = {
  en: {
    profile: {
      name: "Santiago Valverde Álvarez",
      role: "Computer Engineering Student | Full Stack Developer",
      location: "Costa Rica",
      summary:
        "Computer Engineering student with proficiency in full-stack development and system architecture. Experienced in building scalable APIs, designing structured applications, and implementing accessibility standards. Strong interest in artificial intelligence and modern software engineering, with a focus on developing reliable and production-ready solutions.",
      availability: "Available for part-time internships.",
      email: "s.valverde04@gmail.com",
      cvUrl: "https://drive.google.com/file/d/13d18HViCOy-AwfCbNqo-Bf8WBewxcWcd/view?usp=sharing",
      socialLinks: [
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/santiago-valverde-álvarez-135316279",
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
        items: ["Accessibility (WCAG)", "ETL Pipelines", "Data Warehouse", "Mobile Accessibility"],
      },
    ],
    projects: [
      {
        title: "My Track Fit V.2 – Fitness Management Platform",
        description:
          "Built a production-ready cross-platform fitness app managing workout routines, nutrition tracking, injury monitoring, and user statistics. Engineered a 12-table PostgreSQL schema with complex relational structures and achieved full WCAG 2.1 Level AAA accessibility compliance.",
        stack: ["React Native", "Node.js", "Express", "PostgreSQL", "Supabase", "JWT"],
        highlights: [
          "Engineered a 12-table PostgreSQL schema with complex relational structures and custom JWT authentication with email confirmation and password recovery.",
          "Achieved full WCAG 2.1 Level AAA accessibility compliance with VoiceOver/TalkBack optimization, ARIA labels, semantic HTML5, and keyboard/gesture navigation.",
          "Designed a RESTful API following three-layer architecture covering 6 functional modules: auth, exercises, routines, nutrition, injuries, and statistics.",
          "Implemented real-time data synchronization and cross-platform functionality for Android deployment.",
        ],
        demoUrl: "https://github.com/santivalverde4/My-Track-Fit-V.2",
        repoUrl: "https://github.com/santivalverde4/My-Track-Fit-V.2",
      },
      {
        title: "Multi-Source Data Warehouse with ETL Pipeline",
        description:
          "Developed ETL processes to integrate SQL Server data into a centralized data warehouse with star schema design. Built an automated SQL Server job to fetch daily exchange rates and implemented scripts for historical data backfilling.",
        stack: ["Python", "SQL Server", "MySQL", "MongoDB", "PostgreSQL", "Docker", "Power BI"],
        highlights: [
          "Developed ETL processes to integrate SQL Server data with handling of data transformation, cleaning, and loading.",
          "Contributed to data warehouse design using star schema model with practical experience in dimensional modeling and analytical data structures.",
          "Built an automated SQL Server job to fetch daily exchange rates from the Central Bank of Costa Rica (BCCR) API and maintain currency conversion tables.",
          "Developed scripts to backfill historical exchange rate data, enabling accurate currency normalization for multi-source integration.",
        ],
        demoUrl: "https://github.com/santivalverde4/Transactional-Models-Project",
        repoUrl: "https://github.com/santivalverde4/Transactional-Models-Project",
      },
      {
        title: "Employee Management System – REST API & Full-Stack",
        description:
          "Developed a full-stack employee management system with CRUD operations, data validation, and error handling. Implemented SQL Server stored procedures for optimized operations integrated via a TypeScript/Express backend.",
        stack: ["TypeScript", "Next.js 15", "React 19", "Express", "SQL Server", "Tailwind CSS"],
        highlights: [
          "Developed full-stack application with CRUD operations, data validation, sorting, and error handling.",
          "Implemented SQL Server stored procedures for optimized employee creation, retrieval, and validation at database layer.",
          "Built a clean, user-friendly, and high-quality frontend interface with Next.js 15 and React 19.",
          "Gained practical experience in RESTful API development using TypeScript/Express architecture.",
        ],
        demoUrl: "https://github.com/santivalverde4/Homework3_DB",
        repoUrl: "https://github.com/santivalverde4/Homework3_DB",
      },
      {
        title: "MorphoPymes – Decentralized Micro-Investment Platform",
        description:
          "Led complete frontend development of a blockchain-based micro-investment platform connecting Latin American SMEs with individual investors. Delivered a fully functional frontend MVP interfacing with deployed smart contracts on Base Sepolia testnet covering the complete investment lifecycle.",
        stack: ["React.js", "Web3.js", "ethers.js", "MetaMask", "Express.js", "MongoDB", "Base Sepolia"],
        highlights: [
          "Led complete frontend development of a blockchain micro-investment platform built end-to-end during a 48-hour hackathon.",
          "Designed and developed dual user flows for investors (browse, invest, track returns) and entrepreneurs (create project, manage funding) with intuitive UX.",
          "Delivered fully functional frontend MVP interfacing with deployed smart contracts on Base Sepolia testnet, covering complete investment lifecycle from discovery to on-chain reputation tracking.",
          "Integrated Web3 with MetaMask: wallet connection, transaction signing, and smart contract event monitoring.",
        ],
        demoUrl: "https://github.com/santivalverde4/MorphoPymes",
        repoUrl: "https://github.com/santivalverde4/MorphoPymes",
      },
    ],
  },
  es: {
    profile: {
      name: "Santiago Valverde Álvarez",
      role: "Estudiante de Ingeniería en Computación | Desarrollador Full Stack",
      location: "Costa Rica",
      summary:
        "Estudiante de Ingeniería en Computación con dominio en desarrollo full-stack y arquitectura de sistemas. Experiencia en construcción de APIs escalables, diseño de aplicaciones estructuradas e implementación de estándares de accesibilidad. Fuerte interés en inteligencia artificial e ingeniería de software moderna, con enfoque en desarrollar soluciones confiables y listas para producción.",
      availability: "Disponible para prácticas a tiempo parcial.",
      email: "s.valverde04@gmail.com",
      cvUrl: "https://drive.google.com/file/d/13d18HViCOy-AwfCbNqo-Bf8WBewxcWcd/view?usp=sharing",
      socialLinks: [
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/santiago-valverde-álvarez-135316279",
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
        items: ["Accesibilidad (WCAG)", "ETL Pipelines", "Data Warehouse", "Mobile Accessibility"],
      },
    ],
    projects: [
      {
        title: "My Track Fit V.2 – Plataforma de Gestión de Fitness",
        description:
          "Desarrollé una aplicación móvil multiplataforma lista para producción que gestiona rutinas de entrenamiento, seguimiento nutricional, monitoreo de lesiones y estadísticas del usuario. Diseñé un esquema PostgreSQL de 12 tablas con estructuras relacionales complejas y alcancé cumplimiento total de accesibilidad WCAG 2.1 Nivel AAA.",
        stack: ["React Native", "Node.js", "Express", "PostgreSQL", "Supabase", "JWT"],
        highlights: [
          "Diseñé un esquema PostgreSQL de 12 tablas con estructuras relacionales complejas y autenticación JWT personalizada con confirmación de email y recuperación de contraseña.",
          "Alcancé cumplimiento total de WCAG 2.1 Nivel AAA con optimización completa para VoiceOver/TalkBack, etiquetas ARIA, HTML5 semántico y navegación por teclado/gestos.",
          "Diseñé una API RESTful siguiendo arquitectura de tres capas cubriendo 6 módulos funcionales: autenticación, ejercicios, rutinas, nutrición, lesiones y estadísticas.",
          "Implementé sincronización de datos en tiempo real y funcionalidad multiplataforma para despliegue en Android.",
        ],
        demoUrl: "https://github.com/santivalverde4/My-Track-Fit-V.2",
        repoUrl: "https://github.com/santivalverde4/My-Track-Fit-V.2",
      },
      {
        title: "Data Warehouse Multi-Fuente con Pipeline ETL",
        description:
          "Desarrollé procesos ETL para integrar datos de SQL Server en un almacén de datos centralizado con diseño de esquema en estrella. Construí un trabajo automatizado de SQL Server para obtener tasas de cambio diarias e implementé scripts para backfilling de datos históricos.",
        stack: ["Python", "SQL Server", "MySQL", "MongoDB", "PostgreSQL", "Docker", "Power BI"],
        highlights: [
          "Desarrollé procesos ETL para integrar datos de SQL Server con manejo de transformación, limpieza y carga de datos.",
          "Contribuí al diseño del almacén de datos usando modelo de esquema en estrella con experiencia práctica en modelado dimensional y estructuras de datos analíticos.",
          "Construí un trabajo automatizado de SQL Server para obtener tasas de cambio diarias del Banco Central de Costa Rica (BCCR) API y mantener tablas de conversión de divisas.",
          "Desarrollé scripts para backfilling de datos de tasas de cambio históricas, habilitando normalización de divisas precisa para integración multi-fuente.",
        ],
        demoUrl: "https://github.com/santivalverde4/Transactional-Models-Project",
        repoUrl: "https://github.com/santivalverde4/Transactional-Models-Project",
      },
      {
        title: "Sistema de Gestión de Empleados – API REST & Full-Stack",
        description:
          "Desarrollé una aplicación full-stack para gestión de empleados con operaciones CRUD, validación de datos y manejo de errores. Implementé procedimientos almacenados de SQL Server para operaciones optimizadas integradas a través de un backend TypeScript/Express.",
        stack: ["TypeScript", "Next.js 15", "React 19", "Express", "SQL Server", "Tailwind CSS"],
        highlights: [
          "Desarrollé aplicación full-stack con operaciones CRUD, validación de datos, ordenamiento y manejo robusto de errores.",
          "Implementé procedimientos almacenados de SQL Server para optimización de creación, recuperación y validación de empleados en la capa de base de datos.",
          "Construí una interfaz frontend limpia, amigable y de alta calidad con Next.js 15 y React 19.",
          "Adquirí experiencia práctica en desarrollo de API RESTful usando arquitectura TypeScript/Express.",
        ],
        demoUrl: "https://github.com/santivalverde4/Homework3_DB",
        repoUrl: "https://github.com/santivalverde4/Homework3_DB",
      },
      {
        title: "MorphoPymes – Plataforma Descentralizada de Micro-Inversión",
        description:
          "Lideré el desarrollo completo del frontend de una plataforma blockchain de micro-inversión que conecta PyMEs latinoamericanas con inversores individuales. Entregué un MVP frontend completamente funcional que se interfaciona con contratos inteligentes desplegados en la testnet Base Sepolia, cubriendo el ciclo de vida completo de inversión.",
        stack: ["React.js", "Web3.js", "ethers.js", "MetaMask", "Express.js", "MongoDB", "Base Sepolia"],
        highlights: [
          "Lideré el desarrollo completo del frontend de una plataforma blockchain de micro-inversión construida end-to-end durante un hackathon de 48 horas.",
          "Diseñé y desarrollé flujos de usuario duales para inversores (explorar, invertir, rastrear retornos) y emprendedores (crear proyecto, gestionar financiamiento) con UX intuitiva.",
          "Entregué MVP frontend completamente funcional que se interfaciona con contratos inteligentes desplegados en Base Sepolia testnet, cubriendo el ciclo de vida completo de inversión desde descubrimiento hasta rastreo de reputación on-chain.",
          "Integré Web3 con MetaMask: conexión de billetera, firma de transacciones y monitoreo de eventos del contrato inteligente.",
        ],
        demoUrl: "https://github.com/santivalverde4/MorphoPymes",
        repoUrl: "https://github.com/santivalverde4/MorphoPymes",
      },
    ],
  },
};
