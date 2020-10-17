import React from "react";
import "./header.scss";

const header = () => {
    return (
        <div className="header">
            <div className="text-wrapper">
                <p className="title">PhoBlock</p>
                <p className="sub-title">
                    A community driven photo sharing app. Your pictures. Your platform.
                </p>
            </div>
        </div>
    );
};

export default header;
