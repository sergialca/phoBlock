import React, { useState } from "react";
import Input from "../../components/input/input";
import SubmitButton from "../submitButton/submitButton";
import { sendSignupData } from "../../api/api";
import "./signupForm.scss";

const SignupForm = () => {
    const [loading, setLoading] = useState(false);
    const [field, setField] = useState({ name: "", surname: "", wallet: "", mail: "", psw: "" });

    const onChange = (e) => {
        setField({
            ...field,
            [e.target.name]: e.target.value,
        });
    };

    const onSign = async () => {
        setLoading(() => true);

        var sendSignupData = {
            "firstName": field.name,
            "surname": field.surname,
            "wallet": field.wallet,
            "emailAddress": field.mail,
            "userPassword": field.psw,
            "username": "need to create",
            "dateCreated": "2020-10-20"
        }

        const res = await sendSignupData(sendSignupData);
        console.log(res);
        if (res) {
            //congrats tou signed up
        }
        setLoading(() => false);
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
                    name="surname"
                    label="Surname"
                    placeholder="Surname"
                    type="text"
                    onChange={onChange}
                />
            </div>
            <div className="rest">
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
            <div className="sign-btn-wrapper">
                <SubmitButton
                    txt="Sign up"
                    width="200px"
                    bcolor="#42B8A8"
                    color="#fff"
                    loading={loading}
                    call={onSign}
                />
            </div>
        </div>
    );
};

export default SignupForm;
