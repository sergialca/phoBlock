import React from "react";
import "./downloadImage.scss";

const downloadImage = ({ url, orientation, alt }) => {
    return (
        <div className={orientation}>
            <div className="img-back" style={{ backgroundImage: `url(${url})` }} alt={alt}></div>
            <div className="btn-wrapper">
                <button className="btn-download">Download</button>
            </div>
        </div>
    );
};

export default downloadImage;
