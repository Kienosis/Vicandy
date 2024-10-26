document.addEventListener('DOMContentLoaded', () => {
    const sideMenu = document.getElementById('side-menu');
    const menuIconHeader = document.querySelector('#main-header .menu-icon'); // Header menu icon
    const menuIconInside = sideMenu.querySelector('.menu-icon'); // Menu icon inside side menu

    // Toggle side menu open and close
    function toggleMenu(event) {
        event.stopPropagation();
        console.log("Menu toggled"); // Log to verify the event is firing
        sideMenu.classList.toggle('open');
    }

    // Close the side menu when clicking outside of it
    function closeMenuOnClickOutside(event) {
        if (sideMenu.classList.contains('open') && !sideMenu.contains(event.target) && !menuIconHeader.contains(event.target)) {
            sideMenu.classList.remove('open');
            console.log("Menu closed on outside click"); // Log for debugging
        }
    }

    // Attach the toggleMenu function to both menu icons
    if (menuIconHeader) {
        menuIconHeader.addEventListener('click', toggleMenu);
    }
    if (menuIconInside) {
        menuIconInside.addEventListener('click', toggleMenu);
    }

    // Attach event listener to the document for outside clicks
    document.addEventListener('click', closeMenuOnClickOutside);
});
