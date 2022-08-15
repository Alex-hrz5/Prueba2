'use strict';

const documentReady = () => {
  const heroTitle = document.querySelector('.hero__title');
  const heroButtonSi = document.getElementById('heroButtonSi');
  const heroButtonNo = document.querySelector('#heroButtonNo');

  const ahoraEresMiPrometida = () => {
    alert('💞 Siiuuuu, ahora somos Partner 💞');
    alert('😱🥰Nuestra boda is Mañana🥰😱');
    alert('💞🥰Felices 2 meses mi amooooorrr!!🥰💞')
    location.href = 'https://www.youtube.com/watch?v=SmF4wY7U7QE';
  };

  const evitarKCRompanMyBobo = () => {
    heroButtonNo.style.position = 'absolute';
    heroButtonNo.style.top = (Math.random() * window.innerHeight) + 'px';
    heroButtonNo.style.left = (Math.random() * window.innerWidth) + 'px';
  };

  const partner = prompt('🥰 Dame tu name 🥰');
  heroTitle.innerHTML += partner + ' ❤';

  heroButtonSi.addEventListener('click', ahoraEresMiPrometida);
  heroButtonNo.addEventListener('mouseover', evitarKCRompanMyBobo);
};

document.addEventListener('DOMContentLoaded', documentReady);