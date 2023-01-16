var searchBtn = document.querySelector("#search-btn")
var searchBar = document.querySelector("#search-bar")
var cityName = document.querySelector("#City-Name")
var todayDay = document.querySelector("#Date1")
var Date2 = document.querySelector("#Date2")
var Date3 = document.querySelector("#Date3")
var Date4 = document.querySelector("#Date4")
var Date5 = document.querySelector("#Date5")
var Date6 = document.querySelector("#Date6")
var Weather1 = document.querySelector("#Weather1")
var Weather2 = document.querySelector("#Weather2")
var Weather3 = document.querySelector("#Weather3")
var Weather4 = document.querySelector("#Weather4")
var Weather5 = document.querySelector("#Weather5")
var Weather6 = document.querySelector("#Weather6")
var iconMain = document.querySelector("#icon1")
var icon2 = document.querySelector("#icon2")
var icon3 = document.querySelector("#icon3")
var icon4 = document.querySelector("#icon4")
var icon5 = document.querySelector("#icon5")
var icon6 = document.querySelector("#icon6")
var Temp1 = document.querySelector("#Temp1")
var Temp2 = document.querySelector("#Temp2")
var Temp3 = document.querySelector("#Temp3")
var Temp4 = document.querySelector("#Temp4")
var Temp5 = document.querySelector("#Temp5")
var Temp6 = document.querySelector("#Temp6")
var wind1 = document.querySelector("#Wind1")
var wind2 = document.querySelector("#Wind2")
var wind3 = document.querySelector("#Wind3")
var wind4 = document.querySelector("#Wind4")
var wind5 = document.querySelector("#Wind5")
var wind6 = document.querySelector("#Wind6")
var btnContainer = document.querySelector("#btn-container")
var humidity1 = document.querySelector("#Humidity1")
var humidity2 = document.querySelector("#Humidity2")
var humidity3 = document.querySelector("#Humidity3")
var humidity4 = document.querySelector("#Humidity4")
var humidity5 = document.querySelector("#Humidity5")
var humidity6 = document.querySelector("#Humidity6")
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
        console.log(data.list[3].wind.speed)
        forecastinfo = [{
          date: data.list[3].dt * 1000,
          weather: data.list[3].weather[0].description,
          icon: `http://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png`,
          temp: data.list[3].main.temp,
          humidity: data.list[3].main.humidity,
          speed: data.list[3].wind.speed
        },{
          date: data.list[11].dt * 1000,
          weather: data.list[11].weather[0].description,
          icon: `http://openweathermap.org/img/wn/${data.list[11].weather[0].icon}@2x.png`,
          temp: data.list[11].main.temp,
          humidity: data.list[11].main.humidity,
          speed: data.list[11].wind.speed
        },{
          date: data.list[19].dt * 1000,
          weather: data.list[19].weather[0].description,
          icon: `http://openweathermap.org/img/wn/${data.list[19].weather[0].icon}@2x.png`,
          temp: data.list[19].main.temp,
          humidity: data.list[19].main.humidity,
          speed: data.list[19].wind.speed
        },{
          date: data.list[27].dt * 1000,
          weather: data.list[27].weather[0].description,
          icon: `http://openweathermap.org/img/wn/${data.list[27].weather[0].icon}@2x.png`,
          temp: data.list[27].main.temp,
          humidity: data.list[27].main.humidity,
          speed: data.list[27].wind.speed
        },{
          date: data.list[35].dt * 1000,
          weather: data.list[35].weather[0].description,
          icon: `http://openweathermap.org/img/wn/${data.list[35].weather[0].icon}@2x.png`,
          temp: data.list[35].main.temp,
          humidity: data.list[35].main.humidity,
          speed: data.list[35].wind.speed
        }]
        
        //Display the results in the DOM
        //Second day
        Date2.textContent = dayjs(forecastinfo[0].date).format('DD/MM/YYYY') 
        Weather2.textContent = forecastinfo[0].weather
        icon2.src = forecastinfo[0].icon
        Temp2.textContent = `Temp: ${forecastinfo[0].temp} C`
        wind2.textContent = `Wind: ${forecastinfo[0].speed} km/h`
        humidity2.textContent = `Humidity: ${forecastinfo[0].humidity}%`
        //Third day
        Date3.textContent = dayjs(forecastinfo[1].date).format('DD/MM/YYYY') 
        Weather3.textContent = forecastinfo[1].weather
        icon3.src = forecastinfo[0].icon
        Temp3.textContent = `Temp: ${forecastinfo[1].temp} C`
        wind3.textContent = `Wind: ${forecastinfo[1].speed} km/h`
        humidity3.textContent = `Humidity: ${forecastinfo[1].humidity}%`
        //Fouth day
        Date4.textContent = dayjs(forecastinfo[2].date).format('DD/MM/YYYY') 
        Weather4.textContent = forecastinfo[2].weather
        icon4.src = forecastinfo[0].icon
        Temp4.textContent = `Temp: ${forecastinfo[2].temp} C`
        wind4.textContent = `Wind: ${forecastinfo[2].speed} km/h`
        humidity4.textContent = `Humidity: ${forecastinfo[2].humidity}%`
        //Fifth day
        Date5.textContent = dayjs(forecastinfo[3].date).format('DD/MM/YYYY') 
        Weather5.textContent = forecastinfo[3].weather
        icon5.src = forecastinfo[0].icon
        Temp5.textContent = `Temp: ${forecastinfo[3].temp} C`
        wind5.textContent = `Wind: ${forecastinfo[3].speed} km/h`
        humidity5.textContent = `Humidity: ${forecastinfo[3].humidity}%`
        //Sixth day
        Date6.textContent = dayjs(forecastinfo[4].date).format('DD/MM/YYYY') 
        Weather6.textContent = forecastinfo[4].weather
        icon6.src = forecastinfo[0].icon
        Temp6.textContent = `Temp: ${forecastinfo[4].temp} C`
        wind6.textContent = `Wind: ${forecastinfo[4].speed} km/h`
        humidity6.textContent = `Humidity: ${forecastinfo[4].humidity}%`
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

