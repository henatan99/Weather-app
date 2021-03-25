// Set up a page skeleton
const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');

const form = document.createElement('form');

const locationInput = document.createElement('input');
locationInput.setAttribute('type', 'text');
const button = document.createElement('button');
button.textContent = 'Submit';
button.setAttribute('type', 'submit');

const weatherDiv = document.createElement('div');
const img = document.createElement('img');
const temperature = document.createElement('h1');
const cloud = document.createElement('h2');
const feel = document.createElement('p');

form.appendChild(locationInput);
form.appendChild(button);

weatherDiv.appendChild(img);
weatherDiv.appendChild(temperature);
weatherDiv.appendChild(cloud);
weatherDiv.appendChild(feel);

container.appendChild(form);
container.appendChild(weatherDiv);

body.appendChild(container);
// 

// Fetch api 
const weather = {
    name: '', 
    temp: undefined, 
    feels_like: undefined,
    temp_max: undefined,
    temp_min: undefined,
    humidity: undefined,
    clouds_all: undefined,
    clouds_cod: undefined
};

async function weatherCondition(location) {
    let key = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=acf739538aa6ff0a52056b27277473f7`; 
    const response = await fetch(key, { mode: 'cors' });

    if(response.status === 400 || response.status === 404) {
        throwError(); 
    } else {
        let data = await response.json();
        weather.name = data.name;
        weather.temp = data.main.temp;
        weather.feels_like = data.main.feels.like;
        weather.temp_max = data.main.temp_max;
        weather.temp_min = data.main.temp_min;
        weather.humidity = data.main.humidity;
        weather.clouds_all = data.clouds.all;
        weather.clouds_cod = data.clouds.cod;
        console.log(data);
        showWeather(weather);
    }
}

// Submit event listener
document.querySelector('form').addEventListener("submit", function(e){
    e.preventDefault();    //stop form from submitting     
    let location = document.querySelector('input');   
    weatherCondition(location.value);
});

// display weather function
const showWeather = (weatherObj) => {
    temperature.innerText = weather.temp;    
}

// error message 

const throwError = () => {    
    let errorDiv = document.createElement('div');
    errorDiv.innerHTML = '<h1>The Browser can not fetch the weather!</h1>';
    container.appendChild(errorDiv);
}