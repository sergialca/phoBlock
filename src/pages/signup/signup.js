import React from "react";
import Navbar from "../../components/navbar/navbar";
import SignupForm from "../../components/signupForm/signupForm";
import signupImg from "../../img/sign.png";
import "./signup.scss";

const signup = () => {
    return (
        <div className="signup">
            <Navbar />
            <div className="content-wrapper ">
                <div>
                    <img src={signupImg} alt="aside img" className="aside-img"></img>
                </div>
                <div className="signup-main">
                    <p className="signup-title">Join PhoBlock</p>
                    <SignupForm />
                </div>
            </div>
        </div>
    );
};

export default signup;
