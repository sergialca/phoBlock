import React, { useState } from "react";
import "./downloadImage.scss";

const DownloadImage = ({ url, wallet, author, cid, onDownload }) => {
    const [data] = useState({ hash: url, wallet, author, cid });
    const ipfsUrl = `https://ipfs.infura.io/ipfs/${url}`;
    return (
        <div className="download-img-wrapper">
            <img src={ipfsUrl} alt="homepage" className="img-home" />
            <div className="btn-wrapper">
                <button
                    className="btn-download"
                    onClick={() => onDownload(data.hash, data.cid, data.wallet)}
                >
                    Download
                </button>
            </div>
        </div>
    );
};

export default DownloadImage;
