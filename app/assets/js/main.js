const burgerMenu = document.querySelector('.menu-btn');
if (burgerMenu) {
  const bodyMenu = document.querySelector('.header-menu');
  burgerMenu.addEventListener("click", function (e) {
    burgerMenu.classList.toggle('active');
    bodyMenu.classList.toggle('active');
  });
}  