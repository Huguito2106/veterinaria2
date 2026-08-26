
document.addEventListener('DOMContentLoaded', () => {
    restringirFechasPasadas();
    cargarCitas();
});
// LÓGICA DE MODO OSCURO (COMPARTIDA)
    document.addEventListener('DOMContentLoaded', () => {
        crearBotonModoOscuro();
// Evita la selección de horarios que ya pasaron
function restringirFechasPasadas() {
    const inputFecha = document.getElementById('fechaHora');
    const ahora = new Date();
    const año = ahora.getFullYear();
    const mes = String(ahora.getMonth() + 1).padStart(2, '0');
    const dia = String(ahora.getDate()).padStart(2, '0');
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    
    inputFecha.min = `${año}-${mes}-${dia}T${horas}:${minutos}`;
}

// Captura del envío del formulario
document.getElementById('formCita').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nuevaCita = {
        id: Date.now(), // Identificador único para poder eliminarla después
        mascota: document.getElementById('mascota').value,
        tipo: document.getElementById('tipo').value,
        fechaHora: document.getElementById('fechaHora').value,
        motivo: document.getElementById('motivo').value || 'No especificado'
    };

    guardarCitaEnStorage(nuevaCita);
    this.reset();
    restringirFechasPasadas(); // Resetea la restricción de fecha mínima
});

function crearBotonModoOscuro() {
    const boton = document.createElement('button');
    boton.className = 'btn-dark-mode';
    boton.innerHTML = localStorage.getItem('theme') === 'dark' ? '☀️' : '🌙';
    document.body.appendChild(boton);

    if(localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    boton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const esOscuro = document.body.classList.contains('dark-mode');
        boton.innerHTML = esOscuro ? '☀️' : '🌙';
        localStorage.setItem('theme', esOscuro ? 'dark' : 'light');
    });
}


// Guarda la información en LocalStorage
function guardarCitaEnStorage(cita) {
    let citas = JSON.parse(localStorage.getItem('citas')) || [];
    citas.unshift(cita); // Añade al inicio de la lista
    localStorage.setItem('citas', JSON.stringify(citas));
    cargarCitas();
}

// Renderiza las citas guardadas en la interfaz de usuario
function cargarCitas() {
    const listaCitas = document.getElementById('listaCitas');
    const citas = JSON.parse(localStorage.getItem('citas')) || [];
    
    if (citas.length === 0) {
        listaCitas.innerHTML = '<p class="sin-citas">No hay citas registradas por el momento.</p>';
        return;
    }
    
    listaCitas.innerHTML = ''; // Limpia el contenedor
    
    citas.forEach(cita => {
        const fechaFormateada = new Date(cita.fechaHora).toLocaleString('es-ES', {
            dateStyle: 'long',
            timeStyle: 'short'
        });

        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta-cita');
        tarjeta.innerHTML = `
            <div class="info-cita">
                <h3>🐾 ${cita.mascota} (${cita.tipo.toUpperCase()})</h3>
                <p><strong>📅 Fecha:</strong> ${fechaFormateada}</p>
                <p><strong>📝 Motivo:</strong> ${cita.motivo}</p>
            </div>
            <button class="btn-eliminar" onclick="eliminarCita(${cita.id})">Cancelar</button>
        `;
        listaCitas.appendChild(tarjeta);
    });
}

// Elimina un elemento por su ID único
window.eliminarCita = function(id) {
    let citas = JSON.parse(localStorage.getItem('citas')) || [];
    citas = citas.filter(cita => cita.id !== id);
    localStorage.setItem('citas', JSON.stringify(citas));
    cargarCitas();
};
=======
document.getElementById('formCita').addEventListener('submit', function(event) {
    // Evita que la página se recargue al enviar el formulario
    event.preventDefault();
    
    // Captura de los valores de los campos
    const mascota = document.getElementById('mascota').value;
    const tipo = document.getElementById('tipo').value;
    
    // Muestra de la alerta al usuario
    alert(`¡Cita solicitada con éxito!\n\nProcesando solicitud de atención para tu ${tipo} llamado/a "${mascota}". Nos comunicaremos pronto.`);
    
    // Limpieza de todos los campos del formulario
    this.reset();
});
>>>>>>> ddc3180 (Commit 3: se implementa formulario interactivo para agendar)
