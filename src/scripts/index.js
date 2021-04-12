import '../babel';
import '../sass/style.sass';
import Swiper from 'swiper/bundle'
// Картинки
import Sprite from '../img/sprite.svg';
import MainBg from '../img/main/main/mainBg.jpg';
import AboutBg from '../img/main/about/about.jpg';
import WifiIcon from '../img/main/main/wifi.png';
import EllipsesGroup from '../img/main/main/ellipsesGroup.png';
import EllipsesGroupTwo from '../img/main/about/ellipsesGroupTwo.png';
import Scard1 from '../img/main/solutions/scard1.png';
import Scard2 from '../img/main/solutions/scard2.png';
import Scard3 from '../img/main/solutions/scard3.png';
import Scard4 from '../img/main/solutions/scard4.png';
import Scard5 from '../img/main/solutions/scard5.png';
import Scard6 from '../img/main/solutions/scard6.png';
import Iphone from '../img/main/solutions/iphone.png';
import Donut from '../img/main/solutions/donut.png';
import DotCircle from '../img/main/solutions/dotcircle.png';
import ReasonsBg from '../img/main/reasons/reasonsBg.png';
import CircleGroups from '../img/main/reasons/circleGroup.png';
import Company1 from '../img/main/trust/c1.jpg';
import Company2 from '../img/main/trust/c2.jpg';
import Company3 from '../img/main/trust/c3.jpg';
import Company4 from '../img/main/trust/c4.jpg';
import Company5 from '../img/main/trust/c5.jpg';
import Company6 from '../img/main/trust/c6.jpg';
import Company7 from '../img/main/trust/c7.jpg';
import Company8 from '../img/main/trust/c8.jpg';
import Company9 from '../img/main/trust/c9.jpg';
import Company10 from '../img/main/trust/c10.jpg';
import CompaniesBg from '../img/main/trust/companiesBg.png';
import DecorativeLine from '../img/main/feedback/decorativeLine.png';
import PurpleDonut from '../img/main/feedback/purpleDonut.png';
import RoundCube from '../img/main/feedback/roundCube.png';
import figuresGroup from '../img/main/footer/figuresGroup.png';
// Шрифты
import Proxima1 from '../fonts/ProximaNova-Regular.woff2';
import Proxima2 from '../fonts/ProximaNova-Bold.woff2';
import Proxima3 from '../fonts/ProximaNova-Semibold.woff2';
// Модули
import mobileMenu from './modules/mobileMenu';
import scrollTo from './modules/scrollTo';
import trustSlider from './modules/trustSlider';
import sendForm from './modules/sendForm';

// Мобильное меню
mobileMenu();
// Скролл
scrollTo();
// Слайдер
trustSlider();
// Отправка форма и валидация
sendForm(document.getElementById('feedback-form'));