'use strict';

const sliderPrevButtonElm = document.querySelector('.prevButton');
const sliderNextButtonElm = document.querySelector('.nextButton');
const sliderParentDivElm = document.querySelector('.cart_slider_head');
const sliderDotsDiv = document.querySelector('.sliderDots');
const slidesdivElm = document.querySelectorAll('.cart_slider_inner_Cart');
const mobileTabsDotsElm = document.querySelector('.mobile_dots');
const dotsElm = document.querySelectorAll('.dots_elm');
const screenCartDiv = document.querySelectorAll('.screen_touch_div');
const mobileCartContentElm = document.querySelectorAll('.mobile_cart_content_elm');

// current target tab active
let currentDot = 0;

const showMobileText = function (target) {
    mobileCartContentElm.forEach((el, i) => {
        if (i === target) {
            el.classList.add('mobile_cart_content_active');
        } else {
            el.classList.remove('mobile_cart_content_active');
        }
    });
};

// remove all prev active class frm the dots
const removerAllActiveCl = function (elm) {
    elm.forEach((el) => {
        el.classList.remove('mobile_dots_active');
    });
};

// a function for target the current elm and adding class into them
const ativeElmShow = function (elemnt, target, cl) {
    elemnt.forEach((el, i) => {
        if (i === target) {
            el.classList.add(cl);
        }
    });
};

// loop over the dots elment
if (dotsElm) {
    dotsElm.forEach((el, i) => {
        el.addEventListener('click', function () {
            removerAllActiveCl(dotsElm);

            screenCartDiv.forEach((el) => {
                el.classList.remove('screen_active');
            });

            currentDot = i;

            showMobileText(currentDot);

            ativeElmShow(screenCartDiv, currentDot, 'screen_active');

            this.classList.add('mobile_dots_active');
        });
    });
}

// loop over the screen card div elements
if (screenCartDiv) {
    screenCartDiv.forEach((el, i) => {
        el.addEventListener('click', function () {
            currentDot = i;

            removerAllActiveCl(dotsElm);

            ativeElmShow(dotsElm, currentDot, 'mobile_dots_active');

            showMobileText(currentDot);

            screenCartDiv.forEach((el) => {
                el.classList.remove('screen_active');
            });

            this.classList.add('screen_active');
        });
    });
}

// let currentSlider = 0;
// let targetDotELm;
// let allDots;

// // create a dots for each slides elem
// const slidesDotsElm = function (id) {
//     const i = document.createElement('i');
//     i.setAttribute('class', 'fas fa-circle dots_elm');
//     i.setAttribute('id', `elmDot_${id}`);

//     sliderDotsDiv.append(i);

//     targetDotELm = document.querySelector(`#elmDot_${currentSlider}`);

//     targetDotELm.classList.add('cart_options_active');
// };

// slidesdivElm.forEach((el, i) => {
//     el.style.transform = `translateX(${i * 110}%)`;

//     // insert the dots elment for every sliders
//     slidesDotsElm(i);
// });

// const changeSlides = function () {
//     slidesdivElm.forEach((el, i) => {
//         el.style.transform = `translateX(${(i - currentSlider) * 110}%)`;
//     });
// };

// // remove all dots class
// const removeDotsCl = function () {
//     allDots = document.querySelectorAll('.dots_elm');

//     allDots.forEach((el) => {
//         el.classList.remove('cart_options_active');
//     });
// };

// // grab the all target dots elm
// const currentDotELm = function () {
//     targetDotELm = document.querySelector(`#elmDot_${currentSlider}`);

//     targetDotELm.classList.add('cart_options_active');
// };

// // when the user click on the next button the change slide to next
// const slideToNext = function () {
//     removeDotsCl();

//     if (currentSlider === slidesdivElm.length - 1) {
//         currentSlider = 0;
//         currentDotELm();

//         changeSlides();
//     } else {
//         currentSlider++;

//         currentDotELm();

//         changeSlides();
//     }
// };

// // when the user click on the prev button the change slide to prev
// const slideToPrev = function () {
//     removeDotsCl();

//     if (currentSlider === 0) {
//         currentSlider = slidesdivElm.length - 1;

//         currentDotELm();

//         changeSlides();
//     } else {
//         currentSlider--;

//         currentDotELm();

//         changeSlides();
//     }
// };

// // slide to the next slider
// sliderNextButtonElm.addEventListener('click', slideToNext);

// // slide to prev slider
// sliderPrevButtonElm.addEventListener('click', slideToPrev);

// // slide cards by scroll
// slidesdivElm.forEach((el) => {
//     el.addEventListener('dragstart', function (event) {
//         console.log(this);
//         console.log(event);
//     });
// });
