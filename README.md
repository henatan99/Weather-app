# Weather-app
This project is building a weather app to search for temperature at any place in the world, using weather API and make handy use of promises  or preferably async/await functions. 

## Description 
The app uses an async function which takes the location name as an argument, and fetches weather data from openweather API. 
An await fetch function is used to fetch the weatherdata from the API and the response is assigned to a variable.
The await fetch function accepts the API url whose path is an constructed from, a location name and key accessed through subscription. 

### Form 
The from has a text input element and a submit button. A submit event listner function takes the text input and assigns it to the location. Then it calls the async function(weatherCondition) which takes the location as argument.

### The Weather Div Element 
The weather Div element is the wrapper element of the displays of the weather condition. 
It displays temperature, sky condition, feel_like temperature and the weather icon. 

### The aysnc - 'weatherCondition(location)' function
The watherCondition function is an async function which has amn await fetch function inside it. It fetches API data, assignes values to a weather objecta and calls the 'showWeather' function to display the weather data in the browser. 

### The showWeather function
The showWeather function accepts weather object as an argument and assignes the values as innerText to the respective HTML elements of the HTML skeleton. 

### Dynamic css
The showWeather function dynamically changes the background and the weather icon images based on the fetched weather condition. 

### Demo 
- Cloudy weather
![screenshot](src/docs/Screenshot1.png)
- Sunn weather
![screenshot](src/docs/Screenshot2.png)
- Error message 
![screenshot](src/docs/Screenshot3.png)

## Built With

- Javscript
- HTML/CSS
- Webpack 
- npm 
- package.json
- openweather API 

## Live Link
[Weather-app](https://henatan99.github.io/Weather-app/)

## Authors

👤 **Henok Mossissa**

- GitHub: [@henatan99](https://github.com/henatan99)
- Twitter: [@henatan99](https://twitter.com/henatan99)
- LinkedIn: [Henok Mossissa](https://www.linkedin.com/in/henok-mekonnen-2a251613/)

## :handshake: Contributing

Contributions, issues, and feature requests are welcome!

## Show your support

Give a :star:️ if you like this project!

## Acknowledgment 
- openweather 

## :memo: License

This project is [MIT](./LICENSE) licensed.