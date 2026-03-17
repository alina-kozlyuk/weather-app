const container = document.querySelector('#weather-container');
const loader = document.querySelector('.loader'); 

export function createWeatherCard(data) {
    const { temperature, windspeed } = data.current_weather;
    
    const markup = `<div class="weather-card">
      <h2>Поточна погода</h2>
      <p>🌡️ Температура: ${temperature}°C</p>
      <p>💨 Вітер: ${windspeed} км/год</p>
    </div>
  `;
    
    container.innerHTML = markup;
}

export function clearWeather() {
    container.innerHTML = '';
}

export function showLoader() {
    loader.classList.remove('hidden');
}

export function hideLoader() {
    loader.classList.add('hidden');
}