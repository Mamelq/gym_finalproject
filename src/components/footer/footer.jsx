import React, { useState, useEffect } from 'react';
import './Footer.scss';

const Footer = () => {
    const [isOpenText, setIsOpenText] = useState(true);
    const [ratings, setRatings] = useState(JSON.parse(localStorage.getItem('ratings')) || []);
    const [newRating, setNewRating] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsOpenText((prev) => !prev);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        localStorage.setItem('ratings', JSON.stringify(ratings));
    }, [ratings]);

    const handleRatingChange = (event) => {
        const value = parseInt(event.target.value, 10);
        setNewRating(value);
    };

    const handleAddRating = () => {
        if (newRating >= 1 && newRating <= 5) {
            setRatings([...ratings, newRating]);
            setNewRating(0);
        } else {
            alert('Ocena musi być w skali od 1 do 5.');
        }
    };

    const calculateAverageRating = () => {
        if (ratings.length === 0) {
            return 0;
        }
        const sum = ratings.reduce((acc, rating) => acc + rating, 0);
        return sum / ratings.length;
    };

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
                    <p>Oceny: {calculateAverageRating().toFixed(2)} / 5</p>
                    <div>
                        <label>
                            Twoja ocena:
                            <select value={newRating} onChange={handleRatingChange}>
                                <option value="0">Wybierz</option>
                                <option value="1">1 gwiazdka</option>
                                <option value="2">2 gwiazdki</option>
                                <option value="3">3 gwiazdki</option>
                                <option value="4">4 gwiazdki</option>
                                <option value="5">5 gwiazdek</option>
                            </select>
                        </label>
                        <button onClick={handleAddRating}>Dodaj ocenę</button>
                    </div>
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