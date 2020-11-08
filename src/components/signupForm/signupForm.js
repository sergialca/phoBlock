import React, { useState } from "react";
import Input from "../../components/input/input";
import PswInput from "../../components/pswInput/pswInput";
import SubmitButton from "../submitButton/submitButton";
import { mailValidation, textValidation, repswValidation } from "../../validations/validations";
import Wvalidator from "wallet-address-validator";
import { sendSignupData } from "../../api/api";
import "./signupForm.scss";

const SignupForm = () => {
    const [loading, setLoading] = useState(false);
    const [field, setField] = useState({
        name: "",
        surname: "",
        wallet: "",
        mail: "",
        psw: "",
        repsw: "",
    });
    const [error, setError] = useState({
        name: "",
        surname: "",
        wallet: "",
        mail: "",
        psw: "",
        repsw: "",
    });

    const onChange = (e) => {
        setField({
            ...field,
            [e.target.name]: e.target.value,
        });
        setError({
            ...error,
            [e.target.name]: "",
        });
    };

    const onSign = async () => {
        //name validation
        setLoading(() => true);
        const nameIsValid = textValidation(field.name);
        nameIsValid
            ? setError((error) => ({ ...error, name: "" }))
            : setError((error) => ({ ...error, name: "Name is required" }));
        //surname validation
        const surnameIsValid = textValidation(field.surname);
        surnameIsValid
            ? setError((error) => ({ ...error, surname: "" }))
            : setError((error) => ({ ...error, surname: "Surname is required" }));
        //wallet validation
        const walletIsValid = Wvalidator.validate(field.wallet, "ETH");
        walletIsValid
            ? setError((error) => ({ ...error, wallet: "" }))
            : setError((error) => ({ ...error, wallet: "Invalid ethereum wallet" }));
        //mail validation
        const mailIsValid = mailValidation(field.mail);
        if (mailIsValid === "invalid") {
            setError((error) => ({ ...error, mail: "Invalid email" }));
        } else if (mailIsValid === "required") {
            setError((error) => ({ ...error, mail: "Email is required" }));
        } else setError((error) => ({ ...error, mail: "" }));
        //psw validation
        const pswIsValid = textValidation(field.psw);
        pswIsValid
            ? setError((error) => ({ ...error, psw: "" }))
            : setError((error) => ({ ...error, psw: "Password is required" }));
        //repsw validation
        const repswIsValid = repswValidation(field.psw, field.repsw);
        if (repswIsValid === "required") {
            setError((error) => ({ ...error, repsw: "Repeat password is required" }));
        } else if (repswIsValid === "nomatch") {
            setError((error) => ({ ...error, repsw: "Passwords don't match" }));
        } else setError((error) => ({ ...error, repsw: "" }));
        if (
            nameIsValid &&
            surnameIsValid &&
            mailIsValid === "valid" &&
            pswIsValid &&
            repswIsValid === "valid"
        ) {
            const res = await sendSignupData(field);
            if (res) {
                //congrats you signed up
                setLoading(() => false);
            }
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
                    error={error.name}
                />
                <Input
                    classe="deskinput"
                    name="surname"
                    label="Surname"
                    placeholder="Surname"
                    type="text"
                    onChange={onChange}
                    error={error.surname}
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
                    error={error.wallet}
                />
                <Input
                    classe="input"
                    name="mail"
                    label="Email"
                    placeholder="Email"
                    type="email"
                    onChange={onChange}
                    error={error.mail}
                />
                <PswInput
                    name="psw"
                    label="Password"
                    placeholder="Password"
                    type="password"
                    onChange={onChange}
                    error={error.psw}
                />
                <PswInput
                    name="repsw"
                    label="Repeat Password"
                    placeholder="Repeat Password"
                    type="password"
                    onChange={onChange}
                    error={error.repsw}
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
