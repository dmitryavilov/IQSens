const mobileMenu = () => {
    const btn = document.getElementById('burger-btn'),
          menu = document.getElementById('mobile-menu');

    const toggleMenu = () => {
        if (btn.classList.contains('burger-button--active')) {
            btn.classList.remove('burger-button--active');
            menu.style.transform = 'translate(-50%, 150%)';
        } else {
            btn.classList.add('burger-button--active');
            menu.style.transform = 'translate(-50%, -50%)';
        }
    };

    btn.addEventListener('click', toggleMenu);
};

export default mobileMenu;