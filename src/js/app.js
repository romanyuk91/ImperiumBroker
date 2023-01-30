import AOS from 'aos';
import navMenu from './modules/navMenu.js';
import news from './modules/news.js';
import './modules/sliders.js';
import btnScroll from './modules/btnScroll.js';

AOS.init({
    once: true
});
navMenu();
news();
btnScroll();
