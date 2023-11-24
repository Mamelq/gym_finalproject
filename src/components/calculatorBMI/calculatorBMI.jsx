import React, { useState } from 'react';
import './calculatorBMI.scss';

const BmiCalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmiResult, setBmiResult] = useState(null);
    const [bmiCategory, setBmiCategory] = useState('');
    const [showExercisePrompt, setShowExercisePrompt] = useState(false);
    const [selectedExercise, setSelectedExercise] = useState('');
    const [showExercisePlan, setShowExercisePlan] = useState(false);

    const calculateBMI = () => {
        const weightInKg = parseFloat(weight);
        const heightInM = parseFloat(height) / 100;

        if (isNaN(weightInKg) || isNaN(heightInM) || weightInKg <= 0 || heightInM <= 0) {
            alert('Proszę wprowadzić prawidłowe wartości dla masy ciała i wzrostu.');
            return;
        }

        const bmi = weightInKg / (heightInM * heightInM);
        setBmiResult(bmi.toFixed(2));

        if (bmi < 16) {
            setBmiCategory('Wygłodzenie');
            setShowExercisePrompt(true);
        } else if (bmi >= 16 && bmi <= 16.99) {
            setBmiCategory('Wychudzenie');
            setShowExercisePrompt(true);
        } else if (bmi >= 17 && bmi <= 18.49) {
            setBmiCategory('Niedowaga');
            setShowExercisePrompt(true);
        } else if (bmi >= 18.5 && bmi <= 24.99) {
            setBmiCategory('Waga prawidłowa');
            setShowExercisePrompt(true);
        } else if (bmi >= 25 && bmi <= 29.9) {
            setBmiCategory('Nadwaga');
            setShowExercisePrompt(true);
        } else if (bmi >= 30 && bmi <= 34.99) {
            setBmiCategory('I stopień otyłości');
            setShowExercisePrompt(true);
        } else if (bmi >= 35 && bmi <= 39.99) {
            setBmiCategory('II stopień otyłości');
            setShowExercisePrompt(true);
        } else {
            setBmiCategory('Otyłość skrajna');
            setShowExercisePrompt(true);
        }
    };

    const handleExerciseSelection = (exercise) => {
        setSelectedExercise(exercise);
        setShowExercisePrompt(false);
        setShowExercisePlan(true);
    };

    const exercisePlans = {
        cardio: 'Bieganie na bieżni,  Marsz na bieżni,  Orbitrek,  Skakanie na skakance,  Boksowanie na worku bokserskim.',
        strength: 'Pompki klasyczne, Rozpiętki na ławce poziomej, Uginanie Zottmana, Plank, Ośle wspięcia, Przysiady ze sztangą na karku.',
        flexibility: 'Słonik, Skłony skośne w siadzie rozkrocznym, Rozciąganie obręczy barkowej, Rozciąganie na brzuchu, .',
    };

    return (
        <div className="calculator">
            <div className="calculator_input">
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
            </div>
            <div className="bmi_result">
                {bmiResult !== null && (
                    <div>
                        <h2>Wynik BMI:</h2>
                        <p>{`Twoje BMI wynosi: ${bmiResult}`}</p>
                        <h2>Kategoria BMI:</h2>
                        <p>{bmiCategory}</p>
                    </div>
                )}

                {showExercisePrompt && (
                    <div className="exercise-prompt">
                        <h2>Wybierz preferowany rodzaj ćwiczeń:</h2>
                        <button onClick={() => handleExerciseSelection('cardio')}>Kardio</button>
                        <button onClick={() => handleExerciseSelection('strength')}>Trening siłowy</button>
                        <button onClick={() => handleExerciseSelection('flexibility')}>Elastyczność</button>
                    </div>
                )}

                {showExercisePlan && (
                    <div className="exercise-plan">
                        <h2>Twój plan treningowy:</h2>
                        <p>{exercisePlans[selectedExercise]}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BmiCalculator;