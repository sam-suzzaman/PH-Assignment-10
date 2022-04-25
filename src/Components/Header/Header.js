import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import "./Header.css";
import logo from "./../../assets/img/logo.png";

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="navbar-container">
            <div className="logo">
                <div className="brand">
                    <a href="#">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div onClick={() => setOpen(!open)} className="menu-toggler">
                    {open ? <XIcon /> : <MenuIcon />}
                </div>
            </div>
            <div className={`main-menu ${open && "show"}`}>
                <a href="#">home</a>
                <a href="#">about</a>
                <a href="#">alog</a>
                <a href="#">login</a>
            </div>
        </nav>
    );
};

export default Header;
