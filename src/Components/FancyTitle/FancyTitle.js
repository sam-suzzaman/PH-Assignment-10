import React from "react";
import "./fancyTitle.css";

const FancyTitle = ({ firstPart, secondPart }) => {
    return (
        <h2 className="sec-title">
            --- {firstPart}
            <span className="fancy-text">{secondPart}</span> ---
        </h2>
    );
};

export default FancyTitle;
