import React from "react";

const InputField = ({ handleInputChange, inputValue }) => {
    return (
        <input
            type="text"
            className="input-field"
            onChange={handleInputChange}
            value={inputValue}
            placeholder="Enter city name"
        />
    );
};

export default InputField;
