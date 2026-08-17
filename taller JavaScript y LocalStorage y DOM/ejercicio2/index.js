
const CLAVE_STORAGE = "departamentos";


const formulario = document.getElementById("form-departamento");
const btnVer = document.getElementById("btn-ver");
const mensaje = document.getElementById("mensaje");
const cuerpoTabla = document.getElementById("cuerpo-tabla");

//
function obtenerDepartamentos() {
  const datosGuardados = localStorage.getItem(CLAVE_STORAGE);

  if (!datosGuardados) {
    return [];
  }

  return JSON.parse(datosGuardados);
}

//
function guardarDepartamentos(arregloDepartamentos) {
  const textoJSON = JSON.stringify(arregloDepartamentos);
  localStorage.setItem(CLAVE_STORAGE, textoJSON);
}

function manejarEnvioFormulario(evento) {

  evento.preventDefault();

  //
  const nuevoDepartamento = {
    nombre: document.getElementById("nombre").value.trim(),
    responsable: document.getElementById("responsable").value.trim(),
    empleados: Number(document.getElementById("empleados").value),
    ubicacion: document.getElementById("ubicacion").value.trim(),
    imagen: document.getElementById("imagen").value.trim()
  };

  //
  const departamentos = obtenerDepartamentos(); 
  departamentos.push(nuevoDepartamento);         
  guardarDepartamentos(departamentos);           

  formulario.reset();
  mensaje.textContent = `"${nuevoDepartamento.nombre}" se guardó correctamente.`;
}

formulario.onsubmit = manejarEnvioFormulario;


//
function crearFilaDepartamento(departamento) {
  const fila = document.createElement("tr");


  const celdaImagen = document.createElement("td");
  const img = document.createElement("img");
  img.className = "imagen-departamento";
  img.src = departamento.imagen;
  img.alt = `Imagen de ${departamento.nombre}`;
  celdaImagen.appendChild(img);


  const celdaNombre = document.createElement("td");
  celdaNombre.textContent = departamento.nombre;


  const celdaResponsable = document.createElement("td");
  celdaResponsable.textContent = departamento.responsable;


  const celdaEmpleados = document.createElement("td");
  celdaEmpleados.textContent = departamento.empleados;


  const celdaUbicacion = document.createElement("td");
  celdaUbicacion.textContent = departamento.ubicacion;

  fila.appendChild(celdaImagen);
  fila.appendChild(celdaNombre);
  fila.appendChild(celdaResponsable);
  fila.appendChild(celdaEmpleados);
  fila.appendChild(celdaUbicacion);

  return fila;
}


function manejarClicVerDepartamentos() {
  const departamentos = obtenerDepartamentos();


  cuerpoTabla.innerHTML = "";

  if (departamentos.length === 0) {
    const filaVacia = document.createElement("tr");
    filaVacia.className = "fila-vacia";

    const celdaVacia = document.createElement("td");
    celdaVacia.colSpan = 5;
    celdaVacia.textContent = "Todavía no hay departamentos guardados.";

    filaVacia.appendChild(celdaVacia);
    cuerpoTabla.appendChild(filaVacia);
    return;
  }

  departamentos.forEach(function (departamento) {
    const fila = crearFilaDepartamento(departamento);
    cuerpoTabla.appendChild(fila);
  });
}

btnVer.onclick = manejarClicVerDepartamentos;