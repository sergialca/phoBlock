import React, { useContext, useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user";
import logo from "../../img/pho_logo.png";
import ConnectButton from "../connectButton/connectButton";
import "./navbar.scss";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const onToggle = () => {
        setToggle(() => !toggle);
    };

    const { user } = useContext(UserContext);

    return (
        <div className="navbar">
            <button className="activator" onClick={() => onToggle()}>
                <TiThMenu />
            </button>
            <Link to="/home">
                <img className="logo" src={logo} alt="pho block logo" />
            </Link>
            {user.logged ? (
                <ul className={toggle ? "links show-nav" : "links"}>
                    <Link className="ali dist" to="/about">
                        About
                    </Link>
                    <Link className="ali dist" to="/profile">
                        Profile
                    </Link>
                    <ConnectButton />
                </ul>
            ) : (
                <ul className={toggle ? "links show-nav" : "links"}>
                    <Link className="ali dist" to="/about">
                        About
                    </Link>
                    <Link className="ali dist" to="/login">
                        Log in
                    </Link>
                    <Link className="ali dist" to="/signup">
                        Sign Up
                    </Link>
                    <ConnectButton />
                </ul>
            )}
        </div>
    );
};

export default Navbar;
