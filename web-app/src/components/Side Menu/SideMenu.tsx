import React from 'react'
import NavBar from "./NavBar/NavBar";
import "./SideMenu.css"

const SideMenu: React.FC = () => {
    return (
        <section className='side-menu'>
            <NavBar/>
        </section>
    )
}

export default SideMenu;