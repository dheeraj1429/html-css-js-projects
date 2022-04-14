'use strict';

const bannerSectionDiv = document.querySelector('.hover_Section');
const hoverEffectDiv = document.querySelectorAll('.hover_effect');
const banneVideo = document.querySelector('.banner_vide_div');
const bannerCarDiv = document.querySelector('.banner_card img');
const cursor = document.querySelector('.cursor');
const arrowEL = document.querySelector('.arrowEL');
const ifon = document.querySelector('.ifon');
const lineVideo = document.querySelector('.lineVideo');
const appSection = document.querySelector('.appSection');
const bannerVideoDiv = document.querySelector('.banner_vide_div');
const videoEL = document.querySelector('.video_em');
const bannerImageDiv = document.querySelector('.banner_image_div');
const animationImageCard = document.querySelector('.animiImage_card');
const AppSectionDiv = document.querySelectorAll('.app_section');

// image threshold
const THRESHOLD = 20;

// background images data
const data = [
   {
      id: 0,
      url: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
   },
   {
      id: 1,
      url: 'https://images.unsplash.com/photo-1508182314998-3bd49473002f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
   },
   {
      id: 2,
      url: 'https://images.unsplash.com/photo-1493708638467-241317300c83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
   },
   {
      id: 3,
      url: 'https://images.unsplash.com/photo-1512850183-6d7990f42385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
   },
   {
      id: 4,
      url: 'https://images.unsplash.com/photo-1520330979108-7d66e04b35e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
   },
   {
      id: 5,
      url: 'https://images.unsplash.com/photo-1522314300028-8d1930f099eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
   },
   {
      id: 6,
      url: 'https://images.unsplash.com/photo-1441823120971-04969db3f294?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
   },
   {
      id: 7,
      url: 'https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
   },
   {
      id: 8,
      url: 'https://images.pexels.com/photos/4499765/pexels-photo-4499765.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
   },
];

// mouse enter animation
hoverEffectDiv.forEach((el, idx) => {
   el.addEventListener('mouseenter', function () {
      bannerSectionDiv.style.backgroundImage = `url(${data[idx].url})`;
   });
});

// cursor animation
document.addEventListener('mousemove', (e) => {
   cursor.setAttribute('style', 'top: ' + (e.pageY - 10) + 'px; left: ' + (e.pageX - 10) + 'px;');
});

document.addEventListener('click', () => {
   cursor.classList.add('expand');

   setTimeout(() => {
      cursor.classList.remove('expand');
   }, 500);
});

// arrow animation animation
const arrowFunction = function () {
   setInterval(() => {
      if (arrowEL.classList.contains('animi')) {
         arrowEL.classList.remove('animi');
      } else {
         arrowEL.classList.add('animi');
      }
   }, 3000);
};

arrowFunction();

// change image (scale, scroll and animation in hover);
const changeAnimationFunction = function (e) {
   const { clientX, clientY, currentTarget } = e;

   const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

   const horizontal = (clientX - offsetLeft) / clientWidth;
   const vertical = (clientY - offsetTop) / clientHeight;

   const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
   const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

   //  transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
   bannerImageDiv.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1.1, 1.1, 1.1)`;
};

// Changet the hover animation when the mouse is leave
const removeChaneAnimation = function () {
   this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
};

// Events
// Hover Animation
bannerImageDiv.addEventListener('mousemove', changeAnimationFunction);
// Remove Animation
bannerImageDiv.addEventListener('mouseleave', removeChaneAnimation);

/*
// currst video el
let currentVideEl = 0;

// change banner video animation
const changeVideoAnimation = function () {
  let videoElDom = document.querySelector('.video_em');

  // campare the vide duration and time
  videoElDom.addEventListener('timeupdate', function () {
    const duration = videoElDom.duration;
    const currentTime = videoElDom.currentTime;

    const timer = Math.trunc((currentTime / duration) * 100);

    if (timer === 0) {
      currentVideEl = (currentVideEl + 1) % videoData.length;
      videoElDom.src = videoData[currentVideEl].el;
    }
  });
};

changeVideoAnimation();
*/

// const videoAnimationFunction = function () {
//    // for the banner animation effect
//    let a = 100;

//    // hide the video when the use comes into the website
//    banneVideo.style.display = 'none';

//    // Show Video effect
//    const showVideoEf = function () {
//       let b = -100;

//       const showEf = function () {
//          setInterval(() => {
//             b++;
//             if (b >= 100) {
//                return;
//             } else {
//                banneVideo.style.display = 'block';
//                banneVideo.style.opacity = `.${b}`;

//                requestAnimationFrame(showEf);
//             }
//          }, 100);
//       };

//       // change banner video animation
//       // changeVideoAnimation();

//       window.requestAnimationFrame(showEf);
//    };

//    // remove banner section image fade effect
//    const animationEf = function () {
//       setInterval(() => {
//          a--;
//          if (a <= -1) {
//             return;
//          } else {
//             if (a == 0) {
//                bannerCarDiv.style.display = 'none';

//                banneVideo.style.display = 'block';
//                showVideoEf();
//             }

//             bannerCarDiv.style.opacity = `.${a}`;
//             requestAnimationFrame(animationEf);
//          }
//       }, 100);
//    };

//    window.requestAnimationFrame(animationEf);
// };

// videoAnimationFunction();

// Scroll Images Animation

// const option = {
//    root: null,
//    threshold: 0,
//    rootMargin: '-120px',
// };

// const callBack = function (entries, observe) {
//    entries.forEach((el) => {
//       const targetImg = document.querySelector(`#${el.target.id}_img`);
//       if (!el.isIntersecting) {
//          return;
//       } else {
//          targetImg.classList.add('app_image');
//          observe.unobserve(el.target);
//       }
//    });
// };

// const observer = new IntersectionObserver(callBack, option);

// AppSectionDiv.forEach((el) => {
//    observer.observe(el);
// });
