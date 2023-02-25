import React, {useEffect, useState} from "react";
import './Row.css';
import axios from "../../axios";

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState();

    const baseImageUrl = 'https://image.tmdb.org/wikipedia/t/p/original/';

    useEffect(() => {
        async function fetchMovies() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request
        }
        fetchMovies();
    }, [fetchUrl])

    console.log(title, movies)
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
                {movies?.map(movie =>
                    ((isLargeRow && movie.poster_path) ||
                    (!isLargeRow && movie.backdrop_path)) && (
                    <img
                        key={movie.id}
                        className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                        src={`${baseImageUrl}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`} alt={movie.name}/>
                )
                )}
            </div>

        </div>
    )
}

export default Row;