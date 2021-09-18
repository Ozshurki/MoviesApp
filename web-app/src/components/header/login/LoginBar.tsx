import React, {useContext, useState} from 'react'
import {Link} from "react-router-dom";
import HeaderBtn from "../../Button/Header-Button/Header-btn";
import loginForm from "../../../pages/login-form/LoginForm";
import MobileNavbar from "../../Mobile-navbar/Mobile-navbar";
import {AuthContext} from "../../../shared/context/AuthContext";
import {ToggleButton} from "../../../shared/context/ButtonContext";

const LoginBar: React.FC = () => {

    const hamburgerButton = useContext(ToggleButton);
    const auth = useContext(AuthContext);

    const [pressed, setIsPressed] = useState(false);

    return (
        <React.Fragment>
            <div className="toggle-button">
                <span className="bar"> </span>
                <span className="bar"> </span>
                <span className="bar"> </span>
            </div>
            {hamburgerButton.isPressed && <MobileNavbar/>}
            {!hamburgerButton.isPressed && <div
                className={hamburgerButton.isPressed ? 'mobile-navbar' : 'login-bar'}>
                <ul>
                    {!auth.isLoggedIn &&
                        <li><HeaderBtn btnName="Login" route="/login"/></li>}
                    {auth.isLoggedIn &&
                        <li><HeaderBtn btnName="My cart" route="/cart"/></li>}
                    {auth.isLoggedIn &&
                        <li><HeaderBtn btnName="Logout" route="/"/></li>}
                </ul>
            </div>}

        </React.Fragment>
    )
}

export default LoginBar;