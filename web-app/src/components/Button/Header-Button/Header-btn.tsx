import React from 'react'
import {Link} from "react-router-dom";
import "./Header-btn.css"


interface ButtonInt{
    btnName: string;
    route: string;
}
const HeaderBtn: React.FC<ButtonInt> = ({btnName, route}:ButtonInt) =>{

    return(
        <Link to={route} className='hdr-btn'>{btnName}</Link>
    )
}

export default HeaderBtn;