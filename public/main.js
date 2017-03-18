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
const submit = document.querySelector('#submit');
const name = document.querySelector('#name');
const email = document.querySelector('#email');

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

submit.addEventListener('click', function() {
  fetch('/emails', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'name=' + name.value + '&email=' + email.value
  }).then(function(response) {
    console.log(response);
	  console.log('worked!');
  }).catch(function(err) {
  	console.log(err);
  });
});

about.addEventListener('click', function() {
  switchDisplay(this, aboutText, joinText);
});

join.addEventListener('click', function() {
  switchDisplay(this, joinText, aboutText);
});

function switchDisplay(clickedEl, targetEl, elToHide) {
  if (clickedEl.classList.contains('active')) {
    // Clear state
    menuItems.forEach(el => {el.classList.remove('active');})
    defaultText.style.display = 'block';
    body.classList.remove('active');
    targetEl.classList.remove('active');
  }
  else {
    menuItems.forEach(el => {el.classList.remove('active');})
    defaultText.style.display = 'none';
    clickedEl.classList.add('active');
    elToHide.classList.remove('active');
    targetEl.classList.add('active');
    body.classList.add('active');
  }
}
