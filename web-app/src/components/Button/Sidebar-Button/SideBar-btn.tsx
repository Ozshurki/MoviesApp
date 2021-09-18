import React from 'react'
import {Link} from "react-router-dom";
import "./SideBar-btn.css"

interface ButtonInt{
    btnName: string;
    route: string;
}
const SideBarBtn: React.FC<ButtonInt> = ({btnName, route}:ButtonInt) =>{

    return(
            <Link to={route} className='sidebar-btn'>{btnName}</Link>
    )
}

export default SideBarBtn;