const salida = document.getElementById("salida");

function mostrar(titulo, contenido) {
  salida.textContent = `--- ${titulo} ---\n${contenido}`;
}


function experimento1() {
  const porId = document.getElementById("titulo-principal");
  const porQuery = document.querySelector("#titulo-principal");

  mostrar(
    "Experimento 1: elemento específico",
    `getElementById("titulo-principal") -> "${porId.textContent}"\n` +
    `querySelector("#titulo-principal") -> "${porQuery.textContent}"\n` +
    `¿Son el mismo elemento? ${porId === porQuery}`
  );
}


function experimento2() {
  const parrafos = document.getElementsByClassName("texto");
  let lista = "";
  for (let i = 0; i < parrafos.length; i++) {
    lista += `  [${i}] "${parrafos[i].textContent}"\n`;
  }

  mostrar(
    "Experimento 2: varios elementos por clase (.texto)",
    `Cantidad encontrada: ${parrafos.length}\n` + lista +
    `Tipo devuelto: ${parrafos.constructor.name}`
  );
}

function experimento3() {
  const botones = document.getElementsByTagName("button");
  let lista = "";
  for (let i = 0; i < botones.length; i++) {
    lista += `  [${i}] "${botones[i].textContent}"\n`;
  }

  mostrar(
    "Experimento 3: todos los <button> de la página",
    `Cantidad encontrada: ${botones.length}\n` + lista
  );
}

function experimento4() {
  const porAtributo = document.querySelectorAll('img[data-tipo="paisaje"]');
  const porDescendiente = document.querySelectorAll("#parrafos p");
  const porEtiqueta = document.querySelector("h2");

  mostrar(
    "Experimento 4: diferentes selectores CSS",
    `Selector por atributo [data-tipo="paisaje"] -> ${porAtributo.length} imagen(es)\n` +
    `Selector descendiente (#parrafos p) -> ${porDescendiente.length} párrafo(s)\n` +
    `Selector por etiqueta (h2) -> "${porEtiqueta.textContent}"`
  );
}


function experimento5() {
  const botonPeligro = document.querySelector(".btn.btn-peligro");
  const imagenDestacada = document.querySelector("img.imagen.destacada");

  mostrar(
    "Experimento 5: más de una condición a la vez",
    `document.querySelector(".btn.btn-peligro") -> "${botonPeligro.textContent}"\n` +
    `document.querySelector("img.imagen.destacada") -> alt="${imagenDestacada.alt}"`
  );
}