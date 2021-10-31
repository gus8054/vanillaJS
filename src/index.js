const date = document.querySelector(".current-time__date");
const time = document.querySelector(".current-time__time");
function changeTime() {
  const current = new Date();
  const strDate = `${current.getFullYear()}년 ${
    current.getMonth() + 1
  }월 ${current.getDate()}일`;
  const strTime = `${current.getHours()}시 ${current.getMinutes()}분 ${current.getSeconds()}초`;
  date.innerText = strDate;
  time.innerText = strTime;
}
changeTime();
setInterval(changeTime, 1000);
navigator.geolocation.getCurrentPosition(onGeoSuccess);
function onGeoSuccess(position) {
  const API_KEY = "894938f425351f737312de8a94ae4d6e";
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  //   console.log(lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weather");
      weather.innerText = `${data.weather[0].main} / ${data.name}`;
    });
}
const todoBtn = document.querySelector(".todo__addbtn");
todoBtn.addEventListener("click", todoBtnClick);
function todoBtnClick(event) {
  const todoText = document.querySelector(".todo__input");
  const invalidResult = todoText.checkValidity();
  if (invalidResult) {
    const newItem = document.createElement("div");
    newItem.className = "todo__item";
    newItem.id = Date.now();
    newItem.innerHTML = `<span class="todo__item__text">${todoText.value}</span><button class="todo__item__delbtn" type="submit">X</button>`;
    const todoBox = document.querySelector(".todo");
    todoBox.appendChild(newItem);
    todoText.value = "";
    event.preventDefault();
  }
}
