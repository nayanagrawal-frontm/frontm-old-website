// shake animation
window.addEventListener("scroll", function () {
  let elements = document.querySelectorAll(".link-circle-icon");
  elements.forEach(function (element) {
    let position = element.getBoundingClientRect();
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
      element.classList.remove("shake");
      void element.offsetWidth;
      element.classList.add("shake");
    } else {
      element.classList.remove("shake");
    }
  });
});

window.addEventListener("scroll", function () {
  let elements = document.querySelectorAll(".link-arrow-icon");
  elements.forEach(function (element) {
    let position = element.getBoundingClientRect();
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
      element.classList.remove("strech");
      void element.offsetWidth;
      element.classList.add("strech");
    } else {
      element.classList.remove("strech");
    }
  });
});
