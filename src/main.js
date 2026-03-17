import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getWeatherByCity } from "./js/weather-api.js";
import { createWeatherCard, clearWeather, showLoader, hideLoader } from "./js/render-functions.js";



const refs = {
    form: document.querySelector('#search-form'),
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