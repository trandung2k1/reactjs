import React, { useState } from 'react';
import Example from './Example';
import TwowayBinding from './TwowayBinding';
// Feature react 18: Automatic batching any where
// React < 18: Automatic batching inside handler
// Function: set new state
// Class: merge state
// Callback set state: use skip state
// Callback initial state: performance

const orders = [100, 200, 300];
const UseState = () => {
    const [counter, setCounter] = useState(1);
    const [total, setTotal] = useState(() => {
        const all = orders.reduce((previousValue, currentValue) => previousValue + currentValue);
        console.log(all);
        return all;
    });
    const [info, setInfo] = useState({
        name: 'Dung',
        age: 21,
        address: 'Ninh Binh',
    });

    const handleCounter = () => {
        // setCounter(counter + 1);
        setCounter((prev) => prev + 1);
        setCounter((prev) => prev + 1);
    };
    const handleUpdate = () => {
        // setInfo({
        //     ...info,
        //     bio: 'Coding',
        // });
        setInfo((prev) => ({ ...prev, bio: 'Coding' }));
    };
    console.log(total);
    return (
        <div>
            {/* <h1>{counter}</h1>
            <button onClick={handleCounter}>Counter++</button>
            <h3>{JSON.stringify(info)}</h3>
            <button onClick={handleUpdate}>Update info</button>
            <button onClick={() => setTotal(total + 1)}>Total++</button>
            <Example /> */}
            <TwowayBinding />
        </div>
    );
};

export default UseState;
