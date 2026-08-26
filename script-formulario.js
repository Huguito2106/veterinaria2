// Obtener el formulario
const formulario = document.getElementById("formulario");

// Evento cuando se envía el formulario
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const especie = document.getElementById("especie").value;
    const propietario = document.getElementById("propietario").value;

    alert(
        "Mascota registrada correctamente.\n\n" +
        "Mascota: " + nombre + "\n" +
        "Especie: " + especie + "\n" +
        "Propietario: " + propietario
    );

    formulario.reset();
});