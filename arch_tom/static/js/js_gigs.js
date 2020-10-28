const textInFade = () => {

  const txt = document.querySelectorAll('.text');
  const buy = document.querySelectorAll('.ticket');
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
