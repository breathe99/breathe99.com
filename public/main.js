import './styles/base.scss';

const mask = document.querySelector('#mask');
const about = document.querySelector('#about');
const maskText = document.querySelector('#mask-text');
const maskTextInner = document.querySelectorAll('#mask-text p');
console.log(maskTextInner);
const joinText = document.querySelector('#about-text');
const joinTextInner = document.querySelectorAll('#about-text p');
const body = document.querySelector('body');
const menuItems = document.querySelectorAll('.menu a');
const signUp = document.querySelectorAll('#sign-up');
const signUpText = document.querySelector('#join-text');
const signUpTextInner = document.querySelectorAll('#join-text *');

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
  switchDisplay(this, maskText, maskTextInner);
});

about.addEventListener('click', function() {
  switchDisplay(this, joinText, joinTextInner);
});
[...signUp].forEach((s) => {
  s.addEventListener('click', function() {
    switchDisplay(this, signUpText, signUpTextInner);
  });
});

const switchDisplay = (clickedEl, targetEl, slideUpText) => {
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
    targetEl.classList.add('active');
    [...slideUpText].forEach(el => {el.classList.add('slideUp')});
  }
}
