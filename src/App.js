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
  
  function Temp(response) {
    let t = Math.round(response.data.main.temp);
    let t1 = document.querySelector(".temp");
    t1.innerHTML = t;
  }
  
  function name(event) {
    let city = document.querySelector("#city-name");
    let where = document.querySelector("#where");
    let cityName = city.value;
    where.innerHTML = cityName;
    let key = "5f472b7acba333cd8a035ea85a0d4d4c";
    let url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      key +
      "&units=metric";
    console.log(url);
    axios.get(url).then(Temp);
  }
  let srch = document.querySelector("#srch");
  srch.addEventListener("click", name);
  
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
  