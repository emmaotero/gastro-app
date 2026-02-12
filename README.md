# 🏥 Gastro App - Calculadora Gastroenterológica

Aplicación web moderna para cálculos y evaluaciones gastroenterológicas, construida con Next.js, React y Tailwind CSS.

## 📋 Características

- ✅ Calculadora de IMC
- ✅ Interfaz responsive y moderna
- ✅ Diseño profesional con Tailwind CSS
- ✅ Optimizado para Vercel
- 🔜 Scores clínicos (Child-Pugh, MELD, etc.)
- 🔜 Escalas diagnósticas

## 🚀 Deploy en Vercel - Paso a Paso

### Opción 1: Deploy desde GitHub (Recomendado)

#### 1. Subir el código a GitHub

```bash
# Inicializar repositorio Git
git init

# Añadir archivos
git add .

# Hacer commit
git commit -m "Initial commit - Gastro App"

# Crear repositorio en GitHub y vincularlo
git remote add origin https://github.com/TU-USUARIO/gastro-app.git

# Subir código
git branch -M main
git push -u origin main
```

#### 2. Conectar con Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en "Sign Up" o "Log In" (puedes usar tu cuenta de GitHub)
3. Haz clic en "Add New..." → "Project"
4. Selecciona "Import Git Repository"
5. Busca tu repositorio `gastro-app`
6. Haz clic en "Import"

#### 3. Configurar el proyecto

Vercel detectará automáticamente que es un proyecto Next.js. Verifica:

- **Framework Preset:** Next.js
- **Root Directory:** ./ (dejar por defecto)
- **Build Command:** `npm run build` (automático)
- **Output Directory:** `.next` (automático)

Haz clic en **"Deploy"** 🚀

#### 4. ¡Listo! 

En 2-3 minutos tu app estará desplegada en una URL tipo:
```
https://gastro-app-tu-usuario.vercel.app
```

### Opción 2: Deploy con Vercel CLI

```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# Ir a la carpeta del proyecto
cd gastro-app

# Hacer login
vercel login

# Deploy
vercel

# Para producción
vercel --prod
```

## 💻 Desarrollo Local

### Prerrequisitos

- Node.js 18+ instalado
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
gastro-app/
├── app/
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página de inicio
├── components/
│   └── Calculator.tsx       # Componente calculadora
├── public/                  # Archivos estáticos
├── .gitignore
├── next.config.js           # Configuración Next.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts       # Configuración Tailwind
└── tsconfig.json           # Configuración TypeScript
```

## 🔄 Actualizaciones Automáticas

Una vez conectado con GitHub, cada vez que hagas `git push`:

```bash
git add .
git commit -m "Descripción de cambios"
git push
```

Vercel automáticamente:
1. Detectará el push
2. Construirá la nueva versión
3. Desplegará los cambios
4. Te enviará una notificación

## 🛠️ Agregar Más Funcionalidades

### Ejemplo: Agregar Score de Child-Pugh

Crea un nuevo componente en `components/ChildPugh.tsx`:

```tsx
'use client';

import { useState } from 'react';

export default function ChildPugh() {
  const [bilirrubina, setBilirrubina] = useState('');
  const [albumina, setAlbumina] = useState('');
  // ... más estados

  const calcular = () => {
    // Lógica de cálculo
  };

  return (
    // JSX del componente
  );
}
```

Luego importa en `app/page.tsx`:

```tsx
import ChildPugh from '@/components/ChildPugh';
```

## 📝 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm start` - Iniciar servidor de producción
- `npm run lint` - Ejecutar linter

## 🌐 Variables de Entorno

Si necesitas variables de entorno (API keys, etc.):

1. Crea archivo `.env.local`:
```bash
NEXT_PUBLIC_API_URL=https://api.ejemplo.com
```

2. En Vercel Dashboard → Settings → Environment Variables, añade las variables

3. Úsalas en el código:
```tsx
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

## 🎨 Personalización

### Cambiar colores del tema

Edita `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: "#tu-color-aqui",
      secondary: "#otro-color",
    },
  },
}
```

## 📱 Características de Producción

- ✅ Optimización automática de imágenes
- ✅ Code splitting automático
- ✅ Pre-renderizado estático
- ✅ CDN global de Vercel
- ✅ HTTPS automático
- ✅ Compression de assets
- ✅ Cache inteligente

## 🐛 Troubleshooting

### Error en build

Si falla el build en Vercel:
1. Ve a "Deployments" en tu proyecto
2. Haz clic en el deployment fallido
3. Revisa los logs para ver el error
4. Corrige localmente y haz push

### Error de TypeScript

```bash
# Verificar tipos localmente
npm run build
```

## 📚 Recursos

- [Documentación Next.js](https://nextjs.org/docs)
- [Documentación Vercel](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React](https://react.dev)

## 📄 Licencia

Este proyecto es de uso educativo y clínico.

---

**Nota:** Esta herramienta es de apoyo clínico. Siempre consulte con profesionales de la salud para decisiones médicas.
