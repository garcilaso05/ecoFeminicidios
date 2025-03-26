function showTab(tabName) {
    // Ocultar todas las pestañas
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Desactivar todos los botones
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    // Mostrar la pestaña seleccionada
    document.getElementById(tabName).classList.add('active');
    
    // Activar el botón correspondiente
    document.querySelector(`.tab-button[onclick="showTab('${tabName}')"]`).classList.add('active');

    // Inicializar la pestaña de inserciones si es necesario
    if (tabName === 'inserciones') {
        setupInsertionsTab();
    }
}

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar la pestaña inicial (esquema)
    showTab('esquema');
});
