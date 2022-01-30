import React, {useState} from 'react'
import Header from "../../components/header/Header";
import "./Home.css"
import CardsContainer from "./Cards Container/CardsContainer";

const Home: React.FC = () => {

    const [searchValue, setSearchValue] = useState<string>("spider-man");
    const [sortByYear, setSortByYear] = useState<boolean>(false);

    const handleValueChanged = (value:string) => {
        if(value.length < 3)
            setSearchValue("spider-man");
        else
            setSearchValue(value);
    }

    return (
        <div className='home'>
            <Header searchValueChanged={handleValueChanged}
                    setSortByYear={setSortByYear}
                    sortByYear={sortByYear}/>
            <div className="main-container">
                <CardsContainer searchValue={searchValue}
                                sortByYear={sortByYear}/>
            </div>
        </div>
    )
}

export default Home;