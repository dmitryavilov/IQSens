const sendForm = form => {
    const name = form.querySelector('input[name=name]'),
          phone = form.querySelector('input[name=phone]'),
          button = form.querySelector('BUTTON');

    button.disabled = true;

    const phoneValidation = () => {
        phone.value = phone.value.match(/^\+?[1-9]{1,2}[-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/g);
        phone.value = phone.value.split(',').join('');
    };

    const nameValidation = () => {
        const valueReplace = elem => {
            name.value = elem;
        };

        valueReplace(name.value.replace(/( |\-){1}[a-z]( |\-){1}/gi, ''));
        valueReplace(name.value.replace(/\d/gi, ''));
        valueReplace(name.value.replace(/((\-){2,}|)*((\-){2,}|)*/gi, ''));
        valueReplace(name.value.replace(/\s+/gi, ' '));
        valueReplace(name.value.replace(/( |^)[а-яё]/g, x => x.toUpperCase()));
        valueReplace(name.value.replace(/(\w)/gi, ''));

        try {
            if (name.value.length < 2) {
                name.value = '';
            };

            if (name.value[0] === ' ') {
                name.value = name.value.substr(1);
            };
        } catch {};
    };

    const checkInputs = () => {
        if (name.value.trim() !== '' && phone.value.trim() !== '') {
            button.disabled = false;
        } else {
            button.disabled = true;
        };
    };

    const createEventListeners = () => {
        name.addEventListener('input', checkInputs);
        phone.addEventListener('input', checkInputs);
        name.addEventListener('change', nameValidation);
        phone.addEventListener('change', phoneValidation);
    };

    createEventListeners();

    form.addEventListener('submit', e => {
        e.preventDefault();
        if (name.value !== '' && phone.value !== '') {
            const formData = {
                name: name.value,
                phone: phone.value
            };

            fetch('smart.php', {
                method: 'POST',
                body: formData
            }).then(response => {
                console.log(`Успешно! ${response}`);
            }).catch(error => {
                console.error(error);
            });
        } else {
            alert('Введите')
        }
    });
};

export default sendForm;