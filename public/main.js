import './styles/base.scss';
import anime from 'animejs';

const iframe = document.querySelector('iframe');

// iframe.addEventListener('load', function() {
//   this.closest('.shot-image-sec .logo').setAttribute('style', 'display:none');
// });

const about = document.querySelector('#about');
const join = document.querySelector('#join');
const body = document.querySelector('body');

about.addEventListener('click', function() {
  this.classList.toggle('active');

  // let bodyBackground = anime({
  //   targets: 'body',
  //   background: 'linear-gradient(to bottom, rgba(146,205,217,1) 0%, rgba(246,246,246,1) 92%, rgba(255,255,255,1) 100%)',
  //   duration: 800
  // });
})
