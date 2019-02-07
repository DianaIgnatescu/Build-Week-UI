const menuToggle = document.querySelector('.menu-toggle');

const toggleMenu = (menu) => {
  menuToggle.classList.toggle('expanded');
  menu.classList.toggle('expanded');
};

const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => toggleMenu(menu));

TweenMax.from('h1', 1, { y: -50 });
TweenMax.to('h1', 1, { y: 0 });
