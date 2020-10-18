import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./submitButton.scss";

const SubmitButton = ({ txt, loading, width, color, bcolor, call }) => {
    return (
        <button
            type="submit"
            style={{ width: width, backgroundColor: bcolor, color: color }}
            className="btn-submit"
            onClick={() => call()}
        >
            {txt}
            <span className="spin">
                <ClipLoader loading={loading} color={"#fff"} size={12} />
            </span>
        </button>
    );
};

export default SubmitButton;
