// const heroSwiper = new Swiper('.hero-swiper', {
//     effect: 'coverflow',
//     grabCursor: true,
//     centeredSlides: true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     loop: true,
//     slidesPerView: 2,
//     spaceBetween: 10,
//     coverflowEffect: {
//         rotate: 20,
//         stretch: 80,
//         depth: 200,
//         modifier: 1, // 2,3
//         slideShadows : false,
//     },
//     breakpoints: {
//         280: {
//           slidesPerView: 2,
//           spaceBetween: 10
//         },
//         768: {
//           slidesPerView: 2,
//           spaceBetween: 10
//         },
//         1024: {
//           slidesPerView: 2,
//           spaceBetween: 10
//         }
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//         renderBullet: function (index, className) {
//             return '<span class="' + className + ' b-purple bg-white relative"><span></span></span>';
//         },
//     },
// });

// const testimonialSwiper = new Swiper('.testimonial-swiper', {
//     effect: 'coverflow',
//     centeredSlides: true,
//     loop: true,
//     speed: 2000,
//     autoplay: {
//         delay: 4000,
//         disableOnInteraction: false,
//         reverseDirection: true,
//     },
//     slidesPerView: "4.5",
//     spaceBetween: 20,
//     coverflowEffect: {
//         rotate: 0,
//         stretch: 0,
//         slideShadows : false,
//     },
//     on: {
//         slideChangeTransitionEnd: function() {
//             var activeIndex = this.realIndex;
//             // alert(activeIndex);
//         }
//     }
// });

function showDialog() {
    const downloadAppDialog = document.querySelector('#downloadAppDialog');
    // downloadAppDialog.classList.remove("hide");
    downloadAppDialog.classList.add("show");
    downloadAppDialog.show();
}

function closeDialog() {
    const downloadAppDialog = document.querySelector('#downloadAppDialog');
    // downloadAppDialog.classList.add("hide");
    downloadAppDialog.classList.remove("show");
    downloadAppDialog.close();
}

function zforms_open_window(url, height, width){
    var leftPos = 0;var topPos = 0;if(screen){
        leftPos = (screen.width - width) / 2;
        topPos = (screen.height - height) / 2;
        window.open(url, null, 'width='+width+',height='+height+',left='+leftPos+',top='+topPos+', toolbar=0, location=0, status=1, scrollbars=1, resizable=1');
    }        
}