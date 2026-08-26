// LÓGICA DE MODO OSCURO (COMPARTIDA)
document.addEventListener('DOMContentLoaded', () => {
    crearBotonModoOscuro();
    inicializarInteraccionEquipo(); // Tu función original
});
document.addEventListener('DOMContentLoaded', () => {
    inicializarInteraccionEquipo();
});

function inicializarInteraccionEquipo() {
    // Seleccionamos todas las tarjetas de veterinarios creadas en el HTML
    const tarjetas = document.querySelectorAll('.tarjeta-veterinario');
    
    tarjetas.forEach(tarjeta => {
        // Añadimos un cursor de tipo puntero para simular que es un elemento cliqueable
        tarjeta.style.cursor = 'pointer';
        
        tarjeta.addEventListener('click', () => {
            // Extraemos dinámicamente el nombre y la especialidad desde el código HTML de la tarjeta presionada
            const nombre = tarjeta.querySelector('h3').textContent;
            const especialidad = tarjeta.querySelector('.especialidad').textContent;
            
            // Mensaje interactivo sutil
            alert(`Has seleccionado el perfil de: ${nombre}\nEspecialidad: ${especialidad}\n\n¡Puedes agendar una consulta con este especialista regresando a la pestaña de Inicio!`);
        });
    });
}
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