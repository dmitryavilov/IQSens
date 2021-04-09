const scrollTo = () => {
    const pageLinks = document.querySelectorAll('a[href*="#"]');

    const createSlowScroll = () => {
        pageLinks.forEach(item => {
            if (item.getAttribute('href').length > 1) {
                item.addEventListener('click', e => {
                    e.preventDefault();
    
                    const blockID = item.getAttribute('href').substr(1);
    
                    document.getElementById(blockID).scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                });
            };
        });
    };

    createSlowScroll();
};

export default scrollTo;