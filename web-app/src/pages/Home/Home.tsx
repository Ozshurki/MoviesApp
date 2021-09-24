import React from 'react'
import Header from "../../components/header/Header";
import "./Home.css"
import SideMenu from "../../components/Side Menu/SideMenu";
import CardsContainer from "./Cards Container/CardsContainer";
import FilterBar from "../../components/FilterBar/FilterBar";

const Home: React.FC = () => {
    return (
        <div className='home'>
            <div className="header-container">
                <Header/>
            </div>
            <div className="main-container">
                <div className="filter">
                    <FilterBar/>
                </div>
                <div className="cards">
                    <CardsContainer/>
                </div>

            </div>
        </div>
    )
}

export default Home;