
var locationButton = document.getElementById("locationButton");

locationButton.addEventListener('click', getGeoLocation);

// Geolocation service
// Info: http://ip-api.com/docs/api:json
// API:  http://ip-api.com/json
function getGeoLocation() {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', gotLocation);
  xhr.open("GET", "http://ip-api.com/json");
  xhr.send();
}

function gotLocation() {
  var locationInfo = JSON.parse(this.responseText);
  console.log(locationInfo);

  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', gotWeather);
  xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather"
          + "?lat=" + locationInfo.lat
          + "&lon=" + locationInfo.lon
          + "&appid=c1f700662e14d6debd730ff65414acd9");
  xhr.send();

}

// Weather service
// Info: https://openweathermap.org/api
// API:  http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=c1f700662e14d6debd730ff65414acd9
function gotWeather() {
  var weatherInfo = JSON.parse(this.responseText);
  console.log(weatherInfo);
}

var exploreButton = document.getElementById("exploreButton");

// Info: https://swapi.co/
// API:  http://swapi.co/api/people/
// API:  http://swapi.co/api/starships/
// API:  http://swapi.co/api/planets/

exploreButton.addEventListener('click', getStarWarsPerson);

var sw = {};

function getStarWarsPerson() {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', getStarWarsStarship);
  xhr.open("GET", "http://swapi.co/api/people/");
  xhr.send();
}
function getStarWarsStarship() {

  var info = JSON.parse(this.responseText);
  sw.person = info.results[Math.floor(Math.random() * info.results.length)];

  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', getStarWarsPlanet);
  xhr.open("GET", "http://swapi.co/api/starships/");
  xhr.send();
}
function getStarWarsPlanet() {

  var info = JSON.parse(this.responseText);
  sw.starship = info.results[Math.floor(Math.random() * info.results.length)];

  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', gotEverything);
  xhr.open("GET", "http://swapi.co/api/planets/");
  xhr.send();
}

function gotEverything() {

  var info = JSON.parse(this.responseText);
  sw.planet = info.results[Math.floor(Math.random() * info.results.length)];

  alert(sw.person.name + " went to " + sw.planet.name + " on a(n) " + sw.starship.name);

  alert(JSON.stringify(sw));


}