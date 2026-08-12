
const btnClic = document.getElementById('boton-clic');
const contadorSpan = document.getElementById('contador');


let clics = 0;


btnClic.onclick = function () {
  clics++;
  contadorSpan.textContent = clics;

  
};