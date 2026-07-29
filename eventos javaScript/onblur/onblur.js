const inputTelefono = document.getElementById('telefono');
const mensaje = document.getElementById('mensaje');

inputTelefono.addEventListener('blur', function () {
    const valorIngresado = inputTelefono.value.trim ();

    if(valorIngresado === '') {
        mensaje.textContent = '¡El número de teléfono no puede estar vacío!';
        mensaje.className = 'mensaje error';
        return;
    }

    const esValido = /^[0-9]{8,10}$/.test(valorIngresado);

    if(esValido) {
        mensaje.textContent = '¡Número registrado correctamente!';
        mensaje.className = 'mensaje valido';
    } else {
        mensaje.textContent = 'Por favor ingresa un número de teléfono válido (8 a 10 dígitos)';
        mensaje.className = 'mensaje error';
    }
});