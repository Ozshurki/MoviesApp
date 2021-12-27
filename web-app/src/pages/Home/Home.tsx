import React, {useState} from 'react'
import Header from "../../components/header/Header";
import "./Home.css"
import CardsContainer from "./Cards Container/CardsContainer";

const Home: React.FC = () => {

    const [searchValue, setSearchValue] = useState("");

    return (
        <div className='home'>
            <div className="header-container">
                <Header/>
            </div>
            <div className="main-container">
                <CardsContainer searchValue={searchValue} setSearchValue={setSearchValue}/>
            </div>
        </div>
    )
}

export default Home;