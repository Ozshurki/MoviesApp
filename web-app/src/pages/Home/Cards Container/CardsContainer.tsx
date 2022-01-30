import React, {useState, useEffect, useCallback, useMemo} from 'react'
import "./CardsContainer.css"
import Card from "../../../components/Card/Card";
import {Movie} from "../../../shared/interfaces/Movie"


interface Props {
    searchValue: string;
    sortByYear: boolean;
}

const CardsContainer: React.FC<Props> = (props) => {

    const [movieList, setMovieList] = useState<Movie[]>([]);
    const [error, setError] = useState<string>("");

    const getMovieRequest = useCallback(async ()=>{
            try {
                const response = await fetch(`https://www.omdbapi.com/?s=${props.searchValue}&apikey=2adaebe8`);
                const responseJSON = await response.json();

                if (responseJSON.Search){
                    setMovieList(responseJSON.Search);
                    setError("");
                }
                else if(!responseJSON.Search) {
                    setError("No results, please try again.");
                    setMovieList([]);
                }

                if (props.sortByYear)
                    sortMoviesByYear();

            } catch (err) {
                console.log(err);
            }
    } ,[props.searchValue])

    const sortMoviesByYear = () => {

        const sortedMovieList = [...movieList];
        sortedMovieList.sort((a: Movie, b: Movie): any => {
            return (parseInt(b.Year) - parseInt(a.Year));
        });
        setMovieList(sortedMovieList);
    }


    useEffect(() =>{
        if (props.sortByYear)
            sortMoviesByYear()
        else
            getMovieRequest();
    },[props.searchValue, props.sortByYear])




    return (
        <div className='cards-container'>
            {error.length > 0 && <div className="error">{error}</div>}
            {movieList.map((movie: Movie) => {
                if (movie.Poster.length > 3)
                    return (
                        <Card title={movie.Title} url={movie.Poster}/>
                    )
            })}
        </div>
    )
}

export default CardsContainer;