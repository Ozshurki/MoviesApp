import React, {useState, useEffect} from 'react'
import "./CardsContainer.css"
import Card from "../../../components/Card/Card";
import {searchInterface} from "../../../shared/interfaces/SearchInterface";

interface movie {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string,
}

const CardsContainer: React.FC<searchInterface> = ({searchValue}) => {

    const [movieList, setMovieList] = useState([]);

    const getMovieRequest = async (searchValue: string) => {

        if (!searchValue)
            searchValue = "spider-man";
    try {
        const response = await fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=2adaebe8`);
        const responseJSON = await response.json();

        if (responseJSON.Search)
            setMovieList(responseJSON.Search);
    }catch (err){
        console.log(err)
    }



    }

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue])

    return (
        <div className='cards-container'>
            {movieList.map((movie: movie) => {
                if (movie.Poster.length > 3) {
                    return (
                        <Card title={movie.Title} url={movie.Poster}/>
                    )
                }
            })
            }
        </div>
    )

}

export default CardsContainer;