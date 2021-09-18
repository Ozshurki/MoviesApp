import React from 'react'
import SideMenu from "../../../components/Side Menu/SideMenu";
import CardsContainer from "../Cards Container/CardsContainer";
import "./main.css"

const Main: React.FC  = () =>{
    return(
        <div className='main'>
            <CardsContainer />
        </div>
    )
}

export default Main;