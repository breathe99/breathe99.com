/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var mask = document.querySelector('#mask');
var about = document.querySelector('#about');
var maskText = document.querySelector('#mask-text');
var maskTextInner = document.querySelectorAll('#mask-text p');
console.log(maskTextInner);
var joinText = document.querySelector('#about-text');
var joinTextInner = document.querySelectorAll('#about-text p');
var body = document.querySelector('body');
var menuItems = document.querySelectorAll('.menu a');
var signUp = document.querySelectorAll('#sign-up');
var signUpText = document.querySelector('#join-text');
var signUpTextInner = document.querySelectorAll('#join-text *');

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

var allText = [maskText, joinText, signUpText];

mask.addEventListener('click', function () {
  switchDisplay(this, maskText, maskTextInner);
});

about.addEventListener('click', function () {
  switchDisplay(this, joinText, joinTextInner);
});
[].concat(_toConsumableArray(signUp)).forEach(function (s) {
  s.addEventListener('click', function () {
    switchDisplay(this, signUpText, signUpTextInner);
  });
});

var switchDisplay = function switchDisplay(clickedEl, targetEl, slideUpText) {
  if (clickedEl.classList.contains('active')) {
    // Clear state
    [].concat(allText).forEach(function (el) {
      el.classList.remove('slideUp');
    });
    [].concat(allText).forEach(function (el) {
      el.classList.remove('active');
    });
    [].concat(_toConsumableArray(menuItems)).forEach(function (el) {
      el.classList.remove('active');
    });
    targetEl.classList.remove('active');
  } else {
    [].concat(allText).forEach(function (el) {
      el.classList.remove('slideUp');
    });
    [].concat(allText).forEach(function (el) {
      el.classList.remove('active');
    });
    [].concat(_toConsumableArray(menuItems)).forEach(function (el) {
      el.classList.remove('active');
    });
    clickedEl.classList.add('active');
    targetEl.classList.add('active');
    [].concat(_toConsumableArray(slideUpText)).forEach(function (el) {
      el.classList.add('slideUp');
    });
  }
};

/***/ })
/******/ ]);