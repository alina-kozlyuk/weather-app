import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getWeatherByCity } from "./js/weather-api";
import { createWeatherCard, clearWeather, showLoader, hideLoader } from "./js/render-functions";



const refs = {
    form: document.querySelector('.form'),
    
}

refs.form.addEventListener('submit', e => {
    e.preventDefault();

    const city = e.target.elements.city.value.trim();

    if (!city) {
        iziToast.error({
            message: 'Введіть, будь ласка, місто',
            position: 'topRight'
        });
        return;
    }

    clearWeather();
    showLoader();
    
    getWeatherByCity(city)
        .then(data => {
            hideLoader();
            createWeatherCard(data);
        })
        .catch(() => {
            iziToast.error({
                message: 'Місто не знайдено',
                position: 'topRight'
            })
        })
})