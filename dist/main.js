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


function hitAPI(location) {
    let apiJson = fetch('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=acf739538aa6ff0a52056b27277473f7', 
    { mode: 'cors' })
    .then(function(response) {
        return response.json();
    })
    // .then(function(response) {
    //     return JSON.parse(response);
    // })   
    .catch(function(err) {
        //Error 
    });
    return apiJson; 
}

let apiJson = hitAPI('London,uk');
console.log(apiJson);

// Set up a form 
let body = document.querySelector('body');
let container = document.createElement('container');
let form = document.createElement('form');
let location = document.createElement('input');
location.setAttribute('type', 'text');
let button = document.createElement('button');
button.textContent = 'Submit';

body.appendChild(container);
container.appendChild(form);
form.appendChild(location);
form.appendChild(button);


/******/ })()
;