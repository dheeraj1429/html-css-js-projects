'use strict';
const themeChange = document.querySelector('.themeChange i');

// const cursor = document.querySelector('.-opaque');

// Video data
const videoData = [
   {
      el: './assets/vedios/Hologram Planet By Nuva Preview.m4v',
   },
   {
      el: './assets/vedios/Earth Sun Over Top.m4v',
   },
   {
      el: 'https://static.videezy.com/system/resources/previews/000/007/313/original/Plexus.mp4',
   },
];

// theme Change
const changeThemeFunction = function () {
   themeChange.style.color = '#fff';
   let videoElDom = document.querySelector('.video_em');

   themeChange.addEventListener('click', function () {
      document.body.classList.toggle('light_theme');

      if (themeChange.classList.contains('fa-moon')) {
         themeChange.classList.replace('fa-moon', 'fa-sun');
         window.localStorage.setItem('theme', 'white');
         videoElDom.src = './assets/vedios/pexels-mart-production-7565622.mp4';
      } else {
         themeChange.classList.replace('fa-sun', 'fa-moon');
         window.localStorage.setItem('theme', 'black');
         videoElDom.src = './assets/vedios/Digital Grapes.m4v';
      }
   });
};

changeThemeFunction();

const changeColorTheme = function () {
   const themeColor = window.localStorage.getItem('theme');
   let videoElDom = document.querySelector('.video_em');

   if (themeColor === 'black') {
      themeChange.classList.replace('fa-sun', 'fa-moon');
      videoElDom.src = './assets/vedios/Digital Grapes.m4v';
   } else if (themeColor === 'white') {
      themeChange.classList.replace('fa-moon', 'fa-sun');
      document.body.classList.add('light_theme');
      videoElDom.src = './assets/vedios/pexels-mart-production-7565622.mp4';
   } else {
      return;
   }
};

changeColorTheme();
