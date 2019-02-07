const cardsContainer = document.querySelector('.cards-container');
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');

function showOverlay(event) {
  const { src } = event.currentTarget.querySelector('img');
  overlay.classList.add('open');
}

function close() {
  overlay.classList.remove('open');
}

const cards = document.querySelectorAll('.card');

cards.forEach(card => card.addEventListener('click', showOverlay));

overlayClose.addEventListener('click', close);
