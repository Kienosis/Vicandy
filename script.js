document.addEventListener('DOMContentLoaded', () => {
    const sideMenu = document.getElementById('side-menu');
    const menuIconHeader = document.querySelector('#main-header .menu-icon'); // Header menu icon
    const menuIconInside = sideMenu.querySelector('.menu-icon'); // Close icon inside the side menu
    const firstMenuItem = sideMenu.querySelector('a'); // First menu item for focus management

    // Toggle side menu open and close
    function toggleMenu(event) {
        event.stopPropagation();
        sideMenu.classList.toggle('open');
        if (sideMenu.classList.contains('open')) {
            firstMenuItem.focus(); // Move focus to the first menu item when menu opens
        }
    }

    // Close the side menu when clicking outside of it
    function closeMenuOnClickOutside(event) {
        if (sideMenu.classList.contains('open') &&
            !sideMenu.contains(event.target) &&
            !menuIconHeader.contains(event.target)) {
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

    // Attach event listeners for menu toggling and closing
    menuIconHeader.addEventListener('click', toggleMenu);
    menuIconInside.addEventListener('click', toggleMenu);
    document.addEventListener('click', closeMenuOnClickOutside);
    document.addEventListener('keydown', handleKeyDown);
});

document.addEventListener('DOMContentLoaded', () => {
    const userLang = navigator.language || navigator.userLanguage;
    const currentPath = window.location.pathname;

    // Check session storage to prevent continuous redirect on language preference
    if (!sessionStorage.getItem('languageRedirect')) {
        if (userLang.startsWith('es') && currentPath === '/index.html') {
            sessionStorage.setItem('languageRedirect', 'true');
            window.location.href = 'index_es.html';
        } else if (userLang.startsWith('en') && currentPath === '/index_es.html') {
            sessionStorage.setItem('languageRedirect', 'true');
            window.location.href = 'index.html';
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('a[data-link]');

    // Update link paths based on language
    links.forEach(link => {
        if (currentPath.includes('_es')) {
            // Switch links to Spanish version if current path is in Spanish
            link.href = link.dataset.link === 'home' ? 'index_es.html' : 'contact_es.html';
        } else {
            // Default to English links
            link.href = link.dataset.link === 'home' ? 'index.html' : 'contact.html';
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth <= 768) { // Check if the screen width is 768px or less
        const currentPath = window.location.pathname; // Get the current path

        // Modify the path to prepend 'm_' to the filename before the extension
        const mobilePath = currentPath.replace(/\/([^\/]+)(?=\.\w+$)/, '/m_$1'); 

        // Redirect to the mobile version
        window.location.href = mobilePath; 
    }
});
document.addEventListener('mousemove', (e) => {
    const parallax = document.querySelector('.parallax');
    const x = (e.clientX / window.innerWidth) * 100; // Adjust for effect
    const y = (e.clientY / window.innerHeight) * 100;

    parallax.style.backgroundPosition = `${x}% ${y}%`;
});

const swiper = new Swiper('.swiper-container', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        stretch: -50, // Pulls the side slides closer
        depth: 200,
        modifier: 1.5,
        slideShadows: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});
<script>
function showPopup(id) {
    document.getElementById(id).style.display = 'flex';
}

function closePopup(id) {
    document.getElementById(id).style.display = 'none';
}

// Close the popup when clicking outside the popup content
window.addEventListener('click', function(event) {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
</script>





