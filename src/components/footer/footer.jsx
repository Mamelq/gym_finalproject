import React, { useState, useEffect } from 'react';
import './Footer.scss';

const Footer = () => {
    const [isOpenText, setIsOpenText] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsOpenText((prev) => !prev);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="footer">
            <div className="footer__columns">
                <div className="footer__column">
                    <h3>Adres:</h3>
                    <p>Ul. Siłowniaków 14</p>
                    <p>20-300 Warszawa</p>
                </div>
                <div className="footer__column">
                    <h3>Oceny</h3>
                    <p>Oceny: 4.8 / 5</p>
                </div>
                <div className="footer__column">
                    <h3>Kontakt</h3>
                    <p>Masz wątpliwości? Pisz do nas, jesteśmy otwarci 24/7</p>
                    <p>Numer kontaktowy: +48 123 456 789</p>
                </div>
            </div>
            <p className={`footer__opening-hours ${isOpenText ? 'black' : 'orange'}`}>
                Jesteśmy otwarci 24/7
            </p>
            <div className="footer__gym-beast">
                <p>
                    <span className="gym">gym</span>
                    <span className="beast">BEAST</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;