const apiKey = "7de9d5d5ddfda64e40d68815c9abfa80"; // Twój klucz API
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Funkcja do sprawdzania pogody na podstawie miasta
async function CheckWeather(miasto) {
    // Tworzymy pełny URL zapytania
    const response = await fetch(apiUrl + miasto + `&appid=${apiKey}`);
    const data = await response.json(); // Pobieramy dane z API

    // Pobieranie danych z odpowiedzi API
    const city = data.name;
    const temperature = data.main.temp;
    const wind = data.wind.speed;
    const humidity = data.main.humidity;

    // Wyświetlanie wyników na stronie
    document.getElementById("nazwa-miasta").textContent = `Miasto: ${city}`;
    document.getElementById("temperatura").textContent = `Temperatura: ${temperature}°C`;
    document.getElementById("wiatr").textContent = `Wiatr: ${wind} km/h`;
    document.getElementById("wilgotnosc").textContent = `Wilgotność: ${humidity}%`;

    // Pokazanie sekcji z wynikami pogody
    document.getElementById("pogoda").style.display = "block";
}

// Funkcja uruchamiająca po kliknięciu przycisku
function searchWeather() {
    const miasto = document.getElementById("miasto").value; // Pobranie miasta z inputu
    CheckWeather(miasto); // Wywołanie funkcji sprawdzającej pogodę

    if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sweaterweather/service-worker.js')
  }
