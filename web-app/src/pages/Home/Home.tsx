import React, {useState} from 'react'
import Header from "../../components/header/Header";
import "./Home.css"
import CardsContainer from "./Cards Container/CardsContainer";

const Home: React.FC = () => {

    const [searchValue, setSearchValue] = useState("");
    const [sortByYear, setSortByYear] = useState(false);


    return (
        <div className='home'>
            <Header setSearchValue={setSearchValue} setSortByYear={setSortByYear} sortByYear={sortByYear}/>
            <div className="main-container">
                <CardsContainer searchValue={searchValue}
                                setSearchValue={setSearchValue}
                                sortByYear={sortByYear}/>
            </div>
        </div>
    )
}

export default Home;