
console.log('dom content loaded');
const cardsContainer = document.querySelector('.cards-container');
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');

function showOverlay(event) {
  console.log('clicked');
  const src = event.currentTarget.querySelector('img').src;
  overlayImage.src = src;
  overlay.classList.add('open');
}

function close() {
  overlay.classList.remove('open');
}

const cards = document.querySelectorAll('.card');
console.log(cards);

cards.forEach(card => card.addEventListener('click', showOverlay));

overlayClose.addEventListener('click', close);
console.log('hello');
console.log('loaded Cards.js');