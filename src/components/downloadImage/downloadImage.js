import React, { useState } from "react";
import "./downloadImage.scss";

const DownloadImage = ({ url, orientation, wallet, author }) => {
    const [data] = useState({ hash: url, wallet: wallet, author: author });
    const ipfsUrl = `https://ipfs.infura.io/ipfs/${url}`;
    return (
        <div className={orientation}>
            <div className="img-back" style={{ backgroundImage: `url(${ipfsUrl})` }}></div>
            <div className="btn-wrapper">
                <button className="btn-download">Download</button>
            </div>
        </div>
    );
};

export default DownloadImage;
