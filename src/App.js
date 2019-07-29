import React from 'react';
import './App.css';
import Countdown from 'react-countdown-now';

const THE_MOST_AWAITED_DAY = new Date(2019, 7, 17);

const App = () => (
    <div className="app">
        <h1>Tempo até o aniversário do ANO:</h1>
        <Countdown date={THE_MOST_AWAITED_DAY} />
    </div>
);

export default App;
