import React from "react";

export default function CountdownTimer() { 
    const useTimer = (onDone, initialTimeSeconds) => {
        const [seconds, setSeconds] = React.useState(initialTimeSeconds);
        const [timeout, _setTimeout] = React.useState();
        const [render, rerender] = React.useState();

    const countDown = () => setSeconds((prev) => prev - 1);

    const runTimer = () => {
        if (seconds === 0) return onDone();
        const timeout = setTimeout(countDown, 1000); 
        _setTimeout(timeout);
        return timeout;
    }

    const reset = () => {
        setSeconds(initialTimeSeconds); 
        clearTimeout(timeout);
        rerender({});
    } 

    React.useEffect(() => {
        const timeout = runTimer();
        return () => clearInterval(timeout);
    }, [render, seconds]);

    return { seconds, reset }
    }

    
    const { seconds, reset } = useTimer(() => {}, 10)

    return (
        <div className="homework__timer">
            <span className="homework__timer-value">{seconds}</span>
            <button className="homework__timer-start" onClick={reset}>Старт</button>
        </div>
    );
           
}