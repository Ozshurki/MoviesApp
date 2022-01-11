import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import Header from "../header/Header";
import './Movie.css'


type Movie = {
    title: string,
    year: string,
    genre: string,
    director: string,
    writer: string
    description: string,
    poster: string,
    rating: {
        imdb: string,
        rotten: string
    }
}

const Movie: React.FC = () => {

    const {title} = useParams<{ title: string }>()
    const [movie, setMovie] = useState<Movie>()
    const getMovieRequest = async (movie: string) => {

        try {
            const response = await axios.get(`http://www.omdbapi.com/?t=${title}&plot=full&apikey=2adaebe8`)
            const movieRes = response.data

            const currentMovie = {
                title: movieRes.Title,
                year: movieRes.Released,
                genre: movieRes.Genre,
                director: movieRes.Director,
                writer: movieRes.Writer,
                description: movieRes.Plot,
                poster: movieRes.Poster,
                rating: {
                    imdb: movieRes.imdbRating,
                    rotten: movieRes.Ratings[1].Value
                }
            }
            console.log(currentMovie.poster)
            setMovie(currentMovie)

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getMovieRequest(title);
    }, [])

    return (
        <div className="movie-container">
            <Header/>
            <div className="movie">
                <img className="poster" src={movie?.poster} alt="movie"/>
                <div className="details">
                    <p className="movie-title"><b>Tile</b>: {movie?.title}</p>
                    <p className="movie-year"><b>Year</b>: {movie?.year}</p>
                    <p className="movie-genre"><b>Genre</b>: {movie?.genre}</p>
                    <p className="movie-imdb-rate"><b>IMDB</b>: {movie?.rating.imdb}</p>
                    <p className="movie-rotten-rate"><b>Rotten</b>: {movie?.rating.rotten}</p>
                    <p className="movie-plot"><b>Description</b>: {movie?.description}</p>
                </div>
            </div>

        </div>
    )
}

export default Movie