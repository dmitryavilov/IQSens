import Swiper from 'swiper/bundle';

const painSlider = () => {
    const swiper = new Swiper('.pain-cards--mobile', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 20,
        autoplay: {
            delay: 1500
        }
    });
};

export default painSlider;