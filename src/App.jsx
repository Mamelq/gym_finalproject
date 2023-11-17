import React, { useState } from 'react';
import './App.scss';

const BmiCalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmiResult, setBmiResult] = useState(null);

    const calculateBMI = () => {
        const weightInKg = parseFloat(weight);
        const heightInM = parseFloat(height) / 100; // przeliczenie wzrostu na metry

        if (isNaN(weightInKg) || isNaN(heightInM) || weightInKg <= 0 || heightInM <= 0) {
            alert('Proszę wprowadzić prawidłowe wartości dla masy ciała i wzrostu.');
            return;
        }

        const bmi = weightInKg / (heightInM * heightInM);
        setBmiResult(bmi.toFixed(2));
    };

    return (
        <div className="calculator"> {/* Poprawiona klasa */}
            <h1>Kalkulator BMI</h1>
            <label>
                Masa ciała (kg):
                <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </label>
            <br />
            <label>
                Wzrost (cm):
                <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
            </label>
            <br />
            <button onClick={calculateBMI}>Oblicz BMI</button>
            <br />
            {bmiResult !== null && (
                <div>
                    <h2>Wynik BMI:</h2>
                    <p>{`Twoje BMI wynosi: ${bmiResult}`}</p>
                </div>
            )}
        </div>
    );
};

export default BmiCalculator;