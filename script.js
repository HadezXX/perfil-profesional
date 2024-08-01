document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const fadeElements = document.querySelectorAll('.fade-in');
    const spotlight = document.querySelector('.spotlight');

    // Efecto de desplazamiento suave
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });

    // Efecto de aparición al desplazarse
    const handleScroll = () => {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // Efecto de foco siguiendo el cursor
    document.addEventListener('mousemove', (e) => {
        spotlight.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, rgb(32, 241, 2), transparent 20%)`;
    });

    // Ajuste del tamaño del foco al hacer clic
    let spotlightSize = 'transparent 160px, rgba(80, 215, 19) 400px';

    window.addEventListener('mousedown', e => {
        spotlightSize = 'transparent 40%, rgba(5, 51, 174 ) 80%';
        updateSpotlight(e);
    });

    

    function updateSpotlight(e) {
        spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;
    }

    // Partículas flotantes
    const particlesContainer = document.getElementById('particles');
    const createParticle = () => {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particlesContainer.appendChild(particle);

        const size = Math.random() * 5 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        const animationDuration = Math.random() * 5 + 3;
        particle.style.animationDuration = `${animationDuration}s`;

        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    };

    setInterval(createParticle, 800);
});

document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    let index = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    function showItem(index) {
        const offset = -index * 100;
        carouselWrapper.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : totalItems - 1;
        showItem(index);
    });

    nextButton.addEventListener('click', () => {
        index = (index < totalItems - 1) ? index + 1 : 0;
        showItem(index);
    });
});
