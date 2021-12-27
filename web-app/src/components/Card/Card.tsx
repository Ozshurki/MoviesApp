import React, {useContext} from 'react'
import "./Card.css"
import { GoInfo,GoDiffAdded } from "react-icons/go";



const Card: React.FC<{ company: string, url: string }> = (props) => {

    return (
        <div className='card-container'>
            <div className='img-container'>
                <img className='card-img'
                     src={props.url}
                     alt=""/>
            </div>
            <div className="card-actions">
                {localStorage.getItem("token") && <div className="movie-save"><GoDiffAdded color="white" size="2rem"/></div>}
                <div className="movie-info"><GoInfo color="white" size="2rem"/></div>
            </div>
        </div>
    )
}

export default Card;