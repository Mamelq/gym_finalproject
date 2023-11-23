import React from 'react';
import Header from './components/header/header.jsx';
import CalculatorBMI from './components/calculatorBMI/calculatorBMI';
import Footer from './components/footer/footer';
import './App.scss';

function App() {
    return (
        <div className="app">
            <div className="header">
                <Header />
            </div>

            <div className="calculator">
                <CalculatorBMI />
            </div>

            <div className="footer">
                <Footer />
            </div>
        </div>
    );
}

export default App;