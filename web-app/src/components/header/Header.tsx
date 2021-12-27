import React, {useState, useContext} from 'react'
import {AuthContext} from '../../shared/context/AuthContext'
import HeaderBtn from "../Button/Header-Button/Header-btn";
import {Link} from "react-router-dom";
import Logo from "./LoginNavBar/Logo";
import LoginBar from "./LoginNavBar/LoginBar";
import "./Header.css";



const Header: React.FC = () => {
    const auth = useContext(AuthContext)

    return (
        <header className='header'>
            <Link to="/" className='header-title'>My Movies App</Link>
            <LoginBar />
        </header>
    )
}

export default Header;