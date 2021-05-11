//Challenge 1
let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let weekDay = weekDays[new Date().getDay()];
console.log(weekDay);
let currentHour = `${new Date().getHours()}:${new Date().getMinutes()}`;
console.log(currentHour);

let headingDate = document.querySelector(".secondh2");
headingDate.innerHTML = `${weekDay}   ${currentHour}`;
//Challenge 2
function searchCurrentData(event) {
  event.preventDefault();
  // continuar aqui, tengo que incluir que localice los datos de la posicion actual (navigator.geolcation etc)
  //una vez tenga mis coordenadas que las transforme en una variable? y creo mi ruta de consulta api, se genera una nueva axios. y unanueva funcion fuera de esta, que es la que me pondrá todos los datos en su sitio
}

function showCity(response) {
  console.log(response);
  console.log(response.data.name);
  let heading = document.querySelector(".firsth2");
  let city = response.data.name;
  heading.innerHTML = `<strong>${city}</strong>`;

  let currentTemp = document.querySelector(".currenttemp");
  let temperature = Math.round(response.data.main.temp);
  currentTemp.innerHTML = `${temperature} ºC`;

  let tempMax = document.querySelector(".tempmax");
  tempMax.innerHTML = Math.round(response.data.main.temp_max);

  let tempMin = document.querySelector(".tempmin");
  tempMin.innerHTML = Math.round(response.data.main.temp_min);

  let windValue = document.querySelector(".windvalue");
  let windSpeed = response.data.wind.speed;
  windValue.innerHTML = `${windSpeed} Km/h`;

  let humidityValue = document.querySelector(".humidityvalue");
  let humidity = response.data.main.humidity;
  humidityValue.innerHTML = `${humidity} %`;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let apiKey = "aabb459045170c682b91ab6157b00f6a";
  let city = searchInput.value;
  let unit = "metric";
  let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather?q=";

  let apiUrl = `${apiEndPoint}${city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showCity);
}
let city = document.querySelector("form");
console.log(city);
city.addEventListener("submit", search);

let currentButton = document.querySelector(".currentLocation");
currentButton.addEventListener("click", searchCurrentData);
