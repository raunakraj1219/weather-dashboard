import React from "react";

const CityCard = ({ cityData, handleCityCardCloseClick }) => {
    return (
        <div className="city-card">
            <div className="top-section">
                <div className="top-left">
                    <div className="city-name">
                        <span
                            onClick={() => handleCityCardCloseClick(cityData)}
                            className="close-icon"
                        >
                            ⛌
                        </span>
                        &nbsp;&nbsp;<b>{cityData?.cityDetails?.name}</b>{" "}
                        {`(${cityData?.cityDetails?.country})`}
                        &nbsp;&nbsp;| Lat:{" "}
                        <b>{cityData?.cityDetails?.latitude}</b> , Lng:{" "}
                        <b>{cityData?.cityDetails?.longitude}</b>
                    </div>
                    <br />
                    <div className="other-details">
                        Humidity:<b>{cityData?.current?.humidity}</b> ||
                        Temperature:
                        <b>{cityData?.current?.temperature}</b> || Visibility:{" "}
                        <b>{cityData?.current?.visibility}</b>
                        <br />
                        <br />
                        Wind Direction: <b>{cityData?.current?.wind_dir}</b> ||
                        Wind Degree: <b>{cityData?.current?.wind_degree}</b> ||
                        Wind Speed: <b>{cityData?.current?.wind_speed}</b>
                        <br />
                        <br />
                        Cloud cover: <b>{cityData?.current?.cloudcover}</b> ||
                        Pressure: <b>{cityData?.current?.pressure}</b> || UV
                        Index: <b>{cityData?.current?.uv_index}</b>
                    </div>
                </div>
                <div className="top-right">
                    <img src={cityData?.current?.weather_icons} />
                    <div>{cityData?.current?.weather_descriptions}</div>
                </div>
            </div>
        </div>
    );
};

export default CityCard;
