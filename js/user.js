// ==== CHANGE BUTTON TO FOLLOWING ON CLICK === //

const following = document.getElementById('follow');
following.addEventListener('click', () => {
  if (following.textContent === 'Following') {
    following.textContent = 'Follow';
    following.style.backgroundColor = '#676D85';
    following.style.color = '#BEBEBE';
    following.style.transition = '1s ease';
  } else {
    following.textContent = 'Following';
    following.style.backgroundColor = '#FBC441';
    following.style.transition = '1s ease';
    following.style.color = '#3D3A4F';
  }
});

const showcase = document.querySelector('.profile');
showcase.addEventListener('load', () => {
  TweenMax.from('.profile', 1, { scale: 1.1 });
  TweenMax.to('.profile', 1, { scale: 1 });
  showcase.style.boxShadow = '0px 1px 10px 2px #3D3A4F';
  showcase.style.cursor = 'pointer';
});

// == ALERT IF NO IMAGE UPLOADED == //

const check = document.getElementById('share');
check.addEventListener('click', () => {
  alert('You must upload a picture before submitting!');
});
