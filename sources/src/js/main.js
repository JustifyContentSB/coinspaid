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
            clickable: true,
        },
        navigation: {
            nextEl: ".photo__next",
        },
        breakpoints: {
            1366: {
                spaceBetween: 30,
            }
        },
    });
}

function wishSlider() {
    var swiper = new Swiper(".wish__slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false,
        navigation: {
            prevEl: ".wish__prev",
            nextEl: ".wish__next",
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
        breakpoints: {
            1280: {
                slidesPerView: 'auto',
                spaceBetween: 30,
            }
        },
    });
}

var wrapper = document.querySelector('.header__slider'),
    marquee = document.querySelector('.header__slider-inner'),
    wrapperWidth = wrapper.offsetWidth,
    marqueeWidth = marquee.scrollWidth;

function move() {
    var currentTX = getComputedStyle(marquee).transform.split(',');
    if (currentTX[4] === undefined) {
        currentTX = -1;
    } else {
        currentTX = parseFloat(currentTX[4]) - 1;
    }

    if (-currentTX >= marqueeWidth) {
        marquee.style.transform = 'translateX(' + wrapperWidth + 'px)';

    } else {
        marquee.style.transform = 'translateX(' + currentTX + 'px)';
    }
}

var interval = setInterval(move, 20);