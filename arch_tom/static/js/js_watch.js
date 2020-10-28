const vidInFade = () => {

  const vid = document.querySelectorAll('.video');

  document.addEventListener("DOMContentLoaded", () => {

    vid.forEach((link, index) => {
      link.style.animation = `navImgFadeIn 0.5s ease forwards ${index / 2 + 0.5}s`;
    });

  });
}

vidInFade();
