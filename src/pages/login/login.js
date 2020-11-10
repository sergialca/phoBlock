import React, { useContext, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Input from "../../components/input/input";
import PswInput from "../../components/pswInput/pswInput";
import SubmitButton from "../../components/submitButton/submitButton";
import { mailValidation, textValidation } from "../../validations/validations";
import { sendLoginData } from "../../api/api";
import "./login.scss";
import { UserContext } from "../../context/user";

const Login = ({ history }) => {
    const [log, setLog] = useState({ mail: "", psw: "" });
    const [error, setError] = useState({ mail: "", psw: "", general: "", color: "#4ED900" });
    const [loading, setLoading] = useState(false);

    const { user, setUser } = useContext(UserContext);

    const onChange = (e) => {
        setLog({
            ...log,
            [e.target.name]: e.target.value,
        });
    };

    const { REACT_APP_ID } = process.env;

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
        if (mailIsValid === "valid" && pswIsValid) {
            const res = await sendLoginData(log);
            if (res.ok) {
                const session = JSON.parse(
                    localStorage.getItem(`Parse/${REACT_APP_ID}/currentUser`)
                );
                if (session) {
                    session.sessionToken
                        ? setUser(() => ({
                              logged: true,
                              author: session.author,
                              mail: session.email,
                              wallet: session.wallet,
                              token: session.sessionToken,
                          }))
                        : setUser(() => ({
                              logged: false,
                          }));
                } else return { logged: false };
                //go to homepage

                setLoading(() => false);
                history.push(`/home`);
            } else {
                setLoading(() => false);
                setError((prev) => ({ ...prev, color: "#ff0000", general: res.message }));
            }
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
                    <PswInput
                        name="psw"
                        label="Password"
                        placeholder="Password"
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
                    <p style={{ color: error.color, textAlign: "center" }}>{error.general}</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
