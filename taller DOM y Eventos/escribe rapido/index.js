
const palabraP = document.getElementById('palabra');
const inputPalabra = document.getElementById('input-palabra');
const resultado = document.getElementById('resultado');


const palabras = ['casa', 'perro', 'computador', 'ventana', 'teclado'];


const palabraElegida = palabras[Math.floor(Math.random() * palabras.length)];


palabraP.textContent = palabraElegida;


inputPalabra.oninput = function () {
  const textoEscrito = inputPalabra.value;


  if (textoEscrito == palabraElegida) {
    resultado.textContent = '¡Correcto!';
  } else {
    resultado.textContent = '';
  }
};