import React, {useState, useEffect} from 'react'
import "./CardsContainer.css"
import Card from "../../../components/Card/Card";
import {searchInterface} from "../../../shared/interfaces/SearchInterface";

const CardsContainer: React.FC <searchInterface> = ({searchValue}) => {

    const [movieList, setMovieList] = useState([]);
    const getMovieRequest = async (searchValue:string) => {
        type url = string;

        if(!searchValue)
            searchValue = "avengers";

        const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=2adaebe8`;
        const response = await fetch(url);
        const responseJSON = await response.json();

        if (responseJSON.Search)
            setMovieList(responseJSON.Search);
    }

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue])
    return (
        <div className='cards-container'>
            {movieList.map((movie: any) => {
                if(movie.Poster.length > 3) {
                    return (
                        <Card company={movie.Title} url={movie.Poster}/>
                    )
                }
            })

            }
        </div>
    )

}

export default CardsContainer;