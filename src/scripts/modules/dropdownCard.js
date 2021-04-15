const dropdownCard = () => {
    const wrapper = document.querySelector('.opportunity');

    const toggleCard = e => {
        let target = e.target;

        const button = target.closest('.opportunity-card__plus-btn'),
              card = target.closest('.opportunity-card'),
              hiddenText = card.querySelector('.opportunity-card__description');

        const toggleButton = () => {
            if (card.classList.contains('opportunity-card--active')) {
                button.style.transform = 'rotate(0deg)';
            } else {
                button.style.transform = 'rotate(135deg)';
            };
        };

        if (button) {
            if (card.classList.contains('opportunity-card--active')) {
                hiddenText.classList.remove('opportunity-card__description--active');

                toggleButton();

                card.classList.remove('opportunity-card--active');
            } else {
                hiddenText.classList.add('opportunity-card__description--active');

                toggleButton();

                card.classList.add('opportunity-card--active');
            };
        };
    };

    wrapper.addEventListener('click', toggleCard);

};

export default dropdownCard;