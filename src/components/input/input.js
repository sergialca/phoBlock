import React from "react";
import "./input.scss";

const input = ({ name, type, value, onChange, placeholder, label, classe }) => {
    return (
        <div className="input-wrapper">
            <label className="input-label">{label}</label>
            <input
                className={classe}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};

export default input;
