import React from 'react';

const Main = () => {
    const [count, setCount] = React.useState(60);
    const countRef = React.useRef();
    const inputRef = React.useRef();
    const stateRef = React.useRef();
    const h1Ref = React.useRef();
    React.useEffect(() => {
        console.log(h1Ref.current.getBoundingClientRect());
    }, []);
    React.useEffect(() => {
        // console.log(inputRef);
        inputRef.current.focus();
    }, []);
    React.useEffect(() => {
        stateRef.current = count;
    }, [count]);
    const handleStart = () => {
        clearInterval(countRef.current);
        countRef.current = setInterval(() => {
            setCount((prev) => prev - 1);
        }, 1000);
    };
    const handleStop = () => {
        clearInterval(countRef.current);
    };
    console.log(count, stateRef.current);
    return (
        <div>
            <input ref={inputRef} />
            <h1 ref={h1Ref}>useRef</h1>
            <h2>{count}</h2>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
};

export default Main;
