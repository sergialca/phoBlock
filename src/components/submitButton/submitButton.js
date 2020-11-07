import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import PropTypes from "prop-types";
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

SubmitButton.propTypes = {
    txt: PropTypes.string,
    loading: PropTypes.bool,
    width: PropTypes.string,
    color: PropTypes.string,
    bcolor: PropTypes.string,
    call: PropTypes.func,
};

export default SubmitButton;
