import React from 'react'
import {Link} from "react-router-dom";
import Logo from "./login/Logo";
import LoginBar from "./login/LoginBar";
import "./Header.css";



const Header: React.FC = () => {
    return (
        <header className='header'>
            <Link to="/" className='header-title'>My Web App</Link>
            <LoginBar />
        </header>
    )
}

export default Header;