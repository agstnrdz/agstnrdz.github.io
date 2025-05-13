// ----------------------------------------------------------------------------------------------------
//
// --------------------------------- Lista de imágenes para el header ---------------------------------
const headerImages = [
  "https://pbs.twimg.com/media/Ggmha1VWEAAGQbH?format=jpg&name=large",
  "https://agstnrdz.github.io/img/Chubut_img_sat.jpg",
  "https://agstnrdz.github.io/img/Maserati_1958_header.png",
  "https://agstnrdz.github.io/img/Chubut_img_sat_3.jpg"
];
// ----- imagen SAT extra: "https://media.licdn.com/dms/image/v2/D4E16AQEE0cx3afJ25A/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1732057416417?e=1752710400&v=beta&t=FOP1dqBTyWNgWyi6qox_LVXS60VmpKV5j4o_im2KRIg"
// -----
// Selecciono el elemento img del header
const headerImg = document.querySelector(".header-image img");

let currentImageIndex = 0;

// Función cambiar imagen del header
function changeHeaderImage() {
  // Incrementa el índice y vuelve a 0 si llega al final
  currentImageIndex = (currentImageIndex + 1) % headerImages.length;
  // Aplica efecto de fundido (fade)
  headerImg.style.opacity = 0;
  // Luego de medio segundo cambia la imagen y vuelve a subir la opacidad
  setTimeout(() => {
    headerImg.src = headerImages[currentImageIndex];
    headerImg.style.opacity = 1;
  }, 500);
}
// Cambia la imagen cada 10 segundos (10000 milisegundos)
setInterval(changeHeaderImage, 10000);
// -----
// ----------------------------------------------------------------------------------------------------
//
// --------------------------- Animación de entrada suave para las tarjetas ---------------------------
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card, .service-card, .presentacion-container, .presentacion, .presentacion-destacada');

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 200); // Escalonado cada 200ms
    });
});
// -----
// ----------------------------------------------------------------------------------------------------
//
// ----------------------------------- Scripts presentación dinámica -----------------------------------
const container = document.getElementById("presentacionContainer");
const fraseEl = document.getElementById("frase");

const frases = [
  `Analista de<br>
  <span class="presentacion-burbuja">Sistemas de Información Geográfica</span><br>
  en Dirección General de Modernización<br>
  e Investigación Territorial`,

  `Auxiliar de cátedra en<br>
  <span class="presentacion-burbuja">Teledetección II</span><br>
  Universidad Nacional de la Patagonia<br>
  San Juan Bosco`
];

let index = 0;

function cambiarFrase() {
  container.classList.add("ocultar");

  setTimeout(() => {
    index = (index + 1) % frases.length;
    fraseEl.innerHTML = frases[index];

    // Rebote a burbujas nuevas
    const burbujas = fraseEl.querySelectorAll(".presentacion-burbuja");
    burbujas.forEach(el => {
      el.classList.remove("rebote");
      void el.offsetWidth;
      el.classList.add("rebote");
    });

    container.classList.remove("ocultar");
  }, 500);
}

setInterval(cambiarFrase, 5000);
// -----
// ----------------------------------------------------------------------------------------------------
//
// --------------------------- Scroll arrastrando para tarjetas de servicios --------------------------
const slider = document.getElementById('services-scroll');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('arrastrando');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('arrastrando');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('arrastrando');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX); // sensibilidad
  slider.scrollLeft = scrollLeft - walk;
});
// -----
