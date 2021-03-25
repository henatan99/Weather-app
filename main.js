/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// if(window.XMLHttpRequest) {
//     request = new XMLHttpRequest();    
// } else if (window.ActiveXObject) {
//     try {
//         request = new ActiveXObject('Msxml2.XMLHTTP');
//     }
//     catch(e) {
//         try {
//             request = new ActiveXObject('Microsoft.XMLHTTP');
//         }
//         catch (e) {}
//     }
// }


// const body = document.querySelector('body');
// const img = document.createElement('img');
// body.appendChild(img);

// fetch('https://api.giphy.com/v1/gifs/translate?api_key=dAZSN0yBeED6SEHsceOhqodbVRnXAc6a&s=cats', 
// { mode: 'cors' })
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(response) {
//         img.src = response.data.images.original.url;
//     })
//     .catch(function(err) {
//         //Error 
//     });

function url(location) {
    return 'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=acf739538aa6ff0a52056b27277473f7';
} 

fetch(url('London,uk'), { mode: 'cors' })
    .then(function(response) {
        console.log(response.json());
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(err) {
        //Error 
    });
/******/ })()
;