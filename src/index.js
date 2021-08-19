function formatData(timestamp) {
    let currentTime = new Date(timestamp);
    let hours = currentTime.getHours();
    if (hours< 10) {
    hours = '0${hours}';
}
    let minutes = currentTime.getMinutes();
    if (minutes< 10) {
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
    "Saturday",
    ];
    let day = days[dayIndex];
    return '${day}${hours}:${minutes}';
    
}

function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let windElement = document.querySelector("#wind");
    let humidityElement = document.querySelector("#humidity");
    let dateElement = document.querySelector("#date");
    let iconElement = document.querySelector("#icon");

    celsiusTemperature = response.data.main.temp;

    temperatureElement.innerHTML = Math.round(celsiusTemperature);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    humidityElement.innerHTML = response.data.main.humidity;
    dateElement.innerHTML = formatData(new Date());
    iconElement.setAttribute(
        "src",
        'http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png'
        ); 
          iconElement.setAttribute("alt", response.data.weather[0].description);
 }
 
function search(city) {
    let apiKey = "77d7aad521d071522cc04f7e20b8ab63";
    let apiUrl = 
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
 }



function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    let cityName = document.querySelector("#city");
    cityName.innerHTML = cityInputElement.value;
    search(cityInputElement.value);
}   

function displayFahrenheitTemperature(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    celsiusLink.classList.remove("active");
    fahrenheitLink.classList.add("active");
    let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
    temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}
function displayCelsiusTemperature(event) {
    event.preventDefault();
    celsiusLink.classList.add("active");
    fahrenheitLink.classList.remove("active");
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(celsiusTemperature);
}
   let celsiusTemperature = null;

  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", handleSubmit);

  let fahrenheitLink = document.querySelector("#fahrenheit-link");
  fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

   let celsiusLink = document.querySelector("#celsius-link");
  celsiusLink.addEventListener("click", displayCelsiusTemperature);
  

  search("New York");