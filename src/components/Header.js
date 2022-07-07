import React from "react";
import logo from "../img/logo_logo.svg";

<<<<<<< HEAD
const Header = () => {
=======
function Header() {
>>>>>>> 137a7c777bbeeea48c808f967a4074d68dce769e
    return (
        <header className='header'>
            <a href='/' className='logo'>
                <img src={logo} className='logo__img' alt='logo'></img>
            </a>
        </header>
    )
}

export default Header;