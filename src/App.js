import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import Countdown from 'react-countdown-now';
import Finished from './Finished';

const THE_MOST_AWAITED_DAY = new Date((new Date()).getFullYear(), 7, 17);

const App = () => {
    let countDownRef = useRef(null);
    const [finished, setFinished] = useState(false);

    const isCompleted = () => {
        const countdown = countDownRef.current;
        if (!countdown) return false;

        return countdown.isCompleted();
    };

    useEffect(() => {
        if (!['#parab%C3%A9ns', '#parabens'].includes(document.location.hash)) {
            setTimeout(() => setFinished(isCompleted()), 1500);
        }

        if (['#parab%C3%A9ns=1', '#parabens=1'].includes(document.location.hash)) {
            setTimeout(() => setFinished(false), 1500);
        }

        if (['#parab%C3%A9ns=2', '#parabens=2'].includes(document.location.hash)) {
            setTimeout(() => setFinished(true), 1500);
        }
    }, []);

    return finished ? <Finished /> : (
        <div className="app">
            <div className="app-wrapper">
                <h1>Tempo até o aniversário do ANO:</h1>
                <Countdown ref={countDownRef} date={THE_MOST_AWAITED_DAY} onComplete={() => console.log('opa') || setFinished(true)} />
            </div>
        </div>
    );
};

export default App;
