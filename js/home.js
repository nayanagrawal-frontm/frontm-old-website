function initialiseHeroSlider(heroSwiper) {
    heroSwiper = new Swiper('.hero-swiper', {
        loop: true,
        fade: true,
        speed:1000,
        effect: 'coverflow',
        direction: 'horizontal',
        centeredSlides:true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        coverflowEffect: {
            rotate: 0,
        },
        breakpoints: {
            280:{
                slidesPerView: 1.25,
                spaceBetween:20,
            },
            768: {
                slidesPerView: 2.35,
                spaceBetween:20,
            },
            1024: {
                slidesPerView: 2.3,
                spaceBetween:20,
            },
            1440: {
                slidesPerView: 2.36,
                spaceBetween:20,
            }
        }
    });

    // Hacky way and needs a better fix
    setTimeout(() => {
        heroSwiper.slideNext();
    }, 300);
}

function initialiseTestimonialSlider() {
    const testimonialSlider = new Swiper('.swiper-slides-container', {
        effect: 'slide',
        direction: 'horizontal',
        fade: true,
        grabCursor: true,
        // centeredSlides:true,
        // autoHeight: true,
        autoplay: {
            delay: 10000,
        },
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletShape: 'ellipse',
        },
        breakpoints: {
            280: {
                centeredSlides:true,
                slidesPerView:1,
                spaceBetween:10,
            },
            768: {
                slidesPerView:1,
                spaceBetween:10,
            },
            1024: {
                centeredSlides:false,
                slidesPerView: 2,
                spaceBetween:20,
            }
        }
    });
}

function initaliseFeaturedReadsArticlesSlider(featuredReadsSwiper) {
    featuredReadesSwiper = new Swiper('.featured-reades-swiper', {
        direction: 'horizontal',
        grabCursor:true,
        breakpoints: {
            280: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1440: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
}

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

document.addEventListener('DOMContentLoaded', function () {
    const swapWords = document.querySelectorAll('.swap-word');
    
    const textSwapAnimation = gsap.timeline({
        paused: true,
        repeat: -1,
    });
    
    swapWords.forEach((word, index) => {
        textSwapAnimation.set(word, {opacity: '0.2'})
        .to(word, { display: 'block', scaleX: 0.7, scaleY: 0.7, opacity: '0.5', duration: 0.8, ease: "power1.inOut" })
        .to(word, {  display: 'block', scaleX: 1, scaleY: 1, opacity: '1', duration: 1.5, ease: "power1.inOut" }, '+=1')
        .to(word, {  display: 'block', scaleX: 1, scaleY: 1, opacity: '1', duration: 1.2, ease: "power1.inOut" }, '+=1')
        .to(word,{ display: 'none', duration: 0.1, ease: "power1.inOut" });
    });
    
    textSwapAnimation.play();
    
    const logoMarquee = document.querySelector('.marquee-scroll');
});

document.addEventListener('DOMContentLoaded', function () {

    // const breakapartAnimationContainer = document.getElementById('breakapart_animation');
    // gsap.registerPlugin(ScrollTrigger);

    // const animation = lottie.loadAnimation({
    //     container: breakapartAnimationContainer,
    //     renderer: 'svg',
    //     loop: false,
    //     autoplay: false,
    //     path: 'https://cdn.sanity.io/files/7b7oo1uk/production/5f101d869c250aea5a79976e69c0a2e05db78eb6.json',
    //     rendererSettings: {
    //     preserveAspectRatio: 'xMidYMid meet',
    //     },
    // });

    // const gsapTl = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: breakapartAnimationContainer,
    //         start: 'top center-=20%',
    //         end: 'center center',
    //         onEnter: () => animation.play(),
    //         onLeaveBack: () => animation.pause(0),
    //     }
    // });

    // gsapTl.play();

    // animation.addEventListener('complete', function () {
    //     breakapartAnimationContainer.style.display = 'none';
        
    // });
    const whoIsThisFor = document.getElementsByClassName('cta-cards-container');

    gsap.timeline({
        scrollTrigger: {
            trigger: whoIsThisFor,
            start: 'top center-=20%',
            end: 'center center+=10%',
            scrub: true,
            markers: false,
        }
    }).fromTo(whoIsThisFor, {y: '5%'}, { y: '-5%' });

    const circularAnimationContainer = document.getElementsByClassName('collab-vid-container');
    const circularAnimationVideo = document.querySelector('.collab-vid-container > video');
    
    const gsapVideoTl = gsap.timeline({scrollTrigger: {
        trigger: circularAnimationContainer,
        start: 'top center',
        end: 'center center',
        markers: false,
        scrub: 0.8,
        onEnter: () => circularAnimationVideo.play(),
    }});

    gsapVideoTl.fromTo(circularAnimationVideo, {scale: 0.8}, {scale: 1, ease: 'linear'});
    gsapVideoTl.play();

    const imageContainers = document.querySelectorAll('.why-frontm > div > .img-container > img');

    ScrollTrigger.matchMedia({
        "(min-width: 768px)": function () {
            imageContainers.forEach((item, index) => {
                const whyFrontMGsapTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: item,
                        start: 'bottom bottom',
                        end: 'top top+=70%',
                        scrub: true,
                        markers: false,
                    }
                });

                whyFrontMGsapTl.set(item, {x: '0%'}).fromTo(item,{x: '0%', opacity: '50%'},
                    {x: '50%', background: 'radial-gradient(2.5rem circle at 50% 50%,#44164E 90%, transparent 0 0%)', opacity: '100%', ease: 'none', duration: 8, stagger: 1.4, immediateRender: false}
                );
            });
        },
        "(min-width: 1440px)": function () {
            imageContainers.forEach((item, index) => {
                const whyFrontMGsapTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: item,
                        start: 'bottom bottom',
                        end: 'top top+=70%',
                        scrub: true,
                        markers: false,
                    }
                });

                whyFrontMGsapTl.fromTo(item,
                    {x: '0%', opacity: '50%'},
                    {x: '50%', background: 'radial-gradient(2rem circle at 50% 50%,#44164E 90%, transparent 0 0%)', opacity: '100%', ease: 'none', duration: 8, stagger: 1.4, immediateRender: false}
                );
            });
        },
    });
});