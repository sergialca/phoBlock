import React from "react";
import "./input.scss";

const input = ({ name, type, value, onChange, placeholder, label, classe, error }) => {
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
            <p className="input-error">{error}</p>
        </div>
    );
};

export default input;
