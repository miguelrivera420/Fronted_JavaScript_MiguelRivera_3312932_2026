// Capturar los elementos del DOM
let boton = document.querySelector("#boton");
let titulo = document.getElementById("titulo"); // Sin '#' al usar getElementById

// Escuchar el evento click
boton.addEventListener("click", () => {
    titulo.textContent = "¡El título ha cambiado!";
});