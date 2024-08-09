$(document).ready(function () {
  // ipad

  const aboutUslink = document.getElementById(
    "investor-card-info-link-container"
  );
  const details = navigator.userAgent;
  // Regular expression containing some mobile device keywords
  const regexp = /android|iphone|kindle|ipad/i;
  // Check if the user's device matches the mobile device keywords
  const isMobileDevice = regexp.test(details);

  if (isMobileDevice) {
    aboutUslink.style.transform = "translateX(0)";
    aboutUslink.style.opacity = 1;
  }

  $(".investor-board-img-container").slick({
    centerMode: true,
    centerPadding: "35%",
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 6000,
    autoplaySpeed: 5,
    cssEase: "linear",
    waitForAnimate: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          autoplaySpeed: 3000,
          cssEase: "ease",
          waitForAnimate: true,
          speed: 300,
          centerMode: false,
          dots: false,
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: false,
          centerMode: true,
          centerPadding: "30%",
          slidesToShow: 1,
        },
      },
    ],
  });

  fetch(
    'https://7b7oo1uk.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type%3D%3D%27post%27%26%26%27News%27in+categories%5B%5D-%3Etitle%5D%7Corder%28_createdAt+desc%29%7Btitle%2C%27srcImage%27%3AmainImage.asset-%3Eurl%2C%27slug%27%3Aslug.current%7D&perspective=published'
  ).then((response) => response.json().then((data) => {
      const featuredNewsCarousel = document.getElementById("news-featured-news-carousel");

      data.result.forEach((press) => {
        const carouselImgWrapper = document.createElement("a");
        carouselImgWrapper.href = "./article.html?slug=" + press.slug;
        carouselImgWrapper.classList.add("carousel-img-wrapper");
        const newsImg = document.createElement("img");
        newsImg.classList.add("news-img");
        newsImg.src = press.srcImage;
        newsImg.alt = press.title;
        const pressTitle = document.createElement("h2");
        pressTitle.classList.add("news-title-overlay");
        pressTitle.innerHTML = press.title;
        carouselImgWrapper.appendChild(newsImg);
        carouselImgWrapper.appendChild(pressTitle);
        featuredNewsCarousel.appendChild(carouselImgWrapper);
      });

      $(".news-featured-news-carousel").slick({
        centerMode: false,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              variableWidth: true,
              centerMode: false,
              dots: true,
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              arrows: false,
              dots: false,
              centerMode: false,
              slidesToShow: 2,
            },
          },
        ],
      });
  }));
});
