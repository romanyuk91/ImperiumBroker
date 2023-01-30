function navMenu() {

    const navButton = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');

    function closeNavMenu() {
        navMenu.classList.remove('active');
        navButton.classList.remove('active');
    }

    navButton.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navButton.classList.toggle('active');

        navLinks.forEach(function(item) {
            item.addEventListener('click', function(event) {
                if (event.target == item) {
                    closeNavMenu();
                };
            });
        });

        document.addEventListener('keydown', (event) => {
            if (event.code === 'Escape' && navMenu.classList.contains('active')) {
                closeNavMenu();
            };
        });

        document.addEventListener('click', (event) => {
            if (event.target !== navMenu && event.target !== navButton) {
                closeNavMenu();
            };
        });
    });
}

export default navMenu;