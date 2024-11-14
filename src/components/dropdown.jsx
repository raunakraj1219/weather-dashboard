import React from "react";

const Dropdown = ({ options, handleOptionClick, openDropdown }) => {
    if (!openDropdown) return null;
    return (
        <div className="dropdown-wrapper">
            {options?.map((opt) => (
                <div
                    className="single-option"
                    onClick={() => handleOptionClick(opt)}
                >
                    {opt.name}
                </div>
            ))}
        </div>
    );
};

export default Dropdown;
