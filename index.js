// ---------- Lista de imágenes para el header ---------- //
const headerImages = [
  "https://pbs.twimg.com/media/Ggmha1VWEAAGQbH?format=jpg&name=large",
  "https://agstnrdz.github.io/img/Chubut_img_sat.jpg",
  "https://agstnrdz.github.io/img/Maserati_1958_header.png",
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
// ---------- Animación de entrada suave para las tarjetas ---------- //
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card, .service-card, .presentacion-container, .presentacion, .presentacion-destacada');

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 200); // Escalonado cada 200ms
    });
});
// -----
// ---------- Scroll arrastrando para tarjetas de servicios ---------- //
document.querySelectorAll('.services-container').forEach(container => {
  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('arrastrando');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener('mouseleave', () => {
    isDown = false;
    container.classList.remove('arrastrando');
  });

  container.addEventListener('mouseup', () => {
    isDown = false;
    container.classList.remove('arrastrando');
  });

  container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Ajustá este valor para velocidad
    container.scrollLeft = scrollLeft - walk;
  });
});
// -----
