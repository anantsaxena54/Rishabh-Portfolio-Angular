# Rishabh Sahu — Cinematographer Portfolio

Cinematic single-page portfolio built with **Angular 18** (standalone components, signals, OnPush) and **Three.js r168** for WebGL visuals. Dark, filmic aesthetic with burnt cinnabar and tungsten amber accents.

## Quick start

```bash
# Install
npm install

# Dev server (localhost:4200)
npm start

# Production build → dist/rishabh-portfolio
npm run build
```

Requires Node.js 18.19+ and npm 10+.

## Project structure

```
src/
├── app/
│   ├── app.component.ts              # Root shell — composes everything
│   ├── app.config.ts                 # Bootstrap config
│   │
│   ├── components/
│   │   ├── navbar/                   # Sticky nav with blur, live clock, scroll state
│   │   ├── loader/                   # Letter-by-letter intro with progress bar
│   │   ├── cursor/                   # Custom dot + lagging ring (desktop only)
│   │   └── three-scene/              # Persistent WebGL background field
│   │
│   ├── sections/
│   │   ├── hero/                     # Shader background + 3D cinema camera + title
│   │   ├── skills/                   # Film-reel visual + 6 discipline cards
│   │   ├── experience/               # Hover-reveal timeline
│   │   ├── work/                     # Draggable gallery, filters, 3D card tilt
│   │   ├── brands/                   # 56-cell grid with hover wipe
│   │   └── contact/                  # Orbital SVG + channel links
│   │
│   └── core/
│       ├── models/portfolio.models.ts
│       └── data/portfolio.data.ts    # All seed content + SVG thumbnails
│
├── styles.scss                       # Global CSS vars, grain, vignette, reset
├── index.html                        # Loads Fraunces + JetBrains Mono
└── main.ts                           # Bootstrap entry
```

## Visual systems

| System | Tech | Location |
|---|---|---|
| Background field (shards + particles) | Three.js | `components/three-scene` |
| Hero shader (cinematic noise) | Three.js, GLSL | `sections/hero` |
| Floating cinema camera | Three.js | `sections/hero` |
| Film-reel animation | CSS + SVG | `sections/skills` |
| Gallery 3D tilt | CSS transforms | `sections/work` |
| Contact orb | SVG + CSS | `sections/contact` |
| Grain overlay | CSS + inline SVG | `styles.scss` |

Only **3 concurrent WebGL contexts** (background, hero shader, hero camera) — well under browser limits. Everything else uses CSS/SVG for rock-solid rendering.

## Customizing content

All copy, projects, skills, experience, and brands live in `src/app/core/data/portfolio.data.ts`. Edit there; no templates need touching.

### Replacing project thumbnails

The `PROJECTS` array uses `svgThumb()` to generate reliable inline SVG backgrounds. To use real images, replace the `img` field:

```ts
{ title: 'Ocean', cat: 'cine', brand: 'Virat Kohli × One8',
  img: 'https://res.cloudinary.com/your-cloud/video/upload/so_0/ocean.jpg' },
```

Patterns available: `lens`, `grid`, `bars`, `wave`, `frame`, `strip`, `blur`.

## Angular conventions used

- **Standalone components** throughout — no NgModules
- **Signals** (`signal`, `computed`) for reactive state
- **OnPush** change detection on every component
- **New control flow** (`@for`, `@if`) instead of structural directives
- **viewChild** signal-based queries
- **NgZone.runOutsideAngular** for animation loops (Three.js, drag, cursor) — no change detection per frame
- **Strict templates** and strict TypeScript

## Performance notes

- All WebGL renderers cap pixel ratio at 1.5–2.0
- All listeners (mousemove, scroll, resize) run outside Angular zone
- `@for` uses `track` on stable keys
- Full Three.js disposal in `ngOnDestroy` (geometry, material, renderer)
- Custom cursor re-attaches via `MutationObserver` when gallery re-renders

## Credits

**Subject:** Rishabh Sahu — cinematographer, editor, VFX artist
riishabh20@gmail.com · +91 74708 70983 · Instagram: @rishabh_.8

**Fonts:** Fraunces (display) + JetBrains Mono (UI labels)

**Built with:** Angular 18, Three.js r168, TypeScript strict mode, SCSS
