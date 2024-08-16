const apiKey = "94f1ca99ef1b7c5cfbcded7f63780a4d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');



async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json()
    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.getElementById("temperature").innerHTML = Math.round(data.main.temp) + " °C";
    document.getElementById("humid").innerHTML = data.main.humidity + "%";
    document.getElementById("speed").innerHTML = data.wind.speed + "km/h";

    if ( data.weather[0].main == "Clouds"){
        weather.src = "./assets/images/clouds.png";
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "./assets/images/clear.png";
    }
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "./assets/images/rain.png";
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./assets/images/drizzle.png";
    }
    else if (data.weather[0].main == "Haze"){
        weatherIcon.src = "./assets/images/snow.png";
    }
    else if (data.weather[0].main == "Mist"){
        weather.src = "./assets/images/mist.png";
    }

    
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
    document.querySelector(".weather").style.display = "block";
})



