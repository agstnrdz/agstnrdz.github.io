# CLAUDE.md — Portfolio · Agustín A. Rodríguez

Sitio web de portfolio personal alojado en GitHub Pages (`agstnrdz.github.io`).
HTML + CSS + JS vanilla, sin frameworks ni build steps.

---

## Estructura de archivos

```
portfolio/
├── index.html            ← única página
├── style.css             ← todos los estilos
├── DESIGN_SYSTEM.md      ← referencia completa del sistema de diseño
├── assets/
│   ├── certificados/     ← imágenes de certificados (YYYY_cert_*.jpg)
│   ├── icons/            ← íconos SVG de herramientas (icon-*.svg)
│   └── img/
│       ├── fotoperfil.jpg
│       └── [mapas, fotos de proyectos]
```

`agenda.md` es un cuaderno personal de aprendizaje, no forma parte del sitio.
Los archivos `index.css`, `index.js`, `script.js`, `style.css` (versiones previas en raíz) pueden eliminarse si aparecen huérfanos.

---

## Sistema de diseño (resumen)

Ver detalles completos en `DESIGN_SYSTEM.md`.

**Paleta**

| Variable       | Valor     | Uso                  |
|----------------|-----------|----------------------|
| `--bg`         | `#e8eae9` | Fondo general y cards|
| `--accent`     | `#084f63` | Color de acento      |
| `--text`       | `#1b1b1b` | Texto principal      |
| `--subtext`    | `#454545` | Texto secundario     |
| `--shadow-out` | ver CSS   | Sombra neumórfica outset |
| `--shadow-in`  | ver CSS   | Sombra neumórfica inset  |

**Tipografía:** Inter (texto) + Material Symbols Outlined (íconos).

**Regla neumórfica:** el `background` del elemento debe ser siempre igual a `--bg`. Sin bordes. Border-radius estándar: `22px`; pills/chips: `999px`.

---

## Layout

Dos columnas vía CSS Grid (`.page-wrapper`):

- **Sidebar izquierda** (280px, sticky): foto, nombre, roles, links sociales.
- **Columna derecha** (flex column, gap 1.8rem): cards de sección.

Responsive: colapsa a una sola columna en `≤ 780px`.

---

## Componentes principales

### Secciones (`.card`)
Cada sección es un `<section class="card animable">` con un `.section-title` que incluye un ícono Material Symbols.

### Entradas (`.entry`)
Ítem dentro de una card. Estructura:
```html
<div class="entry">
  <div class="entry-header">
    <span class="entry-title">Título</span>
  </div>
  <span class="entry-org">Organización</span>
  <span class="entry-date">Año</span>
  <p class="entry-desc">Descripción.</p>
  <div class="chip-row">
    <span class="chip chip-azul">Tag</span>
  </div>
</div>
```

### Entrada con certificado (`.entry-with-cert`)
Variante horizontal con miniatura de certificado a la derecha:
```html
<div class="entry entry-with-cert" data-tipo="aprobacion|expositor|participacion">
  <div class="entry-cert-body">
    <!-- entry-header, entry-org, entry-date, entry-desc -->
  </div>
  <a href="assets/certificados/ARCHIVO.jpg" target="_blank" class="entry-cert-thumb">
    <img src="assets/certificados/ARCHIVO.jpg" alt="Certificado">
  </a>
</div>
```
El atributo `data-tipo` lo usan los filtros de la sección Formación.

### Filtros de Formación
Chips en el título de la card `#seccion-formacion`. JS filtra por `data-tipo` en las entradas.
Valores válidos: `todo`, `aprobacion`, `expositor`, `participacion`.

### Chips de color
`.chip-verde` · `.chip-azul` · `.chip-naranja` · `.chip-rojo` · `.chip-gris` · `.chip-amarillo`

### Animación de entrada
Agregar clase `.animable` a cualquier elemento. El JS con `IntersectionObserver` agrega `.visible` al entrar en viewport.

---

## Convenciones de archivos

- **Certificados:** `YYYY_cert_[tipo]_[descripcion].jpg` — sin espacios, sin tildes en el nombre de archivo.
- **Íconos SVG:** `assets/icons/icon-[herramienta].svg`
- **Imágenes generales:** `assets/img/[nombre].jpg|png`
- Todas las rutas en HTML son **relativas** (nunca URLs absolutas a `agstnrdz.github.io`).

---

## Errores conocidos / pendientes

- `style.css` línea ~236: comentario malformado `{ */ tamaño de certificado */` — debería ser `{ /* tamaño de certificado */`.
- Sección "Habilidades" en index.html: el `</div>` de `.skills-grid` queda fuera del `</section>` (indentación incorrecta, no afecta render pero sí semántica).
- Los 3 certificados del HTML viejo sin archivo local (PNUD 2025, teledetección geología 2025, webinario IDERA 2025) fueron removidos. Agregar a `assets/certificados/` cuando estén disponibles y crear el `entry-with-cert` correspondiente.
