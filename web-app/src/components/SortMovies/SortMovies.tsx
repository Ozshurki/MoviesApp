import React from "react";
import './SortMovies.css'


interface Props{
    setSortByYear: (sort: boolean) => void;
    sortByYear: boolean;
}

const SortMovies: React.FC<Props> = (props) =>{

    const toggleYear = () => {
        props.setSortByYear(!props.sortByYear)
    }

    return(
        <div className="sort-container">
            <div className="sort year" onClick={toggleYear}>Year</div>
        </div>
    )
}

export default SortMovies