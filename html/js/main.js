"use strict";

$(document).ready(function () {
  photoSlider();
  wishSlider();
});

function photoSlider() {
  var swiper = new Swiper(".photo__slider-container", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".photo__next"
    },
    breakpoints: {
      1366: {
        spaceBetween: 30
      }
    }
  });
}

function wishSlider() {
  var swiper = new Swiper(".wish__slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    navigation: {
      prevEl: ".wish__prev",
      nextEl: ".wish__next"
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true
    },
    breakpoints: {
      1280: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
}