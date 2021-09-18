import React, {useContext} from "react";
import HeaderBtn from "../Button/Header-Button/Header-btn";
import {AuthContext} from "../../shared/context/AuthContext";

const MobileNavbar: React.FC =  () =>{

    const auth = useContext(AuthContext);

    return(
        <div className="mobile-navbar">
            <ul>
                <li><HeaderBtn btnName="Home" route="/"/></li>
                <li><HeaderBtn btnName="Shop" route="/shop"/></li>
                <li><HeaderBtn btnName="My Cart" route="/cart"/></li>
                {auth.isLoggedIn && <li><HeaderBtn btnName="Logout" route="/"/></li>}
                {!auth.isLoggedIn && <li><HeaderBtn btnName="Login" route="/login"/></li>}
            </ul>
        </div>
    )
}

export default MobileNavbar;