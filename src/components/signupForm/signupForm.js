import React, { useState } from "react";
import Input from "../../components/input/input";
import "./signupForm.scss";

const SignupForm = () => {
    const [field, setField] = useState({ name: "", surname: "", wallet: "", mail: "", psw: "" });

    const onChange = (e) => {
        setField({
            ...field,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="signup-form">
            <div className="first-row">
                <Input
                    classe="deskinput first"
                    name="name"
                    label="First Name"
                    placeholder="Name"
                    type="text"
                    onChange={onChange}
                />
                <Input
                    classe="deskinput"
                    name="name"
                    label="Surname"
                    placeholder="Name"
                    type="text"
                    onChange={onChange}
                />
            </div>
            <Input
                classe="input"
                name="wallet"
                label="Wallet"
                placeholder="Ethereum Wallet"
                type="text"
                onChange={onChange}
            />
            <Input
                classe="input"
                name="mail"
                label="Email"
                placeholder="Email"
                type="email"
                onChange={onChange}
            />
            <Input
                classe="input"
                name="psw"
                label="Password"
                placeholder="Password"
                type="password"
                onChange={onChange}
            />
            <Input
                classe="input"
                name="repsw"
                label="Repeat Password"
                placeholder="Repeat Password"
                type="password"
                onChange={onChange}
            />
        </div>
    );
};

export default SignupForm;
