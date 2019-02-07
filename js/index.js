TweenMax.from('.right-content', 2, { x: 200 });
TweenMax.to('.right-content', 2, { x: 0 });

TweenMax.from('.left-content', 2, { x: -200 });
TweenMax.to('.left-content', 2, { x: 0 });

TweenMax.from('.tabs', 2, { scale: 0.5 });
TweenMax.to('.tabs', 2, { scale: 1 });

let testimonialsHasLoaded = false;
window.addEventListener('scroll', () => {
  if (!testimonialsHasLoaded) {
    TweenMax.from('.testimonials', 2, { x: -200 });
    TweenMax.to('.testimonials', 2, { x: 0 });
    testimonialsHasLoaded = true;
  }
});


// ====LAZY LOAD IMAGES===== ///

const lazy = () => {
  document.addEventListener('lazyloaded', (e) => {
    e.target.parentNode.classList.add('image-loaded');
    TweenMax.from(e.target, 1.5, { scale: 0 });
    TweenMax.to(e.target, 1.5, { scale: 1 });
    // TweenMax.from(e.target, 2, { opacity: 0 });
    // TweenMax.to(e.target, 2, { opacity: 1 });
  });
};

lazy();

// =====ACTIVE PAGE=====//

function underlineOnlyActiveElement(element) {
  document.querySelectorAll('.menu li').forEach((menuLink) => {
    // eslint-disable-next-line
    menuLink.style.textDecoration = 'none';
  });
  // eslint-disable-next-line
  element.style.color = '#FBC441';
}

switch (window.location.pathname) {
  case '/home-artist.html':
    underlineOnlyActiveElement(document.querySelector('.create'));
    break;
  case '/index.html':
    underlineOnlyActiveElement(document.querySelector('.home'));
    break;
  case '/about.html':
    underlineOnlyActiveElement(document.querySelector('.about'));
    break;
  default:
    break;
}
