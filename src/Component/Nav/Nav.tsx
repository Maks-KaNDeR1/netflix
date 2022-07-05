import React, { useEffect, useState } from 'react'
import './Nav.css';


export const Nav = () => {

    const [show, setShow] = useState(false)

    useEffect(() => {
        const handleShow = () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener("scroll", handleShow);
        return () => {
            window.removeEventListener("scroll", handleShow);
        };
    }, [])


    return (
        <nav className={`nav ${show && 'nav__black'} `}>
            <img
                className='nav__logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
                alt='Netflix Logo'
            />
            <img
                className='nav__avatar'
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'
                alt='Netflix Logo'
            />
        </nav>
    )
}