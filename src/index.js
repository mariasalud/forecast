function formatData(timestamp) {
    let currentTime = new Date(timestamp);
     let hours = currentTime.getHours();
       if (hours < 10) {
       hours = '0${hours}';
}
    let minutes = currentTime.getMinutes();
       if (minutes < 10) {
       minutes = '0${minutes}';
}
let dayIndex = currentTime.getDay();
    let days = [
        "Sunday", 
        "Monday", 
        "Tuesday",
        "Wednesday", 
        "Thursday",
        "Friday", 
        "Saturday"
    ];
    let day = days[dayIndex];
    return '${day} ${hours}:${minutes}';
}


function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let windElement = document.querySelector("#wind");
    let humidityElement = document.querySelector("#humidity");
    let dateElement = document.querySelector("#date");
    let iconElement = document.querySelector("#icon");

    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    humidityElement.innerHTML = response.data.main.humidity;
    dateElement.innerHTML = formatData(new Date());
    iconElement.setAttribute(
        "src",
        'http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png'
        );
        icnonElement.setAttribute("alt", response.data.weather[0].description; )
 }
 
 function searchCity(city) {
 let apiKey = "77d7aad521d071522cc04f7e20b8ab63";
 let city ="New York";
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

 axios.get(apiUrl).then(displayTemperature);
 }