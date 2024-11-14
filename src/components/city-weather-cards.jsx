import React from "react";
import CityCard from "./city-card";

const CityWeatherCards = ({ citiesWeatherData, handleCityCardCloseClick }) => {
    return (
        <div className="weather-cards-wrapper">
            {citiesWeatherData?.map((data) => (
                <CityCard
                    cityData={data}
                    handleCityCardCloseClick={handleCityCardCloseClick}
                />
            ))}
        </div>
    );
};

export default CityWeatherCards;
