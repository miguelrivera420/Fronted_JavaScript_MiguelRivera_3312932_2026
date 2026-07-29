function mostrar(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let resultado = nombre + " " + apellido;

    alert("El nombre completo es: " + resultado);
}