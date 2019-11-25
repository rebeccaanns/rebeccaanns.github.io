var currentDate = new Date();
var dateString;

//current date 
var weekDayNum = currentDate.getDay();
var monthNum = currentDate.getMonth();

//day of week not number
var daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

var weekDay = daysOfWeek[weekDayNum];

var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

var monthName = months[monthNum];

dateString = weekDay + ", " + currentDate.getDate() + " " + monthName + " " + currentDate.getFullYear();

document.getElementById("currentDate").innerHTML = dateString;

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

//5 day forecast
let currentDay = weekDayNum;

for (let i = 1; i < 6; i++) {
    currentDay++;

    if (currentDay > 6) {
        currentDay = 0;
    }

    const element = document.getElementById(`day${i}`);

    element.innerHTML = daysOfWeek[currentDay];
}

//API for 5 day forecast
const apiForecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=e22134d7e2f991aa104d13141ea859d1&units=imperial";

fetch(apiForecastURL)
    .then((response) => response.json())
    .then((forecasts) => {
        //DEBUG
        console.log(forecasts);

        //loop through results
        forecasts.list.forEach(
            (forecast) => {
                let nextDate = new Date();
                nextDate.setDate(nextDate.getDate() + 1);
                let dateString = getDateString(nextDate);
                let hourString = "18:00:00";
                let counter = 1;

                forecasts.list.forEach(
                    (forecast) => {
                        if (forecast.dt_txt.includes(dateString) && forecast.dt_txt.includes(hourString)) {
                            // console.log(forecast.main.temp);

                            const temp = document.getElementById(`temp${counter}`);
                            temp.innerHTML = Math.round(forecast.main.temp) + "&deg;";

                            // const icon = document.getElementById(`icon${counter}`);
                            let apiIcon = forecast.weather[0].icon;
                            let currentImg = "https://openweathermap.org/img/w/" + apiIcon + ".png";
                            const description  = forecast.weather[0].description;

                            document.getElementById(`icon${counter}`).setAttribute('src', currentImg);
                            document.getElementById(`icon${counter}`).setAttribute('alt', description);
                            // icon.innerHTML = currentImg;

                            counter++;
                            nextDate.setDate(nextDate.getDate() + 1);
                            dateString = getDateString(nextDate);
                        }
                    }
                )
            }
        );
    });

function getDateString(date) {
    let dateString = date.getFullYear() + '-' +
        (date.getMonth() + 1) + '-' +
        date.getDate();
        
    return dateString;
}

// function icon() {
//     let currentIcon = currentWeather.weather[0].icon;
//         let currentImg = "https://openweathermap.org/img/w/" + currentIcon + ".png";
//         document.querySelector("#imagesrc").textContent = currentImg;
//         document.querySelector("#weather-icon").setAttribute('src', currentImg);
//         document.querySelector("#weather-icon").setAttribute("alt", currentWeather.weather[0].main);
// }

//pancake
if (weekDayNum === 5) {
    document.getElementById("pancake").removeAttribute("class", "hidden");
}

//storm severity
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}