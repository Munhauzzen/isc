const burgerMenu = document.querySelector('.menu-btn');
const bodyMenu = document.querySelector('.header-menu');
if (burgerMenu) {
  burgerMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('lock');
    burgerMenu.classList.toggle('active');
    bodyMenu.classList.toggle('active');
  });
}

// const menuLinks = document.querySelectorAll('.header-menu__link[data-goto]');
// if (menuLinks.length > 0) {
//   menuLinks.forEach(menuLink => {
//     menuLink.addEventListener("click", onMenuLinkClick);
//   });

//   function onMenuLinkClick(e) {
//     const menuLink = e.target;
//     if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
//       const gotoBlock = document.querySelector(menuLink.dataset.goto);
//       const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector("header").offsetHeight;

//       if (burgerMenu.classList.contains('active')) {
//         burgerMenu.classList.remove('active');
//         bodyMenu.classList.remove('active');
//       }

//       window.scrollTo({
//         top: gotoBlockValue,
//         behavior: "smooth"
//       });
//       e.preventDefault();
//     }
//   }
// }


window.onscroll = function showHeader() {

  var header = document.querySelector('.header-top')

  if (window.pageYOffset > 150) {
    header.classList.add('header__fixed');
  } else {
    header.classList.remove('header__fixed');
  }
}