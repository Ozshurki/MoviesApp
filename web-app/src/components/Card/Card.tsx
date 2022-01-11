import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import "./Card.css"
import {GoInfo, GoDiffAdded} from "react-icons/go";


const Card: React.FC<{ title: string, url: string }> = (props) => {

    return (
        <div className='card-container'>
            <div className='img-container'>
                <img className='card-img'
                     src={props.url}
                     alt=""/>
            </div>
            <div className="card-actions">
                {localStorage.getItem("token") &&
                <div className="add-to-cart-btn"><GoDiffAdded color="white" size="2rem"/></div>}
                <Link className="movie-info"
                      to={`/movies/${props.title}`}>
                    <GoInfo color="white" size="2rem"/>
                </Link>
            </div>
        </div>
    )
}

export default Card;