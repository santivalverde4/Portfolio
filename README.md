# Santiago Valverde - Portafolio Profesional

Portafolio web moderno y professional construido con **Next.js 16**, **TypeScript**, y **Tailwind CSS v4**.

##  Características

-  **Diseño limpio y profesional** - Interfaz moderna con Tailwind CSS
-  **100% Responsivo** - Optimizado para móvil, tablet y desktop
-  **Alto desempeño** - Next.js 16 con optimizaciones de rendering
-  **Componentes reutilizables** - Arquitectura escalable y mantenible
-  **TypeScript** - Type-safe con tipos explícitos
-  **SEO ready** - Metadata dinámica basada en datos

##  Estructura del Proyecto

```
app/
├── components/          # Componentes React reutilizables
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── TechStack.tsx
│   ├── Projects.tsx
│   └── index.ts
├── data/               # Datos centralizados
│   └── portfolio.ts
├── types/              # Tipos TypeScript
│   └── portfolio.ts
├── lib/                # Utilidades y funciones
├── globals.css         # Estilos globales
├── layout.tsx          # Layout principal
└── page.tsx            # Página de inicio

public/                 # Archivos estáticos
```

##  Instalación

```bash
# Clonar repositorio
git clone https://github.com/santivalverde4/portfolio-web.git
cd portfolio-web

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Personalizacion

Todos los datos están centralizados en `app/data/portfolio.ts`:

```typescript
export const profile: Profile = {
  name: "Tu nombre",
  role: "Tu rol",
  location: "Tu ubicación",
  summary: "Resumen profesional",
  email: "tu-email@example.com",
  // ...
};

export const techGroups: TechGroup[] = [
  // Tus tecnologías
];

export const projects: Project[] = [
  // Tus proyectos
];
```

##  Estilos

El proyecto usa **Tailwind CSS v4** con configuración personalizada:

- **Colores**:  `bg-surface`, `bg-slate-900`, `text-muted`, etc.
- **Espaciado**: Escala predefinida
- **Responstividad**: Breakpoints `md:` y `lg:`

Edita los estilos globales en `app/globals.css`.

##  Build & Deploy

### Build para producción
```bash
npm run build
npm start
```

### Deploy en Vercel (recomendado)
1. Sube tu proyecto a GitHub
2. Entra a [vercel.com](https://vercel.com)
3. Importa el repositorio
4. Vercel detecta automáticamente Next.js
5. Deploy con configuración por defecto

Cada push a `main` publica automáticamente los cambios.

##  Scripts disponibles

| Script | Descripción |
|--------|------------|
| `npm run dev` | Inicia servidor de desarrollo (hot reload) |
| `npm run build` | Construye para producción |
| `npm start` | Inicia servidor de producción |
| `npm run lint` | Ejecuta ESLint |

##  Stack Tecnológico

- **Next.js 16.2.0** - React framework
- **React 19.2.4** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first CSS
- **ESLint 9** - Linting
- **PostCSS 4** - CSS processing

##  Licencia

Proyecto personal. Siéntete libre de usar como referencia.

##  Contacto

- Email: s.valverde04@gmail.com
- GitHub: [github.com/santivalverde4](https://github.com/santivalverde4)
- LinkedIn: [LinkedIn Profile](https://www.linkedin.com/)
