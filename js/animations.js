// Inicializar AOS solo en pantallas de desktop (mayor a 768px)
if (window.innerWidth > 768) {
    AOS.init({
        duration: 800,
        offset: 100
    });
}

// Menu Hamburguesa
const hamburger = document.getElementById('hamburger');
const navbarContainer = document.getElementById('navbarContainer');

if (hamburger && navbarContainer) {
    hamburger.addEventListener('click', function() {
        navbarContainer.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navbarContainer.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}
