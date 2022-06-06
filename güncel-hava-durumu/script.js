const url = 'https://api.openweathermap.org/data/2.5/';
const key = '9c89fa1a9ea3a02f5732c9275ee27261';

const setQuery = (event) => {
    if(event.keyCode == '13'){
        getResult(searchBar.value);
    }
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result) => {
    let city = document.querySelector('.city');
    city.innerHTML = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector('.temp');
    temp.innerHTML = `${Math.round(result.main.temp)}°C`

    let desc = document.querySelector('.desc');
    desc.innerHTML = `${result.weather[0].description}`

}

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener('keypress',setQuery);