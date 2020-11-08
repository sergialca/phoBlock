import React, { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import "./pswInput.scss";

const PswInput = ({ label, onChange, name, placeholder, error }) => {
    const [hidden, setHidden] = useState(true);

    return (
        <div className="psw-input-cont">
            <label className="psw-label">{label}</label>
            <div className="psw-input-wrapper">
                <input
                    className="psw-input"
                    type={hidden ? "password" : "text"}
                    onChange={onChange}
                    name={name}
                    placeholder={placeholder}
                />
                {hidden ? (
                    <BsEyeSlashFill onClick={() => setHidden(() => false)} />
                ) : (
                    <BsEyeFill onClick={() => setHidden(() => true)} />
                )}
            </div>
            <p className="psw-error">{error}</p>
        </div>
    );
};

export default PswInput;
