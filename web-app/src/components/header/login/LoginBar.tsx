import React, {useContext, useState} from 'react'
import HeaderBtn from "../../Button/Header-Button/Header-btn";
import MobileNavbar from "../../Mobile-navbar/Mobile-navbar";
import {AuthContext} from "../../../shared/context/AuthContext";

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
                    {!auth.isLoggedIn &&
                        <li><HeaderBtn btnName="Login" route="/login"/></li>}
                    {auth.isLoggedIn &&
                        <li><HeaderBtn btnName="My cart" route="/cart"/></li>}
                    {auth.isLoggedIn &&
                        <li><HeaderBtn btnName="Logout" route="/"/></li>}
                </ul>
            </div>
            {isPressed && <MobileNavbar/>}

        </React.Fragment>
    )
}

export default LoginBar;