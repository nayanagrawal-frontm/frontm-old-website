function initialiseMPSlider(mpSwiper) {
    mpSwiper = new Swiper('.marketplace-swiper', {
        loop: true,
        fade: true,
        speed:1000,
        grabCursor: true,
        effect: 'coverflow',
        direction: 'horizontal',
        centeredSlides:true,
        spaceBetween:20,
        autoplay: { delay: 6000, disableOnInteraction: false },
        coverflowEffect: { rotate: 0 },
        breakpoints: {
            280:{ slidesPerView: 1.45 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 2.3 },
            1440: { slidesPerView: 3.6 }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) { return '<span class="' + className + ' b-purple bg-white relative"><span></span></span>'; },
        },
    });

    setTimeout(() => {
        mpSwiper.slideNext();
    }, 2000);
}