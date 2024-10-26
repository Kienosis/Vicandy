document.addEventListener('DOMContentLoaded', () => {
    const sideMenu = document.getElementById('side-menu');
    const menuIconHeader = document.querySelector('#main-header .menu-icon'); // Header menu icon
    const menuIconInside = sideMenu.querySelector('.menu-icon'); // Menu icon inside side menu
    const firstMenuItem = sideMenu.querySelector('a'); // First menu item for focus management

    // Toggle side menu open and close
    function toggleMenu(event) {
        event.stopPropagation();
        sideMenu.classList.toggle('open');
        if (sideMenu.classList.contains('open')) {
            firstMenuItem.focus(); // Move focus to the first menu item
        }
    }

    // Close the side menu when clicking outside of it
    function closeMenuOnClickOutside(event) {
        if (sideMenu.classList.contains('open') && !sideMenu.contains(event.target) && !menuIconHeader.contains(event.target)) {
            sideMenu.classList.remove('open');
        }
    }

    // Close side menu with 'Escape' key
    function handleKeyDown(event) {
        if (event.key === 'Escape' && sideMenu.classList.contains('open')) {
            sideMenu.classList.remove('open');
            menuIconHeader.focus(); // Return focus to the menu icon in the header
        }
    }

    // Attach the toggleMenu function to both menu icons
    menuIconHeader.addEventListener('click', toggleMenu);
    menuIconInside.addEventListener('click', toggleMenu);

    // Attach event listener to the document for outside clicks
    document.addEventListener('click', closeMenuOnClickOutside);

    // Attach event listener for 'Escape' key to close menu
    document.addEventListener('keydown', handleKeyDown);
});

