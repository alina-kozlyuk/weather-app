import axios from "axios";


export function getWeatherByCity(city) {
    return axios.get('https://geocoding-api.open-meteo.com/v1/search', {
        params: {
            name: city,
            count: 1,
        },
    }).then(response => {
        const location = response.data.results?.[0];

        if (!location) {
            throw new Error('City not found');
        }

        const { latitude, longitude } = location;

        return axios.get('https://api.open-meteo.com/v1/forecast', {
            params: {
                latitude: latitude,
                longitude: longitude,
                current_weather: true,
            },
        });
    }).then(response => {
        return response.data;
    });
   
}



