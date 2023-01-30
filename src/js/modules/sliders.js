import Swiper from 'swiper/bundle';

// crypto-slider

new Swiper('.crypto-slider', {
    observer: true,
    observeParents: true,
    slidesPerView: 4,
    spaceBetween: 30,
    watchOverflow: true,
    speed: 5000,
    loop: true,
    loopAdditionalSlides: 5,
    preloadImages: false,
    autoplay: {
        enabled: true,
        delay: 0.1,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        // when window width is >= 992px
        992: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    },
});