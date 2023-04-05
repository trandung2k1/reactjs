import React, { useLayoutEffect, useState, useEffect, useRef } from 'react';
import { flushSync } from 'react-dom';
const Main = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef();
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
        flushSync(() => {
            setCount(count + 1);
        });

        // setCount(count + 1);
        // setCount((prev) => {
        //     const u = prev + 1;
        //     console.log(u);
        //     return u;
        // });

        console.log(countRef.current.textContent);
    };
    return (
        <div>
            <h1>UseLayoutEffect</h1>
            {console.log('Render or re-render')}
            <h2 ref={countRef}>{count}</h2>
            <button onClick={handleIncrease}>Count++</button>
        </div>
    );
};

export default Main;
