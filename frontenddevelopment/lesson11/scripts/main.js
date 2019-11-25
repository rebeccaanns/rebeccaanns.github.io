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

function getFiveDay(cityID) {
    //API for 5 day forecast
    const apiForecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&appid=e22134d7e2f991aa104d13141ea859d1&units=imperial";

    fetch(apiForecastURL)
        .then((response) => response.json())
        .then((forecasts) => {
            //DEBUG
            console.log(forecasts);

            //loop through results
            forecasts.list.forEach(
                (forecast) => {
                    let hourString = "18:00:00";
                    let counter = 1;

                    forecasts.list.forEach(
                        (forecast) => {
                            if (forecast.dt_txt.includes(hourString)) {
                                // console.log(forecast.main.temp);

                                //temp
                                const temp = document.getElementById(`temp${counter}`);
                                temp.innerHTML = Math.round(forecast.main.temp_max) + "&deg;";

                                // icons
                                let apiIcon = forecast.weather[0].icon;
                                let currentImg = "https://openweathermap.org/img/w/" + apiIcon + ".png";
                                const description = forecast.weather[0].description;

                                //day
                                let nextDate = new Date(forecast.dt_txt);
                                const day = document.getElementById(`day${counter}`);
                                day.innerHTML = daysOfWeek[nextDate.getDay()];

                                document.getElementById(`icon${counter}`).setAttribute('src', currentImg);
                                document.getElementById(`icon${counter}`).setAttribute('alt', description);

                                counter++;
                            }
                        }
                    )
                }
            );
        });
}

//pancake
if (weekDayNum === 5) {
    document.getElementById("pancake").removeAttribute("class", "hidden");
}

//storm severity
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}