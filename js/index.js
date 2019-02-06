TweenMax.from('.right-content', 2, { x: 200 });
TweenMax.to('.right-content', 2, { x: 0 });

TweenMax.from('.left-content', 2, { x: -200 });
TweenMax.to('.left-content', 2, { x: 0 });

TweenMax.from('.tabs', 2, { scale: 0.5 });
TweenMax.to('.tabs', 2, { scale: 1 });


const scrollEvent = document.querySelector('.bottom-content');
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
    TweenMax.from(e.target, 2, { opacity: 0 });
    TweenMax.to(e.target, 2, { opacity: 1 });
    // e.target.parentNode.classList.remove('loading');
    // e.target.parentNode.classList.remove(effect);
  });
};

lazy();

// =====ACTIVE PAGE=====//

function underlineOnlyActiveElement(element) {
  document.querySelectorAll('.menu li').forEach((menuLink) => {
    menuLink.style.textDecoration = 'none';
  });
  element.style.textDecoration = 'underline';
  element.style.color = 'orange';
}

switch (window.location.pathname) {
  case '/home-artist.html':
    underlineOnlyActiveElement(document.querySelector('.create'));
    break;
  case '/index.html':
    underlineOnlyActiveElement(document.querySelector('.home'));
    break;
  default:
    break;
}

TweenMax.from('.signin-box', 4, { y: 500 });
TweenMax.to('.signin-box', 4, { y: 0 });