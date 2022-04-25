import React from "react";
import "./Footer.css";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
            <p className="footer-text">
                all &copy;copyrights reserved by samsuzzaman - {year}
            </p>
        </footer>
    );
};

export default Footer;
