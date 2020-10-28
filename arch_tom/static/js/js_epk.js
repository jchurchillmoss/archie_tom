const textInFade = () => {

  const txt = document.querySelectorAll('.text');
  const buy = document.querySelectorAll('.epk_button');
  document.addEventListener("DOMContentLoaded", () => {

    txt.forEach((link, index) => {
      link.style.animation = `navImgFadeIn 0.5s ease forwards ${index / 6 + 0.5}s`;
    });

    buy.forEach((link, index) => {
      link.style.animation = `navImgFadeIn 0.5s ease forwards ${index / 6 + 0.8}s`;
    });

  });
}

textInFade();

setTimeout(imgFade,1000)

function imgFade() {
  
  const img = document.querySelector('.epk_img');
  img.style.animation = `navImgFadeIn 3s linear forwards 0s`;

}
