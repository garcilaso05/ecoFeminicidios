document.addEventListener('DOMContentLoaded', () => {
    // Actualizar fecha y hora
    function updateDateTime() {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        document.getElementById('datetime').textContent = 
            now.toLocaleDateString('es-ES', options);
    }

    // Actualizar inmediatamente y cada segundo
    updateDateTime();
    setInterval(updateDateTime, 1000);

    const shapes = document.querySelectorAll('.shape');
    const bgShapes = document.querySelector('.bg-shapes');
    
    // Crear más formas dinámicamente
    for(let i = 0; i < 20; i++) {
        const shape = document.createElement('div');
        shape.className = 'shape';
        bgShapes.appendChild(shape);
    }
    
    // Configurar todas las formas
    document.querySelectorAll('.shape').forEach((shape, index) => {
        const size = Math.random() * 100 + 40;
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        animateShape(shape);
    });

    // Crear div para los círculos de fondo
    const backgroundCircles = document.createElement('div');
    backgroundCircles.className = 'background-circles';
    document.body.appendChild(backgroundCircles);
    
    // Generar círculos más frecuentemente
    setInterval(() => {
        if (Math.random() > 0.5) { // 50% de probabilidad
            createBackgroundCircle();
        }
    }, 800); // Cada 800ms
});

function animateShape(shape) {
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    const endX = Math.random() * window.innerWidth;
    const endY = Math.random() * window.innerHeight;
    
    shape.animate([
        {
            transform: `translate(${startX}px, ${startY}px) scale(1)`,
            opacity: 0
        },
        {
            transform: `translate(${endX}px, ${endY}px) scale(1.5)`,
            opacity: 0.05,
            offset: 0.5
        },
        {
            transform: `translate(${startX}px, ${startY}px) scale(1)`,
            opacity: 0
        }
    ], {
        duration: Math.random() * 5000 + 3000,
        iterations: Infinity,
        easing: 'ease-in-out'
    });
}

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    document.querySelector('.title-container').appendChild(particle);
    
    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 3 + 2; // Aumentada la velocidad
    const dx = Math.cos(angle) * velocity;
    const dy = Math.sin(angle) * velocity;
    
    particle.animate([
        { transform: 'translate(0, 0)', opacity: 1 }, // Aumentada la opacidad inicial
        { transform: `translate(${dx * 70}px, ${dy * 70}px)`, opacity: 0 } // Aumentada la distancia
    ], {
        duration: 1500, // Aumentada la duración
        easing: 'ease-out'
    }).onfinish = () => particle.remove();
}

function createBackgroundCircle() {
    const circle = document.createElement('div');
    circle.className = 'bg-circle';
    
    // Tamaños más grandes y variables
    const size = Math.random() * 400 + 200; // entre 200px y 600px
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    
    // Asegurar que el círculo aparezca completamente dentro de la pantalla
    const x = Math.random() * (window.innerWidth - size);
    const y = Math.random() * (window.innerHeight - size);
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    
    document.querySelector('.background-circles').appendChild(circle);

    // Animación simplificada, solo fade in/out
    const animation = circle.animate([
        { opacity: 0 },
        { opacity: 0.8, offset: 0.2 },
        { opacity: 0.8, offset: 0.8 },
        { opacity: 0 }
    ], {
        duration: 5000,
        easing: 'ease-in-out'
    });

    animation.onfinish = () => circle.remove();
}

// Efecto parallax mejorado y partículas
document.addEventListener('mousemove', (e) => {
    const title = document.getElementById('titulin');
    const shapes = document.querySelectorAll('.shape');
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const offsetX = (mouseX - centerX) * 0.03;
    const offsetY = (mouseY - centerY) * 0.03;
    
    title.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    
    // Crear partículas más frecuentemente
    if(Math.random() > 0.8) { // Cambiado de 0.9 a 0.8 para más partículas
        createParticle(mouseX, mouseY);
    }
    
    shapes.forEach((shape, index) => {
        const factor = (index + 1) * 0.04;
        shape.style.transform = `translate(${offsetX * factor}px, ${offsetY * factor}px)`;
    });
});

// Limpiar partículas periódicamente
setInterval(() => {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        if(!particle.getAnimations().length) {
            particle.remove();
        }
    });
}, 2000);
