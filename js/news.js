$(document).ready(function () {
  $(".partners-logo-carousel").slick({
    centerMode: true,
    centerPadding: "30%",
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          variableWidth: true,
          centerMode: true,
          centerPadding: "10%",
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

  $(".partners-logo-carousel").on(
    "afterChange",
    function (_event, _slick, _currentSlide) {
      const notActiveSelector = document.querySelectorAll(
        ".slick-slide:not(.slick-current) .partners-logo-img-wrapper"
      );
      notActiveSelector.forEach((node) => {
        const darkImageSrc = node.getAttribute("data-dark-src");
        const img = node.querySelector("img");
        img.src = darkImageSrc;
      });

      const allSelector = document.querySelectorAll(
        ".slick-current .partners-logo-img-wrapper"
      );
      allSelector.forEach((node) => {
        const lightImageSrc = node.getAttribute("data-light-src");
        const img = node.querySelector("img");
        img.src = lightImageSrc;
      });
    }
  );
});

$(document).ready(function () {
  fetch(
    'https://7b7oo1uk.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type%3D%3D%27post%27%26%26%27News%27in+categories%5B%5D-%3Etitle%26%26%27Press+Releases%27in+categories%5B%5D-%3Etitle%5D+%7C+order%28_createdAt+desc%29+%7Btitle%2C%27srcImage%27%3AmainImage.asset-%3Eurl%2C%27slug%27%3Aslug.current%7D'
  ).then((response) => {
    response.json().then((data) => {
      const pressReleases = data.result;

      const pressReleaseCarousel = document.getElementById("news-press-releases-carousel");

      pressReleases.forEach((press) => {
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
        pressReleaseCarousel.appendChild(carouselImgWrapper);
      });

      $(".news-press-releases-carousel").slick({
        centerMode: false,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        slidesToShow: 3,
        swipe: true,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              variableWidth: true,
              centerMode: false,
              slidesToShow: 1,
              dots: pressReleases.length < 9,
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
    });
  });
});
