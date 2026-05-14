# Design System — Gestor de Datos Georreferenciados
> Guía de estilo y componentes reutilizables para apps internas.

---

## 1. Fundamentos visuales

### Paleta de colores

| Rol | Variable sugerida | Valor |
|---|---|---|
| Fondo general | `--bg` | `#e8eae9` |
| Acento principal | `--accent` | `#006A87` |
| Texto principal | `--text` | `#1b1b1b` |
| Subtexto | `--subtext` | `#454545` |
| Fondo del header | `--header-bg` | `#134768` |
| Texto sobre header | `--header-text` | `#ffffff` |

Declaración CSS recomendada al inicio del `:root`:

```css
:root {
  --bg: #e8eae9;
  --accent: #006A87;
  --text: #1b1b1b;
  --subtext: #454545;
  --header-bg: #134768;
  --header-text: #ffffff;
  --radius: 25px;
  --shadow-out: -31px -31px 43px #FFFFFF, 8px 8px 10px rgba(13,39,80,0.04);
  --shadow-in: inset -23px -23px 40px #FFFFFF, inset 23px 23px 54px rgba(13,39,80,0.04);
}
```

---

### Tipografía

- **Fuente:** Inter (Google Fonts)
- **Íconos:** Material Symbols Outlined (Google Fonts)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">
```

```css
body {
  font-family: 'Inter', sans-serif;
  background-color: var(--bg);
  color: var(--text);
}
```

Escala tipográfica orientativa:

| Uso | Tamaño | Peso |
|---|---|---|
| Título de página (h1) | `1.8rem` | 700 |
| Título de card (h2/h3) | `1.2rem` | 600 |
| Texto de cuerpo | `0.95rem` | 400 |
| Subtexto / metadata | `0.9rem` | 400 |
| Labels pequeños | `0.75rem` | 500 |

---

## 2. Estilo neumórfico

El neumorfismo usa sombras combinadas (clara arriba-izquierda + oscura abajo-derecha) sobre un fondo neutro para simular relieve. Hay dos variantes:

### Outset (elevado — tarjetas, botones)

```css
.card {
  background: var(--bg);
  border-radius: var(--radius);
  box-shadow: var(--shadow-out);
  /* equivalente explícito: */
  box-shadow: -31px -31px 43px #FFFFFF, 8px 8px 10px rgba(13,39,80,0.04);
}
```

### Inset (hundido — inputs, búsqueda, áreas de contenido)

```css
.input-neumorfico {
  background: var(--bg);
  border-radius: var(--radius);
  border: none;
  box-shadow: var(--shadow-in);
  /* equivalente explícito: */
  box-shadow: inset -23px -23px 40px #FFFFFF, inset 23px 23px 54px rgba(13,39,80,0.04);
}
```

### Reglas generales
- El fondo del elemento **debe ser igual** al fondo general (`--bg`). Si son distintos, el efecto no funciona.
- No usar bordes (`border: none` o `border: 1px solid transparent`).
- El `border-radius` estándar es `25px`. Para pills/chips usar `50px` o `999px`.

---

## 3. Layout general

```css
body {
  min-height: 100vh;
  padding: 2rem 1rem;
  box-sizing: border-box;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}
```

El ancho máximo de `1100px` centrado aplica tanto al header como al contenido de cada página.

---

## 4. Componentes

### Header compartido

- Fondo: `#134768`
- Sombra inferior: `0 4px 20px rgba(255,255,255,0.46)`
- Contenido centrado con `.header-inner { max-width: 1100px; margin: 0 auto; }`
- Título + subtítulo: elemento `<a>` que navega al hub (`index.html`), sin subrayado ni cambio visual en hover.
- Logotipo (52px alto): `<a>` que abre el sitio institucional en pestaña nueva.
- Se inyecta en todas las páginas desde un único archivo `assets/js/header.js`.

```js
// header.js — estructura básica del IIFE
(function() {
  const style = `/* CSS del header */`;
  const html = `
    <header>
      <div class="header-inner">
        <a href="https://sitio-institucional.gov.ar" target="_blank">
          <img src="assets/img/logotipo.png" height="52" alt="Logo">
        </a>
        <a href="index.html" class="header-title-link">
          <span class="header-title">Nombre de la app</span>
          <span class="header-subtitle">Subtítulo / área</span>
        </a>
      </div>
    </header>`;
  document.head.insertAdjacentHTML('beforeend', `<style>${style}</style>`);
  document.body.insertAdjacentHTML('afterbegin', html);
})();
```

