// Lista de imágenes para el header
const headerImages = [
  "https://pbs.twimg.com/media/Ggmha1VWEAAGQbH?format=jpg&name=large",
  "https://agstnrdz.github.io/img/Maserati_1958_header.png",
  "https://agstnrdz.github.io/img/Chubut_img_sat.jpg",
  "https://agstnrdz.github.io/img/Chubut_img_sat_3.jpg"
];
// -----
// Selecciono el elemento img del header
const headerImg = document.querySelector(".header-image img");

let currentImageIndex = 0;

// Función cambiar imagen del header
function changeHeaderImage() {
  // Incrementa el índice y vuelve a 0 si llega al final
  currentImageIndex = (currentImageIndex + 1) % headerImages.length;
  // -----
  // Aplica efecto de fundido (fade)
  headerImg.style.opacity = 0;
  // -----
  // Luego de medio segundo cambia la imagen y vuelve a subir la opacidad
  setTimeout(() => {
    headerImg.src = headerImages[currentImageIndex];
    headerImg.style.opacity = 1;
  }, 500);
}
// -----
// Cambia la imagen cada 10 segundos (10000 milisegundos)
setInterval(changeHeaderImage, 10000);
// -----
// Animación de entrada suave para las tarjetas
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card, .service-card, presentacion-container, presentacion, presentacion-destacada');

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 200); // escalonado cada 200ms
    });
});
// -----
// Relentizar el scroll
let scrollSpeed = 0.2; // ajusta este valor para mayor o menor velocidad

window.addEventListener('wheel', function(e) {
  e.preventDefault();
  window.scrollBy({
    top: e.deltaY * scrollSpeed,
    behavior: 'smooth'
  });
}, { passive: false });
// -----
