import Swiper from 'swiper/bundle';

const dignitiesSlider = () => {
    const swiper = new Swiper('.dignities-cards--md', {
      direction: 'horizontal',
      slidesPerView: 'auto',
      spaceBetween: -10,
      autoplay: {
          delay: 1500
      }
    });
};

export default dignitiesSlider;