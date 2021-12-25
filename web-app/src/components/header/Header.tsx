import React from 'react'
import {Link} from "react-router-dom";
import Logo from "./login/Logo";
import LoginBar from "./login/LoginBar";
import "./Header.css";



const Header: React.FC = () => {
    return (
        <header className='header'>
            <Link to="/" className='header-title'>My Movies App</Link>
            <div className="actions">
                <a className="new-m" href="#">New Movies</a>
                <a href="#">My List</a>
            </div>
            <LoginBar />
        </header>
    )
}

export default Header;