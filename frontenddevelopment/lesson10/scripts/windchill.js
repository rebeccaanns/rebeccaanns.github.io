//API
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=e22134d7e2f991aa104d13141ea859d1&units=imperial";

fetch(apiURL)
    .then((response) => response.json())
    .then((currentWeather) => {
        //DEBUG
        console.log(currentWeather);

        let currentTemp = currentWeather.main.temp;
        let windSpeed = currentWeather.wind.speed;
        let windChill;
        let humidity = currentWeather.main.humidity;
        let high = currentWeather.main.temp_max;

        if (currentTemp <= 50 && windSpeed > 3) {
            windChill = 35.74 + 0.6215 * currentTemp - 35.75 * Math.pow(windSpeed, 0.16) + .4275 * currentTemp * Math.pow(windSpeed, .16);
        }

        document.getElementById("currentTemp").innerHTML = Math.round(currentTemp) + "&deg; F";
        document.getElementById("windSpeed").innerHTML = windSpeed + " mph";

        if (windChill === 0) {
            document.getElementById("windChill").innerHTML = "N/A";
        } else {
            document.getElementById("windChill").innerHTML = Math.round(windChill) + "&deg; F";
        }

        document.getElementById("humidity").innerHTML = humidity + "%";

        document.getElementById("highTemp").innerHTML = Math.round(high) + "&deg; F";
    });