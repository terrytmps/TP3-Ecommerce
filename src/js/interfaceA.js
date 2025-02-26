import '../assets/interfaceA.css';
console.log('Interface A chargée !');

// Utilisation de JavaScript moderne
document.addEventListener('DOMContentLoaded', function() {
    // Fonctionnalité de recherche
    setupSearch();
    
    // Fonctionnalité de navigation
    setupNavigation();
    
    // Fonctionnalité de filtrage par catégorie
    setupCategoryFilters();
});

// Configuration de la recherche
function setupSearch() {
    const mobileSearchBtn = document.getElementById('mobile-search-btn');
    const sidebarSearchBtn = document.getElementById('sidebar-search-btn');
    
    mobileSearchBtn.addEventListener('click', function() {
        performSearch(document.getElementById('mobile-search').value);
    });
    
    sidebarSearchBtn.addEventListener('click', function() {
        performSearch(document.getElementById('sidebar-search').value);
    });
}

// Fonction de délai de recherche
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

// Fonction de recherche
function performSearch(query) {
    if (!query) return;
    
    query = query.toLowerCase();
    const articles = document.querySelectorAll('.article');
    
    const debouncedSearch = debounce(() => {
        articles.forEach(article => {
            const text = article.textContent.toLowerCase();
            if (text.includes(query)) {
                article.style.display = 'block';
                article.style.animation = 'highlight 1s';
            } else {
                article.style.display = 'none';
            }
        });
    }, 300);
    
    debouncedSearch();
}

// Configuration de la navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            navLinks.forEach(l => l.classList.remove('active'));
            
            this.classList.add('active');
            
            console.log(`Navigation vers la section: ${this.dataset.section}`);
        });
    });
}

// Configuration des filtres par catégorie
function setupCategoryFilters() {
    const categoryLinks = document.querySelectorAll('.categories-list a');
    
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const filter = this.dataset.filter;
            const articles = document.querySelectorAll('.article');
            
            // Réinitialiser tous les articles
            articles.forEach(article => {
                article.style.display = 'block';
            });
            
            // Si un filtre est sélectionné, appliquer le filtre
            if (filter) {
                articles.forEach(article => {
                    if (article.dataset.category !== filter) {
                        article.style.display = 'none';
                    }
                });
            }
            
            // Mise en évidence du filtre actif
            categoryLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Animation CSS via JavaScript
document.head.insertAdjacentHTML('beforeend', `
<style>
@keyframes highlight {
    0% { background-color: rgba(255, 255, 0, 0.2); }
    100% { background-color: transparent; }
}
.active {
    font-weight: bold;
    color: #007bff;
}
</style>
`);