const navSlide = () => {

  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.links');
  const nav2 = document.querySelector('.links2');
  const navLinks = document.querySelectorAll('.nav-links li');


  burger.addEventListener('click',() => {
    nav.classList.toggle('nav-active');
    nav2.classList.toggle('nav-active');

  navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
      }
    });
    burger.classList.toggle('toggle');

  });

}
navSlide();

setTimeout(bannerFade,500)

function bannerFade() {

  const banner = document.querySelector('.bottom_banner');
    banner.style.animation = `navImgFadeIn 3s linear forwards 0s`;

}
