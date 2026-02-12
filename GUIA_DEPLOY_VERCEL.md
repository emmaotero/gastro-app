# 🚀 GUÍA PASO A PASO: DEPLOY EN VERCEL

## 📋 Tabla de Contenidos

1. [Preparación Inicial](#1-preparación-inicial)
2. [Crear Cuenta en Vercel](#2-crear-cuenta-en-vercel)
3. [Subir Código a GitHub](#3-subir-código-a-github)
4. [Conectar GitHub con Vercel](#4-conectar-github-con-vercel)
5. [Configurar y Desplegar](#5-configurar-y-desplegar)
6. [Verificar Despliegue](#6-verificar-despliegue)
7. [Actualizaciones Futuras](#7-actualizaciones-futuras)

---

## 1. PREPARACIÓN INICIAL

### ✅ Verificar que tienes instalado:

```bash
# Verificar Node.js (debe ser 18 o superior)
node --version
# Debería mostrar: v18.x.x o superior

# Verificar npm
npm --version
# Debería mostrar: 9.x.x o superior

# Verificar Git
git --version
# Debería mostrar: git version 2.x.x
```

Si NO tienes alguno instalado:
- **Node.js**: Descarga desde https://nodejs.org (versión LTS)
- **Git**: Descarga desde https://git-scm.com/downloads

---

## 2. CREAR CUENTA EN VERCEL

### Paso 2.1: Ir a Vercel

1. Abre tu navegador
2. Ve a: **https://vercel.com**
3. Haz clic en **"Sign Up"** (esquina superior derecha)

### Paso 2.2: Registrarse con GitHub

1. Haz clic en **"Continue with GitHub"**
2. Si no tienes cuenta de GitHub:
   - Ve a https://github.com
   - Crea una cuenta gratuita
   - Regresa a Vercel
3. Autoriza a Vercel para acceder a tu GitHub

✅ **¡Listo!** Ya tienes cuenta en Vercel

---

## 3. SUBIR CÓDIGO A GITHUB

### Paso 3.1: Crear repositorio en GitHub

1. Ve a https://github.com
2. Haz clic en el botón **"+"** (esquina superior derecha)
3. Selecciona **"New repository"**
4. Configura:
   - **Repository name**: `gastro-app`
   - **Description**: "Aplicación de gastroenterología"
   - **Visibility**: Public (o Private si prefieres)
   - ⚠️ **NO marques** "Initialize this repository with a README"
5. Haz clic en **"Create repository"**

### Paso 3.2: Conectar tu código local con GitHub

Abre tu terminal en la carpeta del proyecto:

```bash
# Ir a la carpeta del proyecto
cd ruta/a/gastro-app

# Inicializar Git (si no está inicializado)
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Initial commit - Gastro App Next.js"

# Conectar con el repositorio remoto
# (Reemplaza TU-USUARIO con tu nombre de usuario de GitHub)
git remote add origin https://github.com/TU-USUARIO/gastro-app.git

# Renombrar la rama a 'main'
git branch -M main

# Subir el código
git push -u origin main
```

**Ejemplo real:**
```bash
# Si tu usuario es "juanperez"
git remote add origin https://github.com/juanperez/gastro-app.git
```

### Paso 3.3: Verificar que se subió correctamente

1. Ve a tu repositorio en GitHub: `https://github.com/TU-USUARIO/gastro-app`
2. Deberías ver todos tus archivos listados

✅ **¡Código en GitHub listo!**

---

## 4. CONECTAR GITHUB CON VERCEL

### Paso 4.1: Importar proyecto

1. Ve a https://vercel.com/dashboard
2. Haz clic en **"Add New..."** (botón azul)
3. Selecciona **"Project"**

### Paso 4.2: Seleccionar repositorio

1. En la sección "Import Git Repository"
2. Busca `gastro-app` en la lista
3. Si NO aparece:
   - Haz clic en **"Adjust GitHub App Permissions"**
   - Autoriza acceso al repositorio
   - Regresa y refresca la página
4. Haz clic en **"Import"** junto a `gastro-app`

---

## 5. CONFIGURAR Y DESPLEGAR

### Paso 5.1: Configuración del proyecto

Vercel detectará automáticamente que es Next.js. Verifica:

```
Framework Preset: Next.js ✅ (detectado automáticamente)
Root Directory: ./ ✅
Build Command: npm run build ✅
Output Directory: .next ✅
Install Command: npm install ✅
```

**NO CAMBIES NADA** - Todo está correcto por defecto

### Paso 5.2: Variables de entorno (Opcional)

Si tu app necesita variables de entorno:

1. Haz clic en **"Environment Variables"**
2. Agrega las variables necesarias:
   - **Key**: Nombre de la variable (ej: `DATABASE_URL`)
   - **Value**: El valor
   - **Environment**: Production, Preview, Development (o todos)
3. Haz clic en **"Add"**

Para esta app básica, **NO necesitas variables de entorno**.

### Paso 5.3: ¡DEPLOY! 🚀

1. Haz clic en el botón **"Deploy"** (azul, grande)
2. Espera... Vercel hará:
   - ⏳ Installing dependencies (1-2 min)
   - ⏳ Building application (1-2 min)
   - ⏳ Deploying to production (30 seg)

### Lo que verás en pantalla:

```
Building...
▲ Vercel
└─ Installing dependencies...
   npm install
   ✓ Installed packages
└─ Building...
   npm run build
   ✓ Compiled successfully
└─ Deploying...
   ✓ Deployment ready
```

---

## 6. VERIFICAR DESPLIEGUE

### Paso 6.1: Obtener URL

Una vez completado el deploy:

1. Verás un mensaje: **"Congratulations! Your project has been deployed"** 🎉
2. Verás la URL de tu app, algo como:
   ```
   https://gastro-app-tu-usuario.vercel.app
   ```
3. Haz clic en **"Visit"** o copia la URL

### Paso 6.2: Probar la aplicación

1. Abre la URL en tu navegador
2. Deberías ver:
   - ✅ Header "Gastro App"
   - ✅ Tabs de navegación
   - ✅ Sección de bienvenida con 3 tarjetas
   - ✅ Calculadora de IMC funcionando

### Paso 6.3: Configurar dominio personalizado (Opcional)

Si quieres usar tu propio dominio:

1. En el Dashboard de Vercel, ve a tu proyecto
2. Click en **"Settings"** → **"Domains"**
3. Ingresa tu dominio (ej: `gastroapp.com`)
4. Sigue las instrucciones para configurar DNS

---

## 7. ACTUALIZACIONES FUTURAS

### Cada vez que quieras actualizar la app:

```bash
# 1. Hacer cambios en tu código local
# 2. Guardar todos los archivos

# 3. Agregar cambios a Git
git add .

# 4. Hacer commit con descripción
git commit -m "Agregada calculadora de Child-Pugh"

# 5. Subir cambios
git push
```

**¡Y ESO ES TODO!** Vercel detectará automáticamente:
- El push a GitHub
- Construirá la nueva versión
- La desplegará automáticamente
- Te enviará un email de confirmación

### Ver el progreso del deploy:

1. Ve a https://vercel.com/dashboard
2. Haz clic en tu proyecto `gastro-app`
3. Verás la lista de **"Deployments"**
4. El último deploy mostrará el estado:
   - 🔄 Building... (en progreso)
   - ✅ Ready (completado)
   - ❌ Failed (falló - revisa los logs)

---

## 🎯 RESUMEN EJECUTIVO

```
1. Crear cuenta Vercel → 2 min
2. Subir código a GitHub → 5 min
3. Conectar GitHub con Vercel → 2 min
4. Deploy automático → 3 min
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOTAL: ~12 minutos ✅
```

---

## ⚠️ SOLUCIÓN DE PROBLEMAS COMUNES

### Error: "Build failed"

**Solución:**
```bash
# Prueba el build localmente primero
cd gastro-app
npm install
npm run build

# Si funciona localmente, haz push de nuevo
git add .
git commit -m "Fix build"
git push
```

### Error: "Module not found"

**Causa:** Falta una dependencia en package.json

**Solución:**
```bash
# Instalar la dependencia faltante
npm install nombre-del-paquete

# Actualizar package.json
git add package.json package-lock.json
git commit -m "Add missing dependency"
git push
```

### Error: "Permission denied (GitHub)"

**Solución:**
```bash
# Configurar credenciales de GitHub
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# Si sigue fallando, usa autenticación con token
# Genera un token en: GitHub Settings → Developer settings → Personal access tokens
```

### La app se ve diferente en producción

**Causa:** Caché del navegador

**Solución:**
- Presiona `Ctrl + Shift + R` (Windows/Linux)
- Presiona `Cmd + Shift + R` (Mac)
- O abre en modo incógnito

---

## 📞 RECURSOS DE AYUDA

- **Documentación Vercel**: https://vercel.com/docs
- **Soporte Vercel**: support@vercel.com
- **Comunidad**: https://github.com/vercel/vercel/discussions
- **Status Page**: https://www.vercel-status.com/

---

## ✅ CHECKLIST FINAL

Antes de considerar el deploy completo, verifica:

- [ ] La app carga correctamente en la URL de Vercel
- [ ] Todas las funcionalidades funcionan (calculadora, navegación, etc.)
- [ ] Los estilos se ven correctos
- [ ] La app es responsive (prueba en móvil)
- [ ] No hay errores en la consola del navegador (F12)
- [ ] El README.md tiene información correcta
- [ ] Has probado hacer un cambio y actualizarlo con git push

---

**🎉 ¡FELICITACIONES! Tu app está en producción.**

Ahora puedes compartir la URL con quien quieras:
```
https://gastro-app-tu-usuario.vercel.app
```
