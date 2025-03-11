import '../assets/interfaceB.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
console.log('Interface B chargée !');

document.addEventListener('DOMContentLoaded', function() {
    console.log('Interface B chargée');
    
    // Effet au survol des cartes
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease-in-out';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Effet de fade-in au chargement des sections
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
});
