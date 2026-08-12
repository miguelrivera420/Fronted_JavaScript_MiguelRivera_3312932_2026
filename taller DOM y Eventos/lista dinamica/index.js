
const inputItem = document.getElementById('input-item');
const btnAgregar = document.getElementById('btn-agregar');
const lista = document.getElementById('lista');


btnAgregar.onclick = function () {
  const texto = inputItem.value;


  const item = document.createElement('li');

  item.textContent = texto;

  lista.appendChild(item);
};