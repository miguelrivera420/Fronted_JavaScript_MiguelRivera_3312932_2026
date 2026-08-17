
const CLAVE_STORAGE = "animales";

const formulario = document.getElementById("form-animal");
const btnMostrar = document.getElementById("btn-mostrar");
const mensaje = document.getElementById("mensaje");
const contenedorLista = document.getElementById("lista-animales");

//
function obtenerAnimales() {
  const datosGuardados = localStorage.getItem(CLAVE_STORAGE);


  if (!datosGuardados) {
    return [];
  }

  return JSON.parse(datosGuardados);
}

//
function guardarAnimales(arregloAnimales) {
  const textoJSON = JSON.stringify(arregloAnimales);
  localStorage.setItem(CLAVE_STORAGE, textoJSON);
}

function manejarEnvioFormulario(evento) {

  evento.preventDefault();

  //
  const nuevoAnimal = {
    nombre: document.getElementById("nombre").value,
    especie: document.getElementById("especie").value,
    
    edad: Number(document.getElementById("edad").value),
    habitat: document.getElementById("habitat").value,
    imagen: document.getElementById("imagen").value
  };

  const animales = obtenerAnimales();
  animales.push(nuevoAnimal); 
  guardarAnimales(animales);

  formulario.reset();
  mensaje.textContent = `"${nuevoAnimal.nombre}" se guardó correctamente.`;
}

formulario.onsubmit = manejarEnvioFormulario;


//
function crearTarjetaAnimal(animal) {
  const tarjeta = document.createElement("article");
  tarjeta.className = "animal-card";

  const imagen = document.createElement("img");
  imagen.className = "animal-card__imagen";
  imagen.src = animal.imagen;
  imagen.alt = `Imagen de ${animal.nombre}`;

  const info = document.createElement("div");
  info.className = "animal-card__info";

  const nombre = document.createElement("h3");
  nombre.className = "animal-card__nombre";
  nombre.textContent = animal.nombre;

  const especie = document.createElement("p");
  especie.className = "animal-card__dato";
  especie.innerHTML = `<strong>Especie:</strong> ${animal.especie}`;

  const edad = document.createElement("p");
  edad.className = "animal-card__dato";
  edad.innerHTML = `<strong>Edad:</strong> ${animal.edad}`;

  const habitat = document.createElement("p");
  habitat.className = "animal-card__dato";
  habitat.innerHTML = `<strong>Hábitat:</strong> ${animal.habitat}`;


  info.appendChild(nombre);
  info.appendChild(especie);
  info.appendChild(edad);
  info.appendChild(habitat);

  tarjeta.appendChild(imagen);
  tarjeta.appendChild(info);

  return tarjeta;
}

function manejarClicMostrarAnimales() {
  const animales = obtenerAnimales();

  contenedorLista.innerHTML = "";

  if (animales.length === 0) {
    const textoVacio = document.createElement("p");
    textoVacio.className = "vacio";
    textoVacio.textContent = "Todavía no hay animales guardados.";
    contenedorLista.appendChild(textoVacio);
    return;
  }

  animales.forEach(function (animal) {
    const tarjeta = crearTarjetaAnimal(animal);
    contenedorLista.appendChild(tarjeta);
  });
}

btnMostrar.onclick = manejarClicMostrarAnimales;