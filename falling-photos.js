// Lluvia de fotos (cambia los nombres por tus propias imágenes en /img)
const fotos = [
    "img/hilda1.jpg",
    "img/hilda2.jpg",
    "img/hilda3.jpg",
    "img/hilda4.jpg",
    "img/hilda5.jpg",
    "img/hilda6.jpg",
    "img/hilda7.jpg",
    "img/hilda8.jpg",
    "img/hilda9.jpg",
    "img/hilda10.jpg",
    "img/hilda11.jpg",
    "img/hilda12.jpg"

    // Puedes agregar más rutas
  ];
  
  const contenedor = document.getElementById("fotoRainContainer");
  
  // Configuración personalizable
  const intervaloSpawn = 2400; // ms entre fotos nuevas
  const duracionMin = 11000;   // ms duración mínima de caída
  const duracionMax = 18000;   // ms duración máxima
  const tamañoMin = 90;        // px ancho mínimo
  const tamañoMax = 160;       // px ancho máximo
  const rotacionMax = 25;      // grados máximo de giro
  
  function nuevaFoto() {
    const div = document.createElement("div");
    div.className = "foto-drop";
  
    const src = fotos[Math.floor(Math.random() * fotos.length)];
    div.style.backgroundImage = `url('${src}')`;
  
    // Tamaño aleatorio
    const w = tamañoMin + Math.random() * (tamañoMax - tamañoMin);
    const h = w * 1.25;
    div.style.width = w + "px";
    div.style.height = h + "px";
  
    // Posición horizontal
    const x = Math.random() * window.innerWidth;
    div.style.left = x + "px";
  
    // Variables para animación
    div.style.setProperty("--dur", (duracionMin + Math.random() * (duracionMax - duracionMin)) + "ms");
    div.style.setProperty("--offsetX", (Math.random() * 40 - 20) + "px");
    div.style.setProperty("--rot", (Math.random() * rotacionMax * (Math.random() > 0.5 ? 1 : -1)) + "deg");
  
    div.addEventListener("animationend", () => div.remove());
  
    contenedor.appendChild(div);
  }
  
  // Iniciar lluvia de fotos
  setInterval(nuevaFoto, intervaloSpawn);
  
  // Crear algunas iniciales rápido
  for (let i = 0; i < 5; i++) {
    setTimeout(nuevaFoto, i * 500);
  }