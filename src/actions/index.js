import axios from 'axios';

const API_Key = 'bfba5db7cce578048f894c823a59be50';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${APP_ID}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
