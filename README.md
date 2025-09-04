# Kodigo Music (SPA con React + Vite + Tailwind)

Inspirada en Spotify, Deezer y Apple Music. Incluye:

- **SPA** con **React Router** (rutas: `/`, `/browse`, `/library`, `/signup`).
- **Componentes & estado** (Context para el reproductor).
- **Formulario validado** con **react-hook-form**.
- **Diseño responsive** con **TailwindCSS**.
- **Listo para producción** con Vite.


## Requisitos previos
- Node.js 18+ y npm

## Instalación y ejecución
```bash
npm i
npm run dev
```

## Build de producción
```bash
npm run build
npm run preview
```

## Despliegue en Vercel (recomendado)
1. Sube este proyecto a GitHub.
2. En Vercel, **New Project** → importa tu repo.
3. Framework: **Vite** (auto-detectado).
4. **Build Command**: `npm run build`
5. **Output Directory**: `dist`
6. Si usas rutas del lado del cliente, Vercel lo maneja con `Single Page Application` automáticamente.

> Si ves un error como `ENOENT: Could not read package.json`, asegúrate de que el repo contiene `package.json` en la raíz (este proyecto ya lo incluye) y que importaste el repositorio correcto.

## Estructura
```
kodigo-music/
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
├─ vite.config.js
└─ src/
   ├─ App.jsx
   ├─ main.jsx
   ├─ index.css
   ├─ components/
   │  ├─ NavBar.jsx
   │  ├─ PlayerBar.jsx
   │  ├─ Section.jsx
   │  └─ TrackCard.jsx
   ├─ pages/
   │  ├─ Home.jsx
   │  ├─ Browse.jsx
   │  ├─ Library.jsx
   │  └─ Signup.jsx
   ├─ context/
   │  └─ PlayerContext.jsx
   └─ data/
      └─ tracks.js
```

## Personalización rápida
- Cambia colores en `tailwind.config.js` (objeto `brand`).
- Edita datos de demo en `src/data/tracks.js`.
- Agrega nuevas rutas en `src/App.jsx`.

¡Éxitos con tu entrega! 🎧
