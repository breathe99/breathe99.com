import './styles/base.scss';
import anime from 'animejs';

const iframe = document.querySelector('iframe');

// iframe.addEventListener('load', function() {
//   this.closest('.shot-image-sec .logo').setAttribute('style', 'display:none');
// });

const about = document.querySelector('#about');
const join = document.querySelector('#join');
const allText = document.querySelectorAll('.text div');
const aboutText = document.querySelector('#about-text');
const joinText = document.querySelector('#join-text');
const defaultText = document.querySelector('#default-text');
const body = document.querySelector('body');
const menuItems = document.querySelectorAll('.menu a');
const submit = document.querySelector('#submit');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const messages = document.querySelector('.message');

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
  // Validate the Form
  if (name.value == "" || email.value == "") {
    messages.classList.add('failed');
    messages.innerHTML = 'Please fill out all fields';
    return false;
  }
  else if (!validateEmail(email.value)) {
    messages.classList.add('failed');
    messages.innerHTML = 'Please enter a valid email';
    return false;
  }
  else {
    fetch('/emails', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'name=' + name.value + '&email=' + email.value
    }).then(function(response) {
      messages.classList.add('success');
      messages.innerHTML = 'Thank you!';
      email.value = "";
      name.value = "";
    }).catch(function(err) {
    	console.log(err);
    });
  }
});

// From http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

about.addEventListener('click', function() {
  switchDisplay(this, aboutText, joinText);
});

join.addEventListener('click', function() {
  switchDisplay(this, joinText, aboutText);
});

function switchDisplay(clickedEl, targetEl, elToHide) {
  if (clickedEl.classList.contains('active')) {
    // Clear state
    allText.forEach(el => {el.classList.remove('slideUp');})
    menuItems.forEach(el => {el.classList.remove('active');})
    defaultText.style.display = 'block';
    defaultText.classList.add('slideUp');
    body.classList.remove('active');
    targetEl.classList.remove('active');
  }
  else {
    allText.forEach(el => {el.classList.remove('slideUp');})
    menuItems.forEach(el => {el.classList.remove('active');})
    defaultText.style.display = 'none';
    clickedEl.classList.add('active');
    elToHide.classList.remove('active');
    targetEl.classList.add('active', 'slideUp');
    body.classList.add('active');
  }
}
