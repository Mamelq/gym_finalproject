
import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <h1>
                <span className="header__gym">gym</span>
                <img src="/src/assets/images/gym_icon.png" alt="Hantla" className="header__icon" />
                <span className="header__beast">BEAST</span>
            </h1>
            <ul className="header__menu">
                <li><a href="#">O NAS</a></li>
                <li><a href="#">ĆWICZENIA</a></li>
                <li><a href="#">PORADY</a></li>
                <li><a href="#">KONTAKT</a></li>
                <li><a href="#">DLACZEGO MY?</a></li>
            </ul>
        </header>
    );
};

export default Header;