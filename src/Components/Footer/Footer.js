import React from "react";
import "./Footer.css";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
            <p className="footer-text">
                all &copy;copyrights reserved by samsuzzaman -{" "}
                <span className="fancy-text">{year}</span>
            </p>
        </footer>
    );
};

export default Footer;
