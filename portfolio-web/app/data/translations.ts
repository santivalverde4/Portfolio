export type Language = "es" | "en";

export const translations = {
  en: {
    nav: {
      technologies: "Stack",
      projects: "Projects",
      cv: "Resume",
      contact: "Contact",
    },
    hero: {
      kicker: "Full-stack engineering portfolio",
      title: "I design and ship digital products that feel polished, accessible, and production-ready.",
      viewProjects: "See selected work",
      downloadCV: "Download resume",
      projectsLabel: "Projects shipped",
      technologiesLabel: "Core technologies",
      focusLabel: "Engineering focus",
      focusText:
        "Accessible frontend systems, robust backends, and product decisions guided by performance.",
      capabilitiesTitle: "What I bring to a team",
      capabilities: [
        "UI engineering with strong visual craft and usability standards.",
        "End-to-end delivery across frontend, backend, data, and deployment flows.",
        "Accessibility-first implementation aligned with WCAG and real product quality.",
      ],
      connectLabel: "Find me on",
    },
    techStack: {
      eyebrow: "Core stack",
      title: "Tools I trust in production",
      subtitle:
        "Technologies I use to build fast, scalable, and maintainable products from interface to infrastructure.",
    },
    projects: {
      eyebrow: "Selected work",
      title: "Projects with strong technical range",
      subtitle:
        "A mix of frontend craft, backend architecture, data work, and accessibility-driven execution.",
      stack: "Stack",
      highlights: "Key contributions",
      viewDemo: "Live preview",
      viewRepo: "Source code",
    },
    footer: {
      eyebrow: "Let's build",
      contact: "Open to meaningful product work",
      contactText:
        "If you need someone who cares about system quality, usability, and delivery details, let's talk.",
      email: "Email me",
      followMe: "Elsewhere",
      copyright: "\u00a9 2026 %name%. Built with Next.js and TypeScript.",
    },
  },
  es: {
    nav: {
      technologies: "Stack",
      projects: "Proyectos",
      cv: "CV",
      contact: "Contacto",
    },
    hero: {
      kicker: "Portafolio de ingenieria full-stack",
      title:
        "Diseno y desarrollo productos digitales que se sienten pulidos, accesibles y listos para produccion.",
      viewProjects: "Ver trabajo seleccionado",
      downloadCV: "Descargar CV",
      projectsLabel: "Proyectos entregados",
      technologiesLabel: "Tecnologias clave",
      focusLabel: "Enfoque de ingenieria",
      focusText:
        "Sistemas frontend accesibles, backends robustos y decisiones de producto guiadas por performance.",
      capabilitiesTitle: "Lo que aporto a un equipo",
      capabilities: [
        "UI engineering con criterio visual, detalle y estandares de usabilidad.",
        "Entrega end-to-end en frontend, backend, datos y flujos de despliegue.",
        "Implementacion accessibility-first alineada con WCAG y calidad real de producto.",
      ],
      connectLabel: "Encuentrame en",
    },
    techStack: {
      eyebrow: "Capacidades tecnicas",
      title: "Herramientas con las que entrego en serio",
      subtitle:
        "Tecnologias que uso para construir productos rapidos, escalables y mantenibles desde la interfaz hasta la infraestructura.",
    },
    projects: {
      eyebrow: "Trabajo seleccionado",
      title: "Proyectos con rango tecnico real",
      subtitle:
        "Una mezcla de frontend, arquitectura backend, trabajo con datos y ejecucion con foco en accesibilidad.",
      stack: "Stack",
      highlights: "Aportes clave",
      viewDemo: "Ver demo",
      viewRepo: "Repositorio",
    },
    footer: {
      eyebrow: "Construyamos algo",
      contact: "Disponible para trabajo de producto con impacto",
      contactText:
        "Si buscas a alguien que cuide la calidad del sistema, la usabilidad y el detalle de entrega, conversemos.",
      email: "Escribeme",
      followMe: "Tambien estoy en",
      copyright: "\u00a9 2026 %name%. Construido con Next.js y TypeScript.",
    },
  },
};
