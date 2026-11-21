# Proyecto con Vite

Plantilla y proyecto web moderno configurado con **Vite**, **pnpm** y herramientas de alto rendimiento para desarrollo, formateo, linting y despliegue en **GitHub Pages**.

## Tecnologías y herramientas

- **Bundler y servidor de desarrollo:** [Vite](https://vite.dev/) (puerto `1234`)
- **Gestor de paquetes:** [pnpm](https://pnpm.io/)
- **Procesamiento CSS:** [Lightning CSS](https://lightningcss.dev/) (con soporte para `@custom-media`) y `vite-plugin-standard-css-modules`
- **Calidad de código:** [Oxlint](https://oxc.rs/docs/guide/usage/linter) (linter) y [Oxfmt](https://oxc.rs/docs/guide/usage/formatter) (formateador)
- **Despliegue:** [GitHub Pages](https://pages.github.com/) mediante `gh-pages`

## Estructura del proyecto

```text
proyecto-con-vite/
├── public/
│   └── assets/          # Archivos estáticos servidos sin procesar
├── src/                 # Raíz del proyecto (root en vite.config.js)
│   ├── assets/          # Recursos importados desde JS/CSS
│   ├── index.html       # Punto de entrada HTML
│   ├── index.css        # Estilos principales
│   └── index.js         # Punto de entrada JavaScript
├── dist/                # Build de producción (generado al compilar, ignorado por Git)
├── vite.config.js       # Configuración de Vite, Lightning CSS y rutas base
├── package.json         # Dependencias y scripts del proyecto
├── pnpm-lock.yaml       # Bloqueo exacto de versiones de pnpm
├── pnpm-workspace.yaml  # Configuración del workspace de pnpm
└── .gitignore           # Archivos y carpetas excluidos del repositorio
```

## Cómo empezar

### 1. Instalar dependencias

```bash
pnpm install
```

### 2. Iniciar el servidor de desarrollo

```bash
pnpm dev
```

La aplicación quedará disponible en `http://localhost:1234`.

### 3. Compilar para producción

```bash
pnpm build
```

Genera los archivos optimizados en la carpeta `dist/`.

### 4. Desplegar en GitHub Pages

```bash
pnpm deploy
```

> En producción (`NODE_ENV=production`), `vite.config.js` ajusta automáticamente `base` al nombre del repositorio (`/proyecto-con-vite/`) para que las rutas funcionen correctamente en GitHub Pages.
