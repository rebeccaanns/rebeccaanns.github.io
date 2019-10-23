let currentTemp = 41;
let windSpeed = 8;
let windChill;
if (currentTemp <= 50 && windSpeed > 3){
    windChill = 35.74 + 0.6215 * currentTemp + (0.4275 * currentTemp - 35.75) * Math.pow(windSpeed, 0.16);
}

document.getElementById("currentTemp").innerHTML = currentTemp + "&deg;";
document.getElementById("windSpeed").innerHTML = windSpeed + " mph";
document.getElementById("windChill").innerHTML = Math.round(windChill) + "&deg;";