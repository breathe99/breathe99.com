import './styles/base.scss';
import anime from 'animejs';

const iframe = document.querySelector('iframe');

// iframe.addEventListener('load', function() {
//   this.closest('.shot-image-sec .logo').setAttribute('style', 'display:none');
// });

const about = document.querySelector('#about');
const join = document.querySelector('#join');
const aboutText = document.querySelector('#about-text');
const joinText = document.querySelector('#join-text');
const defaultText = document.querySelector('#default-text');
const body = document.querySelector('body');
const menuItems = document.querySelectorAll('.menu a');

menuItems.forEach(el => {
  el.addEventListener('click', function() {
    if (body.classList.contains('active')) {
      // do nothing
    }
    else {
      body.classList.toggle('active')
    }
  })
});

about.addEventListener('click', function() {
  switchDisplay(this, aboutText, joinText);
});

join.addEventListener('click', function() {
  switchDisplay(this, joinText, aboutText);
});

function switchDisplay(clickedEl, targetEl, elToHide) {
  menuItems.forEach(el => {el.classList.remove('active');})
  defaultText.style.display = 'none';
  if (clickedEl.classList.contains('active')) {
    // Do nothing
  }
  else {
    clickedEl.classList.toggle('active');
    elToHide.classList.remove('active');
    targetEl.classList.add('active');
    body.classList.add('active');
  }
}
