import React from 'react'
import "./Card.css"


const Card: React.FC<{ company: string, url: string }> = (props) => {
    return (
        <div className='card-container'>
            <div className='img-container'>
                <img className='card-img'
                     src={props.url}
                     alt=""/>
            </div>
            <div className="name-container">
                <div className='company-name'>{props.company}</div>
            </div>
        </div>
    )
}

export default Card;