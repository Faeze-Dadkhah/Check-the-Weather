let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  sanfrancisco: {
    temp: 20.9,
    humidity: 100
  },
  oslo: {
    temp: -5,
    humidity: 20
  }
};

// write your code here
let now = new Date();
let h = now.getHours();
if (h < 10) {
  h = "0" + h;
}
let m = now.getMinutes();
if (m < 10) {
  m = "0" + m;
}
let d = now.getDay();
let week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let date = document.querySelector("#date");
date.innerHTML = week[d] + " " + h + ":" + m;

function ForeShow(response){
  console.log(response.data.daily);

}

function Forcast(coords){
  //console.log(coords);
  let key = "5f472b7acba333cd8a035ea85a0d4d4c";
  let url =`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${key}&units=metric`;
  axios.get(url).then(ForeShow);
}

function Temp(response) {
  console.log(response.data)
  let t1 = document.querySelector(".temp");
  let desc = document.querySelector("#des");
  let humi=document.querySelector("#hum");
  let wind=document.querySelector("#win");
  let ico=document.querySelector("#icon");
  celTemp = Math.round(response.data.main.temp);
  t1.innerHTML = Math.round(response.data.main.temp);
  desc.innerHTML = response.data.weather[0].description;
  humi.innerHTML = response.data.main.humidity;
  wind.innerHTML = Math.round(response.data.wind.speed);
  let ic =response.data.weather[0].icon;
  ico.setAttribute("src",`http://openweathermap.org/img/wn/${ic}@2x.png`);
  ico.setAttribute("alt", response.data.weather[0].description);
  Forcast(response.data.coord);
}

function name(event) {
  let city = document.querySelector("#city-name");
  let where = document.querySelector("#where");
  let cityName = city.value;
  where.innerHTML = cityName;
  let key = "5f472b7acba333cd8a035ea85a0d4d4c";
  let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`;
  console.log(url);
  axios.get(url).then(Temp);
}
let srch = document.querySelector("#srch");
srch.addEventListener("click", name);

let celTemp=null;

function farTemp(event){
  event.preventDefault();
  let t=document.querySelector(".temp");
  t.innerHTML = Math.round(celTemp*9/5+32);
}

let f=document.querySelector("#far");
f.addEventListener("click",farTemp)

function CTemp(event){
  event.preventDefault();
  let t=document.querySelector(".temp");
  t.innerHTML = celTemp;
}

let c=document.querySelector("#cel");
c.addEventListener("click",CTemp)

//function tempCel(event) {
//  event.preventDefault();
//  let t = document.querySelector(".temp");
//  t.innerHTML = 16;
//}
//let c = document.querySelector("#cel");
//c.addEventListener("click", tempCel);
//function tempFar(event) {
//  event.preventDefault();
//  let t = document.querySelector(".temp");
//  t.innerHTML = 61;
//}
//let f = document.querySelector("#far");
//f.addEventListener("click", tempFar);
