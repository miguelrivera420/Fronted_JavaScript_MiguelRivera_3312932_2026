const salidaReto = document.getElementById("salida-reto");

function mostrarReto(titulo, contenido) {
  salidaReto.textContent = `--- ${titulo} ---\n${contenido}`;
}

function encontrarEspecifico() {
  const juego2 = document.getElementById("juego-2");
  const nombre = juego2.querySelector(".nombre-juego").textContent;

  mostrarReto(
    "Encontrar un elemento específico",
    `getElementById("juego-2") encontró: "${nombre}"`
  );
}

function encontrarVarios() {
  const juegos = document.querySelectorAll(".juego");
  let lista = "";
  juegos.forEach((juego, i) => {
    const nombre = juego.querySelector(".nombre-juego").textContent;
    lista += `  [${i}] ${nombre}\n`;
  });

  mostrarReto(
    "Encontrar varios elementos",
    `Total de juegos encontrados: ${juegos.length}\n` + lista
  );
}


function encontrarPorClase() {
  const destacados = document.getElementsByClassName("destacado");
  let lista = "";
  for (let i = 0; i < destacados.length; i++) {
    const nombre = destacados[i].querySelector(".nombre-juego").textContent;
    lista += `  [${i}] ${nombre}\n`;
  }

  mostrarReto(
    "Encontrar elementos por clase (.destacado)",
    `Cantidad: ${destacados.length}\n` + lista
  );
}


function encontrarPorEtiqueta() {
  const botones = document.getElementsByTagName("button");

  mostrarReto(
    "Encontrar elementos por etiqueta (button)",
    `Cantidad de botones "Ver detalle" en la página: ${botones.length}`
  );
}


function seleccionEspecifica() {
  const juegoEspecial = document.querySelector('.juego.destacado[data-genero="accion"]');
  const nombre = juegoEspecial
    ? juegoEspecial.querySelector(".nombre-juego").textContent
    : "No se encontró ninguno";

  mostrarReto(
    "Selección con más de una condición",
    `Selector: .juego.destacado[data-genero="accion"]\n` +
    `Resultado: "${nombre}"`
  );
}