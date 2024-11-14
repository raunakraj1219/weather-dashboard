import { useEffect, useState } from "react";
import "./App.css";
import { fetchCitiesList, fetchWeatherData } from "./utils/apiClient";
import InputField from "./components/input-field";
import { useDebounce } from "./utils/debounce";
import Dropdown from "./components/dropdown";
import CityWeatherCards from "./components/city-weather-cards";

function App() {
    const [citiesList, setCitiesList] = useState([]);
    const [citiesWeatherData, setCitiesWeatherData] = useState([]);
    const [inputText, setInputText] = useState("");
    const [openDropdown, setOpenDropDown] = useState(false);

    const debouncedInputText = useDebounce(inputText, 1000);

    const fetchAndSetCitiesList = async () => {
        try {
            const resp = await fetchCitiesList(debouncedInputText);
            setCitiesList(resp?.data);
            setOpenDropDown(resp?.data?.length && debouncedInputText);
        } catch (err) {
            console.error(err);
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (value.length > 0 || (value.length === 0 && inputText?.length > 0)) {
            setInputText(value);
        } else {
            setCitiesList([]);
            setOpenDropDown(false);
        }
    };

    const fetchCityWeatherData = async (cityDetails) => {
        try {
            const cityName = cityDetails?.city;
            const resp = await fetchWeatherData(cityName);
            const currCityWeatherData = { ...resp, cityDetails };
            setCitiesWeatherData((s) => [...s, currCityWeatherData]);
        } catch (err) {
            console.error(err);
        }
    };

    const handleOptionClick = (option) => {
        setOpenDropDown(false);
        setInputText("");
        fetchCityWeatherData(option);
    };

    const handleCityCardCloseClick = (cityData) => {
        const filteredCities = citiesWeatherData.filter(
            (data) => data?.cityDetails?.id !== cityData?.cityDetails?.id
        );
        setCitiesWeatherData(filteredCities);
    };

    useEffect(() => {
        fetchAndSetCitiesList();
    }, [debouncedInputText]);

    return (
        <div className="app">
            <div className="heading">Weather Dashboard</div>
            <div className="content">
                <InputField
                    handleInputChange={handleInputChange}
                    inputValue={inputText}
                />
                <Dropdown
                    options={citiesList}
                    handleOptionClick={handleOptionClick}
                    openDropdown={openDropdown}
                />
                <CityWeatherCards
                    citiesWeatherData={citiesWeatherData}
                    handleCityCardCloseClick={handleCityCardCloseClick}
                />
            </div>
        </div>
    );
}

export default App;
