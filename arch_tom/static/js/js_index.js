setTimeout(navFade0,500)
setTimeout(navFade,5000)
setTimeout(navFade2,13600)
setTimeout(navFade3,22200)
setTimeout(navFade4,30800)
setTimeout(navFade5,39400)
setInterval(navFade6,48000);

function navFade0() {

  const cov1 = document.querySelector('.cover1');
  const text = document.querySelector('.all_text');
    cov1.style.animation = `navImgFadeIn 3s linear forwards 0s`;
    text.style.animation = `navImgFadeIn 3s linear forwards 0s`;
}
function navFade () {

  const cov1 = document.querySelector('.cover1');
  const cov2 = document.querySelector('.cover2');
  const cov3 = document.querySelector('.cover3');
  const cov4 = document.querySelector('.cover4');
  const cov5 = document.querySelector('.cover5');
  const cov6 = document.querySelector('.cover6');
    cov1.style.animation = `navImgFadeOut 3s linear forwards 0s`;
    cov2.style.animation = `navImgFadeIn 3s linear forwards 0s`;
}

function navFade2() {

  const cov1 = document.querySelector('.cover1');
  const cov2 = document.querySelector('.cover2');
  const cov3 = document.querySelector('.cover3');
  const cov4 = document.querySelector('.cover4');
  const cov5 = document.querySelector('.cover5');
  const cov6 = document.querySelector('.cover6');
    cov2.style.animation = `navImgFadeOut 3s linear forwards 0s`;
    cov3.style.animation = `navImgFadeIn 3s linear forwards 0s`;
}

function navFade3() {
  const cov1 = document.querySelector('.cover1');
  const cov2 = document.querySelector('.cover2');
  const cov3 = document.querySelector('.cover3');
  const cov4 = document.querySelector('.cover4');
  const cov5 = document.querySelector('.cover5');
  const cov6 = document.querySelector('.cover6');
    cov3.style.animation = `navImgFadeOut 3s linear forwards 0s`;
    cov4.style.animation = `navImgFadeIn 3s linear forwards 0s`;
}

function navFade4() {

  const cov1 = document.querySelector('.cover1');
  const cov2 = document.querySelector('.cover2');
  const cov3 = document.querySelector('.cover3');
  const cov4 = document.querySelector('.cover4');
  const cov5 = document.querySelector('.cover5');
  const cov6 = document.querySelector('.cover6');
    cov4.style.animation = `navImgFadeOut 3s linear forwards 0s`;
    cov5.style.animation = `navImgFadeIn 3s linear forwards 0s`;
}

function navFade5() {

  const cov1 = document.querySelector('.cover1');
  const cov2 = document.querySelector('.cover2');
  const cov3 = document.querySelector('.cover3');
  const cov4 = document.querySelector('.cover4');
  const cov5 = document.querySelector('.cover5');
  const cov6 = document.querySelector('.cover6');
    cov5.style.animation = `navImgFadeOut 3s linear forwards 0s`;
    cov6.style.animation = `navImgFadeIn 3s linear forwards 0s`;
}

function navFade6() {

  const cov1 = document.querySelector('.cover1');
  const cov2 = document.querySelector('.cover2');
  const cov3 = document.querySelector('.cover3');
  const cov4 = document.querySelector('.cover4');
  const cov5 = document.querySelector('.cover5');
  const cov6 = document.querySelector('.cover6');
    cov6.style.animation = `navImgFadeOut 3s linear forwards 0s`;
    cov1.style.animation = `navImgFadeIn 3s linear forwards 0s`;
    setTimeout(navFade,8000)
    setTimeout(navFade2,16000)
    setTimeout(navFade3,24000)
    setTimeout(navFade4,32000)
    setTimeout(navFade5,40000)
}

const textInFade = () => {

  const txt = document.querySelectorAll('.text');

  document.addEventListener("DOMContentLoaded", () => {

    txt.forEach((link, index) => {
      link.style.animation = `navImgFadeIn 0.5s ease forwards ${index / 6 + 0.5}s`;
    });

  });
}

textInFade();
