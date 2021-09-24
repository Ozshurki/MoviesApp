import React from 'react'
import "../../Button/Sidebar-Button/SideBar-btn.css"

const NavBar: React.FC = () => {
    return (
        <div className='nav-bar'>
            <button className='sidebar-btn'>Home</button>
            <button className='sidebar-btn'>Watch Later</button>
        </div>
    )
}

export default NavBar;