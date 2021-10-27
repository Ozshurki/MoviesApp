import React, {useState, useEffect} from 'react'
import "./CardsContainer.css"
import Card from "../../../components/Card/Card";

const axios = require('axios');


const CardsContainer: React.FC = () => {

    const [movieList, setMovieList] = useState([]);

    const getMovieRequest = async () => {
        type url = string;
        const url = "https://www.omdbapi.com/?s=spiderman&apikey=2adaebe8";
        const response = await fetch(url);
        const responseJSON = await response.json();

        if (responseJSON.Search)
            setMovieList(responseJSON.Search);
    }

    useEffect(() => {
        getMovieRequest();
    }, [])
    return (
        <div className='cards-container'>
            {movieList.map((movie: any) => {
                if(movie.Poster.length > 3) {
                    return (
                        <Card company={movie.Title} url={movie.Poster}/>
                    )
                }
            })

            })
        </div>
    )

}

export default CardsContainer;