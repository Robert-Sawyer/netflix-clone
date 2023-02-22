import React from "react";
import './Banner.css';

const Banner = () => {

    const truncateText = (text, number) => {
        return text?.length > number ? text.substr(0, number - 1) + '...' : text;
    }

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
                <h1 className='banner__description'>{truncateText(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.`, 150)}</h1>
            </div>
            <div className='banner--fadeButton'/>
        </header>
    )
}

export default Banner;