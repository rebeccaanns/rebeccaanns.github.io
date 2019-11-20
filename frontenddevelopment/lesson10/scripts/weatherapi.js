const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=e22134d7e2f991aa104d13141ea859d1&units=imperial";

fetch(apiURL)
    .then((response) => response.json())
    .then((currentWeather) => {
        //DEBUG
        console.log(currentWeather);

        let currentTemp = currentWeather.main.temp;
        document.querySelector("#current-temp").textContent = currentTemp;
        
        let currentIcon = currentWeather.weather[0].icon;
        let currentImg = "https://openweathermap.org/img/w/" + currentIcon + ".png";
        document.querySelector("#imagesrc").textContent = currentImg;
        document.querySelector("#weather-icon").setAttribute('src', currentImg);
        document.querySelector("#weather-icon").setAttribute("alt", currentWeather.weather[0].main);
    });