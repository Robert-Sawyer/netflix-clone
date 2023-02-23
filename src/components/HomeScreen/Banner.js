import React, {useEffect, useState} from "react";
import './Banner.css';
import axios from "../../axios";
import requests from "../../Requests";

const Banner = () => {
    const [movie, setMovie] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]);
            return request;
        }
        fetchData();
    }, []);

    console.log('banner', movie);

    const truncateText = (text, number) => {
        return text?.length > number ? text.substr(0, number - 1) + '...' : text;
    }

    return (
        <header className='banner' style={{
            // backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundImage: `url("https://image.tmdb.org/wikipedia/t/p/original/${movie?.backdrop_path}")`
        }}>
            <div className='banner__contents'>
                <h1 className='banner__title'>{movie?.name || movie?.title || movie?.original_name}</h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>Add to list</button>
                </div>
                <h1 className='banner__description'>{truncateText(`${movie?.overview}`, 150)}</h1>
            </div>
            <div className='banner--fadeButton'/>
        </header>
    )
}

export default Banner;