# 📁 Mejores Prácticas para Organización del Proyecto

## 🏗️ Estructura Actual vs. Estructura Mejorada

### Estructura Actual (Básica)
```
src/
├── app/
├── components/
├── lib/
├── styles/
└── types/
```

### Estructura Mejorada Recomendada
```
src/
├── app/                          # Next.js App Router
│   ├── (routes)/                 # Grupos de rutas
│   │   ├── (marketing)/          # Rutas públicas
│   │   │   ├── page.tsx
│   │   │   ├── proyectos/
│   │   │   └── contacto/
│   │   └── (dashboard)/          # Rutas privadas (futuro)
│   ├── globals.css
│   ├── layout.tsx
│   └── not-found.tsx
├── components/                   # Componentes React
│   ├── ui/                      # Componentes base reutilizables
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   └── index.ts             # Barrel exports
│   ├── layout/                  # Componentes de layout
│   │   ├── header/
│   │   │   ├── header.tsx
│   │   │   ├── navigation.tsx
│   │   │   └── mobile-menu.tsx
│   │   ├── footer/
│   │   └── sidebar/
│   ├── sections/                # Secciones específicas de páginas
│   │   ├── home/
│   │   ├── projects/
│   │   └── contact/
│   ├── forms/                   # Componentes de formularios
│   │   ├── contact-form.tsx
│   │   └── newsletter-form.tsx
│   └── common/                  # Componentes comunes
│       ├── loading.tsx
│       ├── error-boundary.tsx
│       └── seo.tsx
├── lib/                         # Utilidades y configuraciones
│   ├── utils.ts                 # Funciones utilitarias
│   ├── constants.ts             # Constantes de la app
│   ├── validations.ts           # Esquemas de validación
│   ├── api.ts                   # Cliente API
│   └── hooks/                   # Custom hooks
│       ├── use-local-storage.ts
│       └── use-media-query.ts
├── types/                       # Definiciones TypeScript
│   ├── index.ts                 # Tipos generales
│   ├── api.ts                   # Tipos de API
│   └── components.ts            # Tipos de componentes
├── data/                        # Datos estáticos
│   ├── projects.ts
│   ├── services.ts
│   └── navigation.ts
├── styles/                      # Estilos
│   ├── globals.css
│   └── components.css
└── config/                      # Configuraciones
    ├── site.ts                  # Configuración del sitio
    └── env.ts                   # Variables de entorno
```

## 🎯 Principios de Organización

### 1. **Separación por Funcionalidad**
- Agrupa archivos relacionados por funcionalidad, no por tipo
- Cada carpeta debe tener un propósito claro

### 2. **Barrel Exports**
```typescript
// components/ui/index.ts
export { Button } from './button'
export { Input } from './input'
export { Card } from './card'

// Uso
import { Button, Input, Card } from '@/components/ui'
```

### 3. **Convenciones de Nomenclatura**
- **Archivos**: kebab-case (`contact-form.tsx`)
- **Componentes**: PascalCase (`ContactForm`)
- **Variables/Funciones**: camelCase (`handleSubmit`)
- **Constantes**: UPPER_SNAKE_CASE (`API_BASE_URL`)

### 4. **Estructura de Componentes**
```typescript
// Orden recomendado en componentes
import React from 'react'           // React imports
import { useState } from 'react'    // React hooks
import Link from 'next/link'        // Next.js imports
import { Button } from '@/components/ui'  // Internal imports
import { cn } from '@/lib/utils'    // Utilities
import type { ComponentProps } from '@/types'  // Types

// Types/Interfaces
interface Props {
  // ...
}

// Component
export function Component({ ...props }: Props) {
  // Hooks
  const [state, setState] = useState()
  
  // Event handlers
  const handleClick = () => {}
  
  // Render
  return (
    <div>
      {/* JSX */}
    </div>
  )
}
```

## 📂 Mejoras Específicas Recomendadas

### 1. **Reorganizar Componentes por Dominio**
```
components/
├── ui/                    # Componentes base del design system
├── layout/               # Layout components
├── features/             # Componentes específicos por feature
│   ├── home/
│   ├── projects/
│   └── contact/
└── common/               # Componentes compartidos
```

### 2. **Crear Hooks Personalizados**
```typescript
// lib/hooks/use-contact-form.ts
export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const submitForm = async (data: ContactFormData) => {
    // Lógica del formulario
  }
  
  return { isSubmitting, submitForm }
}
```

### 3. **Configuración Centralizada**
```typescript
// config/site.ts
export const siteConfig = {
  name: "DevConsultora",
  description: "...",
  url: "https://devconsultora.com",
  ogImage: "/og.jpg",
  links: {
    github: "https://github.com/...",
    linkedin: "https://linkedin.com/...",
  },
}
```

### 4. **Validaciones con Zod**
```typescript
// lib/validations.ts
import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Nombre muy corto'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'Mensaje muy corto'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
```

## 🔧 Herramientas Recomendadas

### 1. **Path Mapping Mejorado**
```json
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/types/*": ["./src/types/*"],
      "@/config/*": ["./src/config/*"],
      "@/data/*": ["./src/data/*"]
    }
  }
}
```

### 2. **Linting y Formatting**
```json
// .eslintrc.json
{
  "extends": [
    "next/core-web-vitals",
    "@typescript-eslint/recommended"
  ],
  "rules": {
    "import/order": ["error", {
      "groups": ["builtin", "external", "internal"],
      "pathGroups": [
        {
          "pattern": "@/**",
          "group": "internal"
        }
      ]
    }]
  }
}
```

### 3. **Husky para Git Hooks**
```json
// package.json
{
  "scripts": {
    "prepare": "husky install"
  },
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"]
  }
}
```

## 📋 Checklist de Mejores Prácticas

- [ ] Usar barrel exports para componentes UI
- [ ] Implementar error boundaries
- [ ] Crear custom hooks para lógica reutilizable
- [ ] Usar TypeScript estricto
- [ ] Implementar validación de formularios
- [ ] Configurar path mapping
- [ ] Usar constantes para strings repetidos
- [ ] Implementar loading states
- [ ] Crear componentes de layout reutilizables
- [ ] Usar convenciones de nomenclatura consistentes

## 🚀 Próximos Pasos

1. **Reorganizar estructura actual** siguiendo las recomendaciones
2. **Implementar design system** con componentes UI base
3. **Agregar validaciones** con Zod
4. **Crear custom hooks** para lógica compartida
5. **Implementar error handling** y loading states
6. **Configurar herramientas** de desarrollo (ESLint, Prettier, Husky)