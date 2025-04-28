// Lista de imágenes para el header
const headerImages = [
  "https://pbs.twimg.com/media/Ggmha1VWEAAGQbH?format=jpg&name=large",
  "https://agstnrdz.github.io/img/Maserati_1958_header.png"
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

