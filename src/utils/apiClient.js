import { ACCESS_KEY, CITIES_ACCESS_KEY, CITIES_URL, WEATHER_URL } from "../constants";

export const fetchWeatherData = async (cityName = "New Delhi") => {
    const url = WEATHER_URL.replace("%ACCESS_KEY%", ACCESS_KEY).replace("%CITY%", cityName)
    const resp = await fetch(url);
    const jsonResp = resp.json();
    return jsonResp;
}

export const fetchCitiesList = async (inputText = "Lucknow") => {
    const url = CITIES_URL.replace("%SEARCH_TEXT%", inputText);
    const resp = await fetch(url, {
        method: "GET",
        headers: {
            "X-RapidAPI-Mock-Response": "200",
            "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
            "x-rapidapi-key": CITIES_ACCESS_KEY,
        }
    });
    const jsonResp = resp.json();
    return jsonResp;
}



export const resp = {
    "request": {
        "type": "City",
        "query": "London, United Kingdom",
        "language": "en",
        "unit": "m"
    },
    "location": {
        "name": "London",
        "country": "United Kingdom",
        "region": "City of London, Greater London",
        "lat": "51.517",
        "lon": "-0.106",
        "timezone_id": "Europe/London",
        "localtime": "2024-11-11 18:30",
        "localtime_epoch": 1731349800,
        "utc_offset": "0.0"
    },
    "current": {
        "observation_time": "06:30 PM",
        "temperature": 9,
        "weather_code": 113,
        "weather_icons": [
            "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
        ],
        "weather_descriptions": [
            "Clear"
        ],
        "wind_speed": 12,
        "wind_degree": 357,
        "wind_dir": "N",
        "pressure": 1037,
        "precip": 0,
        "humidity": 76,
        "cloudcover": 0,
        "feelslike": 7,
        "uv_index": 0,
        "visibility": 10,
        "is_day": "no"
    }
}