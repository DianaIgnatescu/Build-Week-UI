const toggleMenu = (menu) => {
  menuToggle.classList.toggle('expanded');
  menu.classList.toggle('expanded');
};

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => toggleMenu(menu));

TweenMax.from('.navigation', 2, {y: -50});
TweenMax.to('.navigation', 2, {y: 0});

