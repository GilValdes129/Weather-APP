
function getAPI(){
    var lat = localStorage.getItem("lat") || 00
    var lon = localStorage.getItem("lon") || 00
    var city = "Guadalajara"
    var country = "Mx"
    var requesturl = `https:api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=5&appid=33914f843cb7f4d9a146b4cb8ba2a07b&units=metric`
    var cityurl = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${country}t=5&appid=33914f843cb7f4d9a146b4cb8ba2a07b`
    fetch(requesturl)
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var dt = data.list[0].dt * 1000
        console.log(data)
        console.log(dt)
        console.log(dayjs(dt).format('DD/MM/YYYY'))
        console.log(dayjs().format('DD/MM/YYYY'))
      });
      fetch(cityurl)
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var lat = data[0].lat
        localStorage.setItem("lat", lat)
        var lon = data[0].lon
        localStorage.setItem("lon", lon)
        //console.log(data[0].lat, data[0].lon)
        
        
      });
}

getAPI()