const weather = {name: '', temp: null};

function hitAPI(location) {
    let apiJson = fetch('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=acf739538aa6ff0a52056b27277473f7', 
    { mode: 'cors' })
    .then(function(response) {
        let data = response.json();
        return data;
    })
    .then(function(data) {
        weather.name = data.name;
        weather.temp = data.main.temp;
    })  
    .catch(function(err) {
        return "There is some error";
    });
}

let apiJson = hitAPI('London,uk');
// console.log(apiJson);

// Set up a form 
let body = document.querySelector('body');
let container = document.createElement('container');
let form = document.createElement('form');
let location = document.createElement('input');
location.setAttribute('type', 'text');
let button = document.createElement('button');
button.textContent = 'Submit';
button.setAttribute('type', 'submit');

body.appendChild(container);
container.appendChild(form);
form.appendChild(location);
form.appendChild(button);

document.querySelector('form').addEventListener("submit", function(e){
    e.preventDefault();    //stop form from submitting      
    let formObj;
    let btn = e.target;
    let location = document.querySelector('input');   
    hitAPI(location.value);   
    showWeather(weather);   
    
});

const showWeather = (weatherObj) => {
    let message = document.createElement('p');
    message.innerText = `Temperature of ${weatherObj.name} is: ${weatherObj.temp}`;
    container.appendChild(message);
}
