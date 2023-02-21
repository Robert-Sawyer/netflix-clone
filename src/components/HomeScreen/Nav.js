import React, {useEffect, useState} from "react";
import './Nav.css';

const Nav = () => {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else  {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)

        return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className='nav__content'>

            </div>
            <img className='nav__logo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt=''/>
            <img className='nav__avatar-icon' src='https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-squares-01/3/30-512.png' alt=''/>
        </div>
    )
}

export default Nav;