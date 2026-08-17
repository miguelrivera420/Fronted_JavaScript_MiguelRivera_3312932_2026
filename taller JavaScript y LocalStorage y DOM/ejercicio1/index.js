
const CLAVE_STORAGE = "paises";


const formulario = document.getElementById("form-pais");
const btnVer = document.getElementById("btn-ver");
const mensaje = document.getElementById("mensaje");
const contenedorLista = document.getElementById("lista-paises");


//
function obtenerPaises() {
  const datosGuardados = localStorage.getItem(CLAVE_STORAGE);


  if (!datosGuardados) {
    return [];
  }

  return JSON.parse(datosGuardados);
}

//
function guardarPaises(arregloPaises) {
  const textoJSON = JSON.stringify(arregloPaises);
  localStorage.setItem(CLAVE_STORAGE, textoJSON);
}


function manejarEnvioFormulario(evento) {

  
  const nuevoPais = {
    nombre: document.getElementById("nombre").value.trim(),
    capital: document.getElementById("capital").value.trim(),
    continente: document.getElementById("continente").value,
    idioma: document.getElementById("idioma").value.trim(),
    bandera: document.getElementById("bandera").value.trim()
  };


  const paises = obtenerPaises(); 
  paises.push(nuevoPais);         
  guardarPaises(paises);          

  formulario.reset();
  mensaje.textContent = `"${nuevoPais.nombre}" se guardó correctamente.`;
}


formulario.onsubmit = manejarEnvioFormulario;

//
function crearTarjetaPais(pais) {
  const tarjeta = document.createElement("article");
  tarjeta.className = "pais-card";

  const imgBandera = document.createElement("img");
  imgBandera.className = "pais-card__bandera";
  imgBandera.src = pais.bandera;
  imgBandera.alt = `Bandera de ${pais.nombre}`;

  const info = document.createElement("div");
  info.className = "pais-card__info";

  const nombre = document.createElement("h3");
  nombre.className = "pais-card__nombre";
  nombre.textContent = pais.nombre;

  const capital = document.createElement("p");
  capital.className = "pais-card__dato";
  capital.innerHTML = `<strong>Capital:</strong> ${pais.capital}`;

  const continente = document.createElement("p");
  continente.className = "pais-card__dato";
  continente.innerHTML = `<strong>Continente:</strong> ${pais.continente}`;

  const idioma = document.createElement("p");
  idioma.className = "pais-card__dato";
  idioma.innerHTML = `<strong>Idioma:</strong> ${pais.idioma}`;


  info.appendChild(nombre);
  info.appendChild(capital);
  info.appendChild(continente);
  info.appendChild(idioma);

  tarjeta.appendChild(imgBandera);
  tarjeta.appendChild(info);

  return tarjeta;
}


function manejarClicVerPaises() {
  const paises = obtenerPaises();

  contenedorLista.innerHTML = "";

  if (paises.length === 0) {
    const textoVacio = document.createElement("p");
    textoVacio.className = "vacio";
    textoVacio.textContent = "Todavía no hay países guardados.";
    contenedorLista.appendChild(textoVacio);
    return;
  }

  paises.forEach(function (pais) {
    const tarjeta = crearTarjetaPais(pais);
    contenedorLista.appendChild(tarjeta);
  });
}


btnVer.onclick = manejarClicVerPaises;