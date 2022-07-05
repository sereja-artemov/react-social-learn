import React from "react";
import logo from "../img/logo_logo.svg";

function Header() {
    return (
        <header className='header'>
            <a href='/' className='logo'>
                <img src={logo} className='logo__img' alt='logo'></img>
            </a>
        </header>
    )
}

export default Header;