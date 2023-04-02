import React, { useLayoutEffect, useState, useEffect } from 'react';

const Main = () => {
    const [count, setCount] = useState(0);
    //update state
    //update DOM
    // called cleanup function
    // called callback function
    // render UI

    useLayoutEffect(() => {
        if (count > 3) {
            console.log('useLayoutEffect');
            setCount(0);
        }
    }, [count]);

    const handleIncrease = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <h1>UseLayoutEffect</h1>
            {console.log('Render or re-render')}
            <h2>{count}</h2>
            <button onClick={handleIncrease}>Count++</button>
        </div>
    );
};

export default Main;
