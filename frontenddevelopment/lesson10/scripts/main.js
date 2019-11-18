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

//pancake
if (weekDayNum === 5){
    document.getElementById("pancake").removeAttribute("class", "hidden");
}

//storm severity
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

//home page
