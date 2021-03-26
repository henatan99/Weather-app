import './assets/style.css';
import cloudyImg from './docs/cloudy.jpeg';
import sunnyImg from './docs/sunny.jpeg';
import cloudIcon from './docs/FreeVector-Cloud.jpg';
import sunIcon from './docs/sun_037.jpg';

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
weatherDiv.classList.add('weather');

const img = document.createElement('img');
img.classList.add('weather-img');
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

const weather = {
  name: '',
  temp: undefined,
  feels_like: undefined,
  temp_max: undefined,
  temp_min: undefined,
  humidity: undefined,
  clouds_all: undefined,
  clouds_cod: undefined,
};

const throwError = () => {
  const errorDiv = document.createElement('div');
  errorDiv.innerHTML = '<h1>The Browser can not fetch the weather!</h1>';
  container.appendChild(errorDiv);
  setTimeout(() => {
    errorDiv.innerHTML = '';
  }, 3000);
};

const showWeather = (weatherObj) => {
  img.src = weatherObj.clouds_all < 20 ? sunIcon : cloudIcon;
  temperature.innerText = `${Math.floor(weatherObj.temp - 273)} \xB0C`;
  cloud.innerText = weatherObj.clouds_all < 20 ? 'Sunny' : 'Cloudy';
  feel.innerText = `Feels Like ${Math.floor(weatherObj.feels_like - 273)} \xB0C`;
  container.style.backgroundImage = weatherObj.clouds_all < 20 ? `url(${cloudyImg})` : `url(${sunnyImg})`;
};


async function weatherCondition(location) {
  const key = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=acf739538aa6ff0a52056b27277473f7`;
  const response = await fetch(key, { mode: 'cors' });

  if (response.status === 400 || response.status === 404) {
    throwError();
  } else {
    const data = await response.json();
    weather.name = data.name;
    weather.temp = data.main.temp;
    weather.feels_like = data.main.feels_like;
    weather.temp_max = data.main.temp_max;
    weather.temp_min = data.main.temp_min;
    weather.humidity = data.main.humidity;
    weather.clouds_all = data.clouds.all;
    showWeather(weather);
  }
}

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault(); // stop form from submitting
  const location = document.querySelector('input');
  weatherCondition(location.value);
});
