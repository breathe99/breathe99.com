import './styles/base.scss';

const mask = document.querySelector('#mask');
const about = document.querySelector('#about');
const allText = document.querySelectorAll('.text div');
const maskText = document.querySelector('#mask-text');
const joinText = document.querySelector('#about-text');
const body = document.querySelector('body');
const menuItems = document.querySelectorAll('.menu a');

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

mask.addEventListener('click', function() {
  switchDisplay(this, maskText, joinText);
});

about.addEventListener('click', function() {
  switchDisplay(this, joinText, maskText);
});

const switchDisplay = (clickedEl, targetEl, elToHide) => {
  if (clickedEl.classList.contains('active')) {
    // Clear state
    [...allText].forEach(el => {el.classList.remove('slideUp');});
    [...menuItems].forEach(el => {el.classList.remove('active');});
    targetEl.classList.remove('active');
  }
  else {
    [...allText].forEach(el => {el.classList.remove('slideUp');});
    [...menuItems].forEach(el => {el.classList.remove('active');});
    clickedEl.classList.add('active');
    elToHide.classList.remove('active');
    targetEl.classList.add('active', 'slideUp');
  }
}
