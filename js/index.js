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

// ==== CHANGE BUTTON TO FOLLOWING ON CLICK === //

// const following = document.getElementById('follow');
// console.log(following);
// following.addEventListener('click', () => {
//   following.textContent = 'Following';
// });


const following = document.getElementById('follow');
following.addEventListener('click', () => {
  if (following.textContent === 'Following') {
    following.textContent = 'Follow';
    following.style.backgroundColor = '#676D85';
    following.style.transition = '1s ease';
  } else {
    following.textContent = 'Following';
    following.style.backgroundColor = '#F5A623';
    following.style.transition = '1s ease';
  }
});
