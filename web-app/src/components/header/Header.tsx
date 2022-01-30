import React from 'react'
import {Link} from "react-router-dom";
import LoginBar from "./LoginNavBar/LoginBar";
import SearchBar from "../SearchBar/SearchBar";
import SortMovies from "../SortMovies/SortMovies";
import "./Header.css";

interface Props {
    searchValueChanged: (movie: string) => void;
    setSortByYear: (sort: boolean) => void;
    sortByYear: boolean;
}

const Header: React.FC<Props> = (props) => {

    return (
        <div className="header-container">
            <header className='header'>
                <Link to="/" className='header-title'>My Movies App</Link>
                <SearchBar searchValueChanged={props.searchValueChanged}/>
                <SortMovies setSortByYear={props.setSortByYear} sortByYear={props.sortByYear}/>
                <LoginBar/>
            </header>
        </div>
    )
}

export default Header;