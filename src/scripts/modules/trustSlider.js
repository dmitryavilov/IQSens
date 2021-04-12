import Swiper from 'swiper/bundle'

const trustSlider = () => {
    const swiper = new Swiper('.companies-wrapper--mobile', {
      direction: 'horizontal',
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 20,
      autoplay: {
          delay: 1500
      }
    });
};

export default trustSlider;