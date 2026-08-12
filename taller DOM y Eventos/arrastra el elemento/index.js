
const cuadro = document.getElementById('cuadro');

let arrastrando = false;


cuadro.onmousedown = function () {
  arrastrando = true;
};


document.onmousemove = function (evento) {

  if (!arrastrando) return;


  cuadro.style.left = evento.clientX + 'px';
  cuadro.style.top = evento.clientY + 'px';
};


document.onmouseup = function () {
  arrastrando = false;
};