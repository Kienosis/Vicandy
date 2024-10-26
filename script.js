// JavaScript for Vicandy Properties site
document.addEventListener('DOMContentLoaded', () => {
    console.log('Vicandy Properties website loaded');
});

// Scroll effect for translucent-to-opaque header
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Toggle side menu open and close
function toggleMenu() {
    const sideMenu = document.getElementById('side-menu');
    sideMenu.classList.toggle('open');
}

// Close the side menu when clicking outside of it
document.addEventListener('click', function(event) {
    const sideMenu = document.getElementById('side-menu');
    const menuIcon = document.querySelector('.menu-icon');

    // Close the menu if it’s open and the click is outside the menu and menu icon
    if (sideMenu.classList.contains('open') && !sideMenu.contains(event.target) && !menuIcon.contains(event.target)) {
        sideMenu.classList.remove('open');
    }
});
