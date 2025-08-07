# Consultora de Programación

Una página web moderna para una consultora de desarrollo de software, construida con Next.js 14, TypeScript y Tailwind CSS.

## 🚀 Características

- **Framework**: Next.js 14 con App Router
- **Lenguaje**: TypeScript para type safety
- **Estilos**: Tailwind CSS para diseño responsive
- **Componentes**: Arquitectura modular y reutilizable
- **SEO**: Metadatos optimizados y estructura semántica
- **Performance**: Optimizado para Core Web Vitals

## 📁 Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   ├── proyectos/         # Página de proyectos
│   │   └── page.tsx
│   └── contacto/          # Página de contacto
│       └── page.tsx
├── components/            # Componentes React
│   ├── layout/           # Componentes de layout
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/         # Secciones de páginas
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── ProjectsHero.tsx
│   │   ├── ProjectsGrid.tsx
│   │   ├── ContactHero.tsx
│   │   ├── ContactForm.tsx
│   │   └── ContactInfo.tsx
│   └── ui/               # Componentes UI reutilizables
│       └── Button.tsx
├── lib/                  # Utilidades y helpers
│   └── utils.ts
├── styles/               # Estilos globales
│   └── globals.css
└── types/                # Definiciones de tipos TypeScript
    └── index.ts
```

## 🛠️ Instalación y Configuración

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```

3. **Construir para producción**:
   ```bash
   npm run build
   ```

4. **Ejecutar en producción**:
   ```bash
   npm start
   ```

## 📄 Páginas

### Página de Inicio (`/`)
- Hero section con llamada a la acción
- Sección de servicios
- Información sobre la empresa
- CTA final

### Página de Proyectos (`/proyectos`)
- Hero section específica
- Grid de proyectos realizados
- Filtros por categoría (futuro)

### Página de Contacto (`/contacto`)
- Hero section
- Formulario de contacto
- Información de contacto

## 🎨 Personalización

### Colores
Los colores principales se definen en `tailwind.config.ts`:
- Primary: Azul (#3b82f6)
- Secondary: Gris (#64748b)

### Tipografía
- Fuente principal: Inter (Google Fonts)
- Configurada en `src/app/layout.tsx`

### Componentes
- Todos los componentes están tipados con TypeScript
- Utilizan Tailwind CSS para estilos
- Siguen patrones de composición y reutilización

## 🔧 Próximas Mejoras

- [ ] Integración con CMS (Strapi, Contentful)
- [ ] Animaciones con Framer Motion
- [ ] Componentes de Magic UI
- [ ] Sistema de filtros en proyectos
- [ ] Blog/Artículos técnicos
- [ ] Modo oscuro
- [ ] Internacionalización (i18n)

## 📱 Responsive Design

El sitio está optimizado para:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🚀 Deployment

El proyecto está listo para ser desplegado en:
- Vercel (recomendado)
- Netlify
- AWS Amplify
- Cualquier plataforma que soporte Next.js

## 📝 Licencia

Este proyecto es privado y pertenece a DevConsultora.