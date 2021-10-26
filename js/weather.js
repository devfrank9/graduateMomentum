//API 키
const API_KEY = "6c4a9f9c3ec89c5c598ecae272d92c21";

//좌표 얻기
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weather span");
      const city = document.querySelector(".location span");
      const temp = Math.round(data.main.temp);
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${temp}℃`;
    });
}

//좌표 얻기 실패
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
