import React from 'react'
import NavBar from "./NavBar/NavBar";
import "./SideMenu.css"

const SideMenu: React.FC = () => {
    return (
        <div className='side-menu'>
            <NavBar/>
        </div>
    )
}

export default SideMenu;