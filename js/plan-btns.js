document.body.onload = function() {
    let width = document.querySelector(".plan-btns").offsetWidth;

       function checkWidth() {
           let element = document.querySelector('.plan-btns');
           if (window.innerWidth < width) {
            element.classList.add('j-fs');
           } else {
            element.classList.remove('j-fs');
           }
       }
       window.addEventListener('resize', checkWidth);
       checkWidth();
   };