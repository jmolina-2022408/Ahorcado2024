// Palabras disponibles en el ahorcado
const palabras = [
  "javascript",
  "programacion",
  "informatica",
  "estudiante",
  "profesor",
  "css",
  "html",
  "tecnologia",
  "computadora",
  "teclado",
  "laptop",
  "raton",
  "monitor",
  "sintaxis",
  "colegio",
];

// Palabra aleatoria seleccionada
let palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
palabraSecreta = palabraSecreta.toLowerCase();

// Arreglo para llevar un registro de las letras adivinadas
let letrasAdivinadas = Array(palabraSecreta.length).fill(false);

// Número de vidas restantes
let vidasRestantes = 7;

// Variable para mantener un registro de las letras utilizadas
let letrasUtilizadas = [];

// Elementos del DOM
const lienzo = document.getElementById("lienzo");
const ctx = lienzo.getContext("2d");
const contenedorPalabra = document.getElementById("contenedor-palabra");
const mensaje = document.getElementById("mensaje");
const vidasRestantesElement = document.getElementById("vidas-restantes");
const letrasUtilizadasElement = document.getElementById("letras-utilizadas");

// Función para dibujar el ahorcado
function dibujarAhorcado() {
  ctx.clearRect(0, 0, lienzo.width, lienzo.height);
  if (vidasRestantes < 7) { // Ahorcado
    ctx.beginPath();
    ctx.moveTo(50, 350);
    ctx.lineTo(350, 350);
    ctx.stroke();
  }
  if (vidasRestantes < 7) { // Ahorcado
    ctx.beginPath();
    ctx.moveTo(150, 350);
    ctx.lineTo(150, 100);
    ctx.stroke();
  }
  if (vidasRestantes < 7) { // Ahorcado
    ctx.beginPath();
    ctx.moveTo(150, 100);
    ctx.lineTo(250, 100);
    ctx.stroke();
  }
  if (vidasRestantes < 6) { // Cabeza
    ctx.beginPath();
    ctx.arc(250, 130, 30, 0, Math.PI * 2);
    ctx.stroke();
  }
  if (vidasRestantes < 5) { // Cuerpo
    ctx.moveTo(250, 160);
    ctx.lineTo(250, 260);
    ctx.stroke();
  }
  if (vidasRestantes < 4) { // Brazo izquierdo
    ctx.moveTo(250, 180);
    ctx.lineTo(220, 220);
    ctx.stroke();
  }
  if (vidasRestantes < 3) { // Brazo derecho
    ctx.moveTo(250, 180);
    ctx.lineTo(280, 220);
    ctx.stroke();
  }
  if (vidasRestantes < 2) { // Pierna izquierda
    ctx.moveTo(250, 260);
    ctx.lineTo(220, 300);
    ctx.stroke();
  }
  if (vidasRestantes < 1) { // Pierna derecha
    ctx.moveTo(250, 260);
    ctx.lineTo(280, 300);
    ctx.stroke();
  }
}

// Función para actualizar la palabra adivinada en el DOM
function actualizarPalabra() {
  contenedorPalabra.innerHTML = palabraSecreta
    .split("")
    .map((letra, indice) => (letrasAdivinadas[indice] ? letra : "_"))
    .join(" ");
}

// Inicialización
actualizarPalabra();
dibujarAhorcado();