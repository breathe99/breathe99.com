'use strict';

$(document).ready(function () {
  // Mobile menu
  var mobile = $('.navbar__mobile');
  var hamburger = $('.ham');
  var close = $('.close');

  hamburger.click(function() {
    mobile.toggleClass('open');
  });
  close.click(function() {
    mobile.toggleClass('open');
  });
});