---

### Tarjetas de módulos (grid de navegación)

```css
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.25rem;
}

.card {
  background: var(--bg);
  border-radius: var(--radius);
  box-shadow: var(--shadow-out);
  padding: 1rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
}

.card:hover {
  box-shadow: -20px -20px 30px #FFFFFF, 5px 5px 8px rgba(13,39,80,0.08);
}

.card .card-icon {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
}

.card .card-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text);
}

.card .card-desc {
  font-size: 0.9rem;
  color: var(--subtext);
}
```

---

### Chips / pills de estado

```css
.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 500;
}

/* Variantes de color */
.chip-verde  { background: #d4edda; color: #155724; }
.chip-azul   { background: #cce5ff; color: #004085; }
.chip-naranja { background: #fff3cd; color: #856404; }
.chip-rojo   { background: #f8d7da; color: #721c24; }
.chip-gris   { background: #e2e3e5; color: #383d41; }
```

---

### Input de búsqueda neumórfico

```css
.search-wrapper {
  max-width: 520px;
  margin: 0 auto 2rem;
}

.search-input {
  width: 100%;
  padding: 0.85rem 1.2rem;
  border: none;
  border-radius: 50px;
  background: var(--bg);
  box-shadow: var(--shadow-in);
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: var(--text);
  outline: none;
  box-sizing: border-box;
}

.search-input::placeholder {
  color: var(--subtext);
}
```

---

### Botón "Volver al inicio"

Presente en todas las páginas secundarias, antes del contenido principal.

```html
<a href="index.html" class="back-link">
  <span class="material-symbols-outlined" style="font-size:18px">arrow_back</span>
  Volver al inicio
</a>
```

```css
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  text-decoration: none;
  color: var(--subtext);
  font-size: 0.9rem;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(10px);
  transition: color 0.2s ease;
}

.back-link.visible {
  opacity: 1;
  transform: translateY(0);
}

.back-link:hover {
  color: var(--accent);
}
```

---

### Barra de progreso animada

Usada en cards de relevamientos. El color varía según el porcentaje.

```html
<div class="progress-bar-bg">
  <div class="progress-bar-fill" style="width: 65%"></div>
</div>
```

```css
.progress-bar-bg {
  background: #d0d3d2;
  border-radius: 999px;
  height: 8px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  border-radius: 999px;
  transition: width 1s ease;
  /* Color según avance — asignar por JS o clase: */
  /* < 30%: #e74c3c | 30–60%: #f39c12 | 60–85%: #006A87 | > 85%: #27ae60 */
}
```

---

## 5. Animaciones de entrada

Todas las secciones y cards entran con una animación de opacidad + desplazamiento vertical, disparada por `IntersectionObserver`.

```css
.animable {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.animable.visible {
  opacity: 1;
  transform: translateY(0);
}
```

```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animable').forEach(el => observer.observe(el));
```

Agregar la clase `.animable` a cualquier elemento que deba entrar animado (cards, títulos, secciones, botón de volver).

---

## 6. Estructura HTML base de una página nueva

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nombre de la página — Gestor Geoestadístico</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">
  <style>
    /* Variables y estilos base aquí */
  </style>
</head>
<body>

  <!-- Header inyectado por JS -->
  <script src="assets/js/header.js"></script>

  <div class="container">

    <a href="index.html" class="back-link animable">
      <span class="material-symbols-outlined" style="font-size:18px">arrow_back</span>
      Volver al inicio
    </a>

    <h1 class="animable">Título de la página</h1>

    <!-- Contenido de la página -->

  </div>

  <script>
    // IntersectionObserver para animaciones
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animable').forEach(el => observer.observe(el));
  </script>

</body>
</html>
```

---

## 7. Convenciones generales

- **Sin frameworks.** HTML + CSS + JS vanilla en todos los casos.
- **Sin fetch() para datos locales.** Si la app se sirve como `file://`, los datos van como variables JS globales en archivos `.js` separados (`const DATA = [...]`).
- **Un archivo por página.** CSS y JS van embebidos en el mismo `.html`, excepto el header compartido y los archivos de datos.
- **Fuentes de datos:** archivos `.xlsx` en carpeta `datos/` (fuera del directorio servido). Se convierten a `.js` con Python + `openpyxl`.
- **Mapa:** Leaflet.js 1.9.4 + OpenStreetMap cuando se requiere visualización geoespacial.
