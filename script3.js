const searchBox = document.querySelector('.search-Box');
const searchBtn = document.getElementById('searchBtn');
const tempr = document.querySelector('.temp');
const weather_img = document.querySelector('.weather-img');
const weather_body = document.querySelector('.weather-body');
const info = document.querySelector('.info');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const invalid_location = document.querySelector('.Invalid-location');

async function checkWeather(city){
    const api = "aa0b77a658318a80d58edb11312037e8";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;

    const data = await fetch(`${url}`).then(response => response.json());


    if(data.cod === `404`){
        invalid_location.style.display = "flex";
        weather_body.style.display = "none";
        return;
    }

    invalid_location.style.display = "none";
    weather_body.style.display = "flex";
    tempr.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
    info.innerHTML = `${data.weather[0].description}`;
    humidity.innerHTML = `${data.main.humidity}%`;
    wind_speed.innerHTML = `${data.wind.speed}Km/H`;


    switch(data.weather[0].main){
        case 'Clear':
            weather_img.src = "./clear.png";
            break;
        case 'Clouds':
            weather_img.src = "./cloud.png";
            break;
        case 'Mist':
            weather_img.src = "./mist.png";
            break;    
        case 'Rain':
            weather_img.src = "./rain.png";
            break;
        case 'Snow':
            weather_img.src = "./snow.png";
            break;
    }
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
});