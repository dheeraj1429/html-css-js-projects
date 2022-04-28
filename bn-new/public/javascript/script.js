(function (window) {
    "use strict";

    // ** global variables ** //
    let showAndHide = false,
        targetElm;

    // ** for grab the dom elem and if the element find then return the target element ** //
    const _grabDomelm = function (elem, optionsObject) {
        if (optionsObject && optionsObject.elements) {
            if (optionsObject.elements === "many" || optionsObject.elements >= 1) {
                targetElm = document.querySelectorAll(`${elem}`);
            } else {
                targetElm = document.querySelector(`${elem}`);
            }
        } else {
            targetElm = document.querySelector(`${elem}`);
        }

        return targetElm;
    };

    const livFn = function () {
        // ** the global object to store the variabl and function ** //
        const _libraryObj = {};

        // ** grab the elem from the dom adding the style into the that dom elm ** //
        _libraryObj.styleDomElement = function (elem, options) {
            const domElm = _grabDomelm(elem);

            if (options && domElm) {
                for (const property in options) {
                    domElm.style[`${property}`] = `${options[property]}`;
                }
            }

            return domElm;
        };

        // scroll down animation
        _libraryObj.scroll = function (elem, options) {
            const targetElem = _grabDomelm(elem, options);

            // ** animation options object ** //
            const Option = {
                root: null,
                threshold: 0,
                rootMargin: `${options.rootMargin}px`,
            };

            // ** create the observer for targeting the dom elems section ** //
            const observer = new IntersectionObserver(function (entries, observe) {
                entries.forEach((el) => {
                    const target = el.target;

                    if (!el.isIntersecting) {
                        targetElem.forEach((elm) => {
                            elm.classList.add(`${options.class}`);
                            target.classList.remove(`${options.removeClass}`);
                        });
                    }

                    if (el.isIntersecting) {
                        target.classList.remove(`${options.class}`);
                        target.classList.add(`${options.removeClass}`);
                    }
                });
            }, Option);

            // ** loop over all target elements ** //
            targetElem.forEach((el) => {
                observer.observe(el);
            });
        };

        // ** toggle function ** //
        _libraryObj.toggle = function (elem, options) {
            // ** Get the element from the dom ** //
            const targetToggle = _grabDomelm(elem, options);

            // ** if taretToggle function return the null undifiend then return nothing from this function ** //
            if (!targetToggle) return;

            if (options.targetButton) {
                const targetButtonElm = _grabDomelm(`.${options.targetButton}`);

                targetButtonElm.addEventListener("click", function () {
                    //  ** show and hide the popup box with the candition, if the popup has the class then remove the class from the popup || add the class into the popup ** //
                    if (!targetToggle.classList.contains(`${options.elementClass}`)) {
                        targetToggle.classList.add(`${options.elementClass}`);
                        showAndHide = true;

                        _grabDomelm("body").style.overflow = "hidden";
                    } else {
                        targetToggle.classList.remove(`${options.elementClass}`);
                        showAndHide = false;

                        _grabDomelm("body").style.overflow = "scroll";
                    }
                });
            } else return;

            // ** add the event lisner to the overlay div to controll the inner form if the event target is match then remove the form from the dom ** //
            window.addEventListener("click", function (eve) {
                const targetElm = eve.target;

                if (targetElm.classList.contains(`${options.elementClass}`)) {
                    targetToggle.classList.remove(`${options.elementClass}`);

                    _grabDomelm("body").style.overflow = "scroll";
                }
            });
        };

        // ** slider animation ** //
        _libraryObj.slider = function (elem, options) {
            // ** all sliders inner card div elements ** //
            let sliderItems;

            // ** grab the slider parent div from the dom ** //
            const sliderDiv = _grabDomelm(elem);

            if (options) {
                sliderItems = _grabDomelm(options.slidersItemClass, options);
            }

            if (!sliderDiv) return;

            if (options && options.slidersItemClass) {
                sliderItems.forEach((el, i) => {
                    if (el.classList.contains("items_sliders")) {
                        // ** adding style into the slider inner components ** //
                        el.style.transform = `translateX(${i * 100}%)`;
                    }
                });
            }

            // ** remove the slider class from the object and also remove the elemts values from the object to loop over the style and apply into the slider parent element ** //
            if (elem && options) {
                if (options.slidersItemClass) delete options.slidersItemClass;
                if (options.elements) delete options.elements;

                // ** set the style property into the parent div ( slider div ) ** //
                for (const property in options) {
                    sliderDiv.style[`${property}`] = `${options[property]}`;
                }
            }

            // ** if the user click on the slider div then grab the postions and add the style into the child sliders, when the user grab the slider then changes the slider inner cards postion ** //

            // *********************************** //
        };

        return _libraryObj;
    };

    // ** when the library object is undefined then return the libray object by calling the function ** //
    if (typeof window.myWindowGlobalLv === "undefined") {
        window.myWindowGlobalLv = livFn();
    }
})(window);

// for testing and calling the function
myWindowGlobalLv.scroll(".fade_up", { elements: 3, rootMargin: 0, class: "fade_down", removeClass: "fade_up" });
myWindowGlobalLv.toggle(".popUpOverLayDiv", { elementClass: "show_popUp", targetButton: "Appoiontment_button" });
// myWindowGlobalLv.slider(".slider", {
//     slidersItemClass: ".items_sliders",
//     elements: 4,
//     width: "1600px",
//     height: "400px",
//     border: "1px solid red",
// });
