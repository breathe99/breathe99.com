import './styles/base.scss';

const mask = document.querySelector('#mask');
const about = document.querySelector('#about');
const maskText = document.querySelector('#mask-text');
const joinText = document.querySelector('#about-text');
const body = document.querySelector('body');
const menuItems = document.querySelectorAll('.menu a');
const signUp = document.querySelectorAll('#sign-up');
const signUpText = document.querySelector('#join-text');

// [...menuItems].forEach(el => {
//   el.addEventListener('click', function() {
//     if (body.classList.contains('active')) {
//       // do nothing
//     }
//     else {
//       body.classList.toggle('active')
//     }
//   })
// });

const allText = [maskText, joinText, signUpText];

mask.addEventListener('click', function() {
  switchDisplay(this, maskText);
});

about.addEventListener('click', function() {
  switchDisplay(this, joinText);
});
[...signUp].forEach((s) => {
  s.addEventListener('click', function() {
    switchDisplay(this, signUpText);
  });
});

const switchDisplay = (clickedEl, targetEl) => {
  if (clickedEl.classList.contains('active')) {
    // Clear state
    [...allText].forEach(el => {el.classList.remove('slideUp');});
    [...allText].forEach(el => {el.classList.remove('active');});
    [...menuItems].forEach(el => {el.classList.remove('active');});
    targetEl.classList.remove('active');
  }
  else {
    [...allText].forEach(el => {el.classList.remove('slideUp');});
    [...allText].forEach(el => {el.classList.remove('active');});
    [...menuItems].forEach(el => {el.classList.remove('active');});
    clickedEl.classList.add('active');
    targetEl.classList.add('active', 'slideUp');
  }
}
