// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Sticky navigation handling
    const nav = document.querySelector('nav');
    let lastScroll = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScroll) {
            nav.classList.add('nav-hidden');
        } else {
            nav.classList.remove('nav-hidden');
        }
        lastScroll = window.scrollY;
    });

    // Category navigation scroll buttons
    const categoryContainer = document.querySelector('.overflow-x-auto');
    const scrollLeftBtn = document.querySelector('.scroll-left');
    const scrollRightBtn = document.querySelector('.scroll-right');

    if (scrollLeftBtn && scrollRightBtn) {
        scrollLeftBtn.addEventListener('click', () => {
            categoryContainer.scrollBy({
                left: -200,
                behavior: 'smooth'
            });
        });

        scrollRightBtn.addEventListener('click', () => {
            categoryContainer.scrollBy({
                left: 200,
                behavior: 'smooth'
            });
        });
    }

    // Heart button toggle
    const heartButtons = document.querySelectorAll('.heart-button');
    heartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const icon = button.querySelector('i');
            icon.classList.toggle('far');
            icon.classList.toggle('fas');
            icon.classList.toggle('text-airbnb');
        });
    });

    // Search bar interaction
    const searchBar = document.querySelector('.search-bar');
    const searchInputs = document.querySelectorAll('.search-input');

    searchInputs.forEach(input => {
        input.addEventListener('focus', () => {
            searchBar.classList.add('shadow-lg');
        });

        input.addEventListener('blur', () => {
            searchBar.classList.remove('shadow-lg');
        });
    });

    // Filter button toggle
    const filterButton = document.querySelector('.filter-button');
    if (filterButton) {
        filterButton.addEventListener('click', () => {
            // Add filter modal implementation here
            console.log('Filter button clicked');
        });
    }

    // User menu toggle
    const userMenuButton = document.querySelector('.user-menu-button');
    const userMenu = document.querySelector('.user-menu');
    
    if (userMenuButton && userMenu) {
        userMenuButton.addEventListener('click', () => {
            userMenu.classList.toggle('hidden');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!userMenuButton.contains(e.target) && !userMenu.contains(e.target)) {
                userMenu.classList.add('hidden');
            }
        });
    }
});
