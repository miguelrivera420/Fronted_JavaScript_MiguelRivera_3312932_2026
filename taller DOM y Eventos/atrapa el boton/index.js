
const btnAtrapa = document.getElementById('btn-atrapa');
const contadorSpan = document.getElementById('contador');


let aciertos = 0;


function moverBoton() {
  const nuevaX = Math.floor(Math.random() * 300);
  const nuevaY = Math.floor(Math.random() * 300);

  btnAtrapa.style.left = nuevaX + 'px';
  btnAtrapa.style.top = nuevaY + 'px';
}


btnAtrapa.onclick = function () {
  aciertos++;


  contadorSpan.textContent = aciertos;


  moverBoton();
};

moverBoton();