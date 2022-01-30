import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {PuffLoader} from "react-spinners";
import axios from "axios";
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
        imdb: string
    }
}

const Movie: React.FC = () => {

    const {title} = useParams<{ title: string }>()
    const [movie, setMovie] = useState<Movie>();
    const [loading, setLoading] = useState<boolean>();
    const [color, setColor] = useState<string>("");

    const getMovieRequest = async (title: string) => {

        setColor("#FFFFFF");
        setLoading(true);

        try {
            setLoading(true);
            const response = await axios.get(`http://www.omdbapi.com/?t=${title}&plot=full&apikey=2adaebe8`)
            const movieRes = response.data;

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
                }
            }
            setMovie(currentMovie);
            setLoading(false);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getMovieRequest(title);
    }, [])

    return (
        <div className="movie-container">
            <div className="movie">
                <PuffLoader loading={loading} color={color}/>
                <img className="poster" src={movie?.poster} alt="movie"/>
                <div className="details">
                    <p className="movie-title"><b>Tile</b>: {movie?.title}</p>
                    <p className="movie-year"><b>Year</b>: {movie?.year}</p>
                    <p className="movie-genre"><b>Genre</b>: {movie?.genre}</p>
                    <p className="movie-imdb-rate"><b>IMDB</b>: {movie?.rating.imdb}</p>
                    <p className="movie-plot"><b>Description</b>: {movie?.description}</p>
                </div>
            </div>

        </div>
    )
}

export default Movie