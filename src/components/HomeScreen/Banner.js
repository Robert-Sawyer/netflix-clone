import React from "react";
import './Banner.css';

const Banner = () => {
    return (
        <header className='banner' style={{
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/c/cd/Black_flag.svg")`
        }}>
            <div className='banner__contents'>
                <h1 className='banner__title'>Movie Name</h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>Add to list</button>
                </div>
                <h1 className='banner__description'>Test description</h1>
            </div>
            <div className='banner--fadeButton'/>
        </header>
    )
}

export default Banner;