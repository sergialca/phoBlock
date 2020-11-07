import React from "react";
import Select from "react-select";
import "./categorySelect.scss";

const CategorySelect = ({ label, name, onChange }) => {
    const categories = [
        { label: "landscape", value: "landscape" },
        { label: "urban", value: "urban" },
        { label: "cities", value: "cities" },
        { label: "human", value: "human" },
        { label: "nature", value: "nature" },
        { label: "cars", value: "cars" },
        { label: "selfie", value: "selfie" },
        { label: "art", value: "art" },
        { label: "animals", value: "animals" },
    ];
    return (
        <div className="category-select">
            <label className="select-label">{label}</label>
            <Select
                isMulti
                options={categories}
                className="react-select-container"
                classNamePrefix="react-select"
                name={name}
                onChange={onChange}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 6,
                    colors: {
                        ...theme.colors,
                        primary: "#43b9a9",
                        borderWidth: 0,
                        border: 0,
                    },
                })}
            />
        </div>
    );
};

export default CategorySelect;
