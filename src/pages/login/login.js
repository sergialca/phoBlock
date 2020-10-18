import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Input from "../../components/input/input";
import SubmitButton from "../../components/submitButton/submitButton";
import { mailValidation, textValidation } from "../../validations/validations";
import { sendLoginData } from "../../api/api";
import "./login.scss";

const Login = () => {
    const [log, setLog] = useState({ mail: "", psw: "" });
    const [error, setError] = useState({ mail: "", psw: "" });
    const [loading, setLoading] = useState(false);

    const onChange = (e) => {
        setLog({
            ...log,
            [e.target.name]: e.target.value,
        });
    };

    const onLogin = async () => {
        setLoading(() => true);
        const mailIsValid = mailValidation(log.mail);
        if (mailIsValid === "invalid") {
            setError((error) => ({ ...error, mail: "Invalid email" }));
        } else if (mailIsValid === "required") {
            setError((error) => ({ ...error, mail: "Email is required" }));
        } else setError((error) => ({ ...error, mail: "" }));
        const pswIsValid = textValidation(log.psw);
        pswIsValid
            ? setError((error) => ({ ...error, psw: "" }))
            : setError((error) => ({ ...error, psw: "Password is required" }));
        if (mailIsValid && pswIsValid) {
            const res = await sendLoginData(log.mail, log.psw);
            if (res) {
                //go to homepage
            }
            setLoading(() => false);
        } else {
            setLoading(() => false);
        }
    };

    return (
        <div className="login">
            <Navbar />
            <div className="login-main">
                <p className="login-title">Enjoy</p>
                <div className="login-form">
                    <Input
                        classe="input"
                        name="mail"
                        label="Email"
                        placeholder="Email"
                        type="text"
                        onChange={onChange}
                        error={error.mail}
                    />
                    <Input
                        classe="input"
                        name="psw"
                        label="Password"
                        placeholder="Password"
                        type="password"
                        onChange={onChange}
                        error={error.psw}
                    />
                    <div className="login-btn-wrapper">
                        <SubmitButton
                            txt="Login"
                            width="200px"
                            bcolor="#42B8A8"
                            color="#fff"
                            loading={loading}
                            call={onLogin}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
