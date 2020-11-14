import React from "react";
import "./authorImage.scss";

const authorImage = ({ link }) => {
    return (
        <div className="author-image-wrapper">
            <img
                src={`https://ipfs.infura.io/ipfs/${link}`}
                alt="profile"
                className="author-image"
            />
        </div>
    );
};

export default authorImage;
