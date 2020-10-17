import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const onToggle = () => {
        setToggle(() => !toggle);
    };

    return (
        <div className="navbar">
            <button className="activator" onClick={() => onToggle()}>
                <TiThMenu />
            </button>
            <Link className="logo" to="/home">PhoBlock</Link>
            <ul className={toggle ? "links show-nav" : "links"}>
                <Link className="ali first" to="/login">Log in</Link>
                <Link className="ali" to="/about">About</Link>
            </ul>
        </div>
    );
};

export default Navbar;
