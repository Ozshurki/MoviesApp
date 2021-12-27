import React, {useContext, useState} from 'react'
import "./../../Button/Header-Button/Header-btn.css"
import {AuthContext} from "../../../shared/context/AuthContext";
import {Link} from "react-router-dom";

const LoginBar: React.FC = () => {

    const auth = useContext(AuthContext);
    const [isPressed, setIsPressed] = useState(false);
    const toggleBtn = () =>{
        setIsPressed(!isPressed);
    };

    return (
        <React.Fragment>
            <div className="toggle-button" onClick={toggleBtn}>
                <span className="bar"> </span>
                <span className="bar"> </span>
                <span className="bar"> </span>
            </div>
            <div className='login-bar'>
                <ul>
                    {!localStorage.getItem("token") && <li><Link to="/login" className='hdr-btn'>Login</Link></li>}
                    {localStorage.getItem("token") && <li><Link to="/cart" className='hdr-btn'>My cart</Link></li>}
                    {localStorage.getItem("token") && <li><Link to="/" className='hdr-btn' onClick={auth?.logout}>Logout</Link></li>}
                </ul>
            </div>
        </React.Fragment>
    )
}

export default LoginBar;