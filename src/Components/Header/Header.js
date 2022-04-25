import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import "./Header.css";
import logo from "./../../assets/img/logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="navbar-container">
            <div className="logo">
                <div className="brand">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div onClick={() => setOpen(!open)} className="menu-toggler">
                    {open ? <XIcon /> : <MenuIcon />}
                </div>
            </div>
            <div className={`main-menu ${open && "show"}`}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">about</NavLink>
                <NavLink to="/blog">blog</NavLink>
                <NavLink to="/checkout">checkout</NavLink>
                <NavLink to="/signUp">signUp</NavLink>
                <NavLink to="/signIn">signIn</NavLink>
            </div>
        </nav>
    );
};

export default Header;
