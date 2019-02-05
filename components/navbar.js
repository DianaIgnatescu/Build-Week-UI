const toggleMenu = (menu) => {
  menuToggle.classList.toggle('expanded');
  menu.classList.toggle('expanded');
};

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => toggleMenu(menu));
