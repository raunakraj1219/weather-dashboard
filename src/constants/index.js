export const WEATHER_URL = "http://api.weatherstack.com/current?access_key=%ACCESS_KEY%&query=%CITY%";
export const ACCESS_KEY = "e84c08d99756158fcbd8e75236a176e3";

export const CITIES_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=%SEARCH_TEXT%&countryIds=IN";
export const CITIES_ACCESS_KEY = "e8f521650dmsh307457932881945p136357jsn1a93aa184415";


export const tempWeatherResponse = {
    request: {
        type: "City",
        query: "London, United Kingdom",
        language: "en",
        unit: "m",
    },
    location: {
        name: "London",
        country: "United Kingdom",
        region: "City of London, Greater London",
        lat: "51.517",
        lon: "-0.106",
        timezone_id: "Europe/London",
        localtime: "2024-11-14 19:27",
        localtime_epoch: 1731612420,
        utc_offset: "0.0",
    },
    current: {
        observation_time: "07:27 PM",
        temperature: 10,
        weather_code: 116,
        weather_icons: [
            "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png",
        ],
        weather_descriptions: ["Partly cloudy"],
        wind_speed: 7,
        wind_degree: 21,
        wind_dir: "NNE",
        pressure: 1032,
        precip: 0,
        humidity: 71,
        cloudcover: 75,
        feelslike: 9,
        uv_index: 0,
        visibility: 10,
        is_day: "no",
    },
};