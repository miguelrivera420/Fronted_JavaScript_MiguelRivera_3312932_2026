let nombre = document.getElementById ("nombre")
let resultado = document.getElementById("resultado")

nombre.onfocus = function mostrar (){
    resultado.textContent=nombre.value
}
