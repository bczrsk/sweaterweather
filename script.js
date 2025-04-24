if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/pogoda/service-worker.js')
  }

const apiKey = "7de9d5d5ddfda64e40d68815c9abfa80"; 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function CheckWeather(miasto) {
    const response = await fetch(apiUrl + miasto + `&appid=${apiKey}`);
    const data = await response.json(); 

    const city = data.name;
    const temperature = data.main.temp;
    const wind = data.wind.speed;
    const humidity = data.main.humidity;

    document.getElementById("nazwa-miasta").textContent = `Miasto: ${city}`;
    document.getElementById("temperatura").textContent = `Temperatura: ${temperature}°C`;
    document.getElementById("wiatr").textContent = `Wiatr: ${wind} km/h`;
    document.getElementById("wilgotnosc").textContent = `Wilgotność: ${humidity}%`;

    document.getElementById("pogoda").style.display = "block";
}

function searchWeather() {
    const miasto = document.getElementById("miasto").value; 
    CheckWeather(miasto); 
}
