
const inputNumero = document.getElementById('input-numero');
const btnAdivinar = document.getElementById('adivinar');
const resultado = document.getElementById('resultado');


const numeroSecreto = Math.floor(Math.random() * 10) + 1;


btnAdivinar.onclick = function () {
  const numeroIngresado = Number(inputNumero.value);


  if (numeroIngresado == numeroSecreto) {
    resultado.textContent = '¡Correcto! El número era ' + numeroSecreto;
  } else if (numeroIngresado < numeroSecreto) {
    resultado.textContent = 'Muy bajo. Pruebe con un número más alto.';
  } else {
    resultado.textContent = 'Muy alto. Pruebe con un número más bajo.';
  }
};