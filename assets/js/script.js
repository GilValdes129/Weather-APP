var searchBtn = document.querySelector("#search-btn")
var searchBar = document.querySelector("#search-bar")
var cityName = document.querySelector("#City-Name")
var todayDay = document.querySelector("#Date1")
var Weather1 = document.querySelector("#Weather1")
var iconMain = document.querySelector("#icon1")
var Temp1 = document.querySelector("#Temp1")
var wind1 = document.querySelector("#Wind1")
var btnContainer = document.querySelector("#btn-container")
var humidity1 = document.querySelector("#Humidity1")
var info = {}
var forecastinfo = []
var searchHistory = JSON.parse(localStorage.getItem("Search")) || []


searchBtn.addEventListener("click", getWeather)
function getWeather(){
    
    var city = searchBar.value
    searchHistory.unshift(city)
    localStorage.setItem("Search", JSON.stringify(searchHistory))
    var units = "metric"
    var currentcity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=33914f843cb7f4d9a146b4cb8ba2a07b&units=${units}`
    var forecastcity = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=33914f843cb7f4d9a146b4cb8ba2a07b&units=${units}`
      fetch(currentcity)
      .then(function(response){
        return response.json();
      })
      .then(function (data){
        info = {
          name: data.name,
          // Multiply by a thousand to convert from unix timestamp to a human-readable date
          date: data.dt * 1000,
          weather: data.weather[0].description,
          icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          temp: data.main.temp,
          humidity: data.main.humidity,
          wind: data.wind.speed
        }
        cityName.textContent = info.name
        todayDay.textContent = dayjs(info.date).format('DD/MM/YYYY')
        Weather1.textContent = info.weather
        iconMain.src = info.icon
        Temp1.textContent = `Temp: ${info.temp} C`
        wind1.textContent = `Wind speed: ${info.wind} km/h`
        humidity1.textContent = `Humidity: ${info.humidity}%`
        localStorage.setItem("Present", JSON.stringify(info))
      })

    //HERE STARTE THE FETCH TO THE FORECAST API
      fetch(forecastcity)
      .then(function(response){
        return response.json()
      })
      .then(function(data){
        console.log(data)
      })
      DisplaySearch()
}

function DisplaySearch(){
  var SearchHistory = JSON.parse(localStorage.getItem("Search"))
  var fiveSearches = SearchHistory.splice(0, 5)
  localStorage.setItem("Recent", JSON.stringify(fiveSearches))
  var localSearches = JSON.parse(localStorage.getItem("Recent"))
  btnContainer.innerHTML = ""
  for(var i=0; i < localSearches.length; i++){
    var button = document.createElement("button")
    var link = document.createElement("a")
    link.href = "hola"
    button.textContent = localSearches[i]
    button.classList.add("btn")
    button.appendChild(link)
    btnContainer.appendChild(button)
  }
  
}

