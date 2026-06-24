# Viper Garage — Sitio Web

Sitio de marketing estático para **Viper Garage**, taller automotriz ubicado en Querétaro, México.

---

## Perfil del sitio

| Campo | Detalle |
|---|---|
| Negocio | Viper Garage — taller automotriz |
| Ubicación | Prolongación Bernardo Quintana 5006, Puertas del Sol II, Querétaro, QRO 76114 |
| Teléfono | 442 143 9345 |
| Horario | Lun – Sáb · 9:00 a.m. – 6:00 p.m. |
| Calificación | 5.0 ★ · +5,000 reseñas |
| Stack | Next.js 15 (App Router) · Tailwind CSS v4 · TypeScript |
| Hosting | Vercel (generación estática completa) |
| URL producción | https://viper-garage.vercel.app |

### Servicios ofrecidos

1. Afinaciones
2. Frenos
3. Suspensiones
4. Alineación y Balanceo
5. Diagnóstico Computarizado
6. **Servicio Mayor** *(servicio destacado)*

---

## Diagrama del sitio

```
viper-garage.vercel.app/
│
├── /                          ← Home
│   ├── Hero (foto del taller + CTA WhatsApp)
│   ├── Servicios destacados (cards → /servicios/[slug])
│   ├── Calificación y reseñas
│   ├── Social feed (Instagram/Facebook)
│   └── CTA contacto
│
├── /servicios                 ← Catálogo de servicios
│   ├── /servicios/afinaciones
│   ├── /servicios/frenos
│   ├── /servicios/suspension
│   ├── /servicios/alineacion-balanceo
│   ├── /servicios/diagnostico
│   └── /servicios/servicio-mayor
│       └── Cada página: descripción · bullets · FAQ · CTA llamar/WhatsApp
│
├── /blog                      ← Listado de artículos
│   └── /blog/[slug]           ← Artículo individual (Markdown → HTML)
│
├── /nosotros                  ← Historia y valores del taller
│
└── /contacto                  ← Datos de contacto · mapa · horario · links sociales
```

---

## Arquitectura

```
src/
├── app/                       ← Páginas (Next.js App Router)
│   ├── layout.tsx             ← Root layout · fonts · JSON-LD · metadata global
│   ├── page.tsx               ← Home
│   ├── sitemap.ts             ← Sitemap dinámico (servicios + blog)
│   ├── robots.ts
│   ├── servicios/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── nosotros/page.tsx
│   └── contacto/page.tsx
│
├── components/
│   ├── Header.tsx             ← Navegación + menú móvil (Client Component)
│   ├── Footer.tsx
│   ├── ServiceCard.tsx
│   ├── WhatsAppButton.tsx
│   ├── ShareButtons.tsx
│   ├── SocialFeed.tsx
│   ├── StarRating.tsx
│   └── icons/SocialIcons.tsx
│
├── lib/                       ← Capa de datos (sin base de datos)
│   ├── site.ts                ← Fuente única de verdad: teléfono, dirección, horario, redes
│   ├── services.ts            ← 6 servicios con slugs, bullets y FAQs
│   ├── posts.ts               ← Lee .md desde /content/posts/ con gray-matter
│   └── markdown.ts            ← Renderer Markdown → HTML (sin dependencias externas)
│
└── content/
    └── posts/                 ← Artículos del blog en formato Markdown
        └── *.md               ← Front matter: title · date · description · tags
```

---

## Comandos

```bash
npm run dev      # Servidor de desarrollo (http://localhost:3000)
npm run build    # Build de producción
npm run start    # Sirve el build de producción
npm run lint     # Revisión ESLint
```

---

## Diseño

- Tema oscuro con tokens CSS en `src/app/globals.css`
- Color principal: `--color-viper-red` (`#e11d2e`)
- Fuentes: **Orbitron** (display/marca) + **Rajdhani** (cuerpo)
- Sin `tailwind.config.js` — configurado vía PostCSS (Tailwind v4)

## SEO

- JSON-LD `AutoRepair` schema en el layout raíz
- Sitemap dinámico que incluye todos los slugs de servicios y blog
- Cada página define su propio `metadata` export (título, descripción, OpenGraph)
