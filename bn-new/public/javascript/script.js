"use strict";

const fadeUpElem = document.querySelectorAll(".fade_up");

const Option = {
    root: null,
    threshold: 0,
    rootMargin: "00px",
};

const callBack = function (entries, observe) {
    entries.forEach((el) => {
        const target = el.target;

        if (!el.isIntersecting) {
            fadeUpElem.forEach((elm) => {
                elm.classList.add("fade_down");
                target.classList.remove("fade_up");
            });
        }

        if (el.isIntersecting) {
            target.classList.remove("fade_down");
            target.classList.add("fade_up");
        }
    });
};

const observer = new IntersectionObserver(callBack, Option);

fadeUpElem.forEach((el) => {
    observer.observe(el);
});
