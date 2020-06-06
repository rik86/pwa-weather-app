import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '7078f0714e0ab4f0b01314cbac6b49f6';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    })
    .then(function (response) {
        return response;
    })
    .catch(() => {
        return {'weather': null};
    });
    return data;
}