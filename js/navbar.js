const navbarMenu = document.getElementById("navbar-mobile-menu");
const navList = document.getElementById("nav-list-container");
const navListClosers = document.querySelectorAll("#nav-list-closer");

const navItems = document.querySelectorAll(".nav-item");

navbarMenu.addEventListener("click", () => {
  navList.classList.toggle("mobile-nav-list-show");
});

navListClosers.forEach((item) => {
  item.addEventListener("click", () => {
    navList.classList.remove("mobile-nav-list-show");
  });
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    let navItemList = item.childNodes[3];
    let navLinkBtn = item.childNodes[1].childNodes[1];
    // console.log(navLinkBtn);
    if (navItemList !== undefined) {
      navItemList.classList.toggle("nav-item-list-show");
      navItems.forEach((item2) => {
        if (item !== item2) {
          let navItemList = item2.childNodes[3];
          let navLinkBtn = item2.childNodes[1].childNodes[1];
          // console.log(navLinkBtn);
          if (navItemList !== undefined) {
            navItemList.classList.remove("nav-item-list-show");
          }
          if (navLinkBtn !== undefined) {
            navLinkBtn.classList.remove("nav-link-btn-rotate");
          }
        }
      });
    }
    if (navLinkBtn !== undefined) {
      navLinkBtn.classList.toggle("nav-link-btn-rotate");
    }
  });
});

window.dispatchEvent(new Event("resize"));
