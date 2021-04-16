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
import FiguresGroup from '../img/main/footer/figuresGroup.png';
import DecisionsBg from '../img/decisions/main/decisionsBg.jpg';
import PurpleCircle from '../img/decisions/pain/purpleCircle.png';
import Eye from '../img/decisions/platform/eye.png';
import Headphones from '../img/decisions/platform/headphones.png';
import Tile1 from '../img/decisions/dispatcherCenter/tile.png';
import Tile2 from '../img/decisions/dispatcherCenter/tile2.png';
import Tile3 from '../img/decisions/dispatcherCenter/tile3.png';
import Tile4 from '../img/decisions/dispatcherCenter/tile4.png';
import Tile5 from '../img/decisions/dispatcherCenter/tile5.png';
import Tile6 from '../img/decisions/dispatcherCenter/tile6.png';
import Tile7 from '../img/decisions/dispatcherCenter/tile7.png';
import Tile8 from '../img/decisions/dispatcherCenter/tile8.png';
import Tile9 from '../img/decisions/dispatcherCenter/tile9.png';
import Ipad from '../img/decisions/dispatcherCenter/ipad.png';
import IphoneX from '../img/decisions/dispatcherCenter/iphoneX.png';
import GrayLine from '../img/decisions/dispatcherCenter/grayLine.png';
import ActionGood1 from '../img/decisions/actionGoods/actionGood-1.png';
import ActionGood2 from '../img/decisions/actionGoods/actionGood-2.png';
import ActionGood3 from '../img/decisions/actionGoods/actionGood-3.png';
import ActionGood4 from '../img/decisions/actionGoods/actionGood-4.png';
import ActionGood5 from '../img/decisions/actionGoods/actionGood-5.png';
import ActionGood6 from '../img/decisions/actionGoods/actionGood-6.png';
import Good1 from '../img/decisions/actionGoods/good-1.jpg';
import Good2 from '../img/decisions/actionGoods/good-2.jpg';
import IqSee from '../img/decisions/actionGoods/iqsee.png';
import WhiteLine from '../img/decisions/pluses/whiteLine.png';
import Geom from '../img/platform/main/geom.png';
import FuncIcon1 from '../img/platform/main/funcIcon-1.png';
import FuncIcon2 from '../img/platform/main/funcIcon-2.png';
import FuncIcon3 from '../img/platform/main/funcIcon-3.png';
import FuncIcon4 from '../img/platform/main/funcIcon-4.png';
import Monitor from '../img/platform/main/monitor.png';
import AvailablePhones from '../img/platform/available/availablePhones.png';
import PhoneInt from '../img/platform/interface/phoneInt.png';
import IphoneInt from '../img/platform/interface/iphoneInt.png';
import IpadInt from '../img/platform/interface/ipadInt.png';
// Шрифты
import Proxima1 from '../fonts/ProximaNova-Regular.woff2';
import Proxima2 from '../fonts/ProximaNova-Bold.woff2';
import Proxima3 from '../fonts/ProximaNova-Semibold.woff2';
// Модули
import mobileMenu from './modules/mobileMenu';
import scrollTo from './modules/scrollTo';
import trustSlider from './modules/trustSlider';
import painSlider from './modules/painSlider';
import dropdownCard from './modules/dropdownCard';
import sendForm from './modules/sendForm';
import dignitiesSlider from './modules/dignitiesSlider';

// Мобильное меню
mobileMenu();
// Скролл
scrollTo();
// Слайдеры
trustSlider();
painSlider();
dignitiesSlider();
// Отправка форма и валидация
sendForm(document.getElementById('feedback-form'));
// Выпадающий список
try {
    dropdownCard();
} catch {};