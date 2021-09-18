import React from 'react'
import Header from "../../components/header/Header";
import "./Home.css"
import SideMenu from "../../components/Side Menu/SideMenu";
import CardsContainer from "./Cards Container/CardsContainer";

const Home: React.FC = () => {
    return (
        <div className='home'>
            <Header/>
            <div className="main-container">
                <SideMenu/>
                <CardsContainer/>
            </div>

        </div>
    )
}

export default Home;