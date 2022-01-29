import React from "react";
import './SortMovies.css'


interface Props{
    setSortByYear: (sort: boolean) => void;
    sortByYear: boolean;
}

const SortMovies: React.FC<Props> = ({setSortByYear, sortByYear}) =>{

    const toggleYear = () => {
        setSortByYear(!sortByYear)
    }

    return(
        <div className="sort-container">
            <div className="sort year" onClick={toggleYear}>Year</div>
            <div className="sort genre">Genre</div>
        </div>
    )
}

export default SortMovies