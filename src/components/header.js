import React from 'react';
import NavBar from './nav-bar';
import { string, object, oneOfType, bool, number } from 'prop-types';
import './header.css'

const Header = ({ title, backgroundImage, subtittle, isHome }) => {
    return (
        <header id="headerPic" style={{background: `url(${backgroundImage})`}}>
            <NavBar/>
            <h1 id={isHome && 'title'  ||'cabinaTitle' || 'sectionTitle' }>{title}</h1>
            {subtittle && <p id='subtittle'>{subtittle}</p>}
        </header>
    );
}


Header.propTypes = {
    title: oneOfType([string, number, object]),
    backgroundImage: string.isRequired,
    isHome: bool.isRequired,
    subtittle: string
}

export default Header;
