import React from 'react';
import Child from './Child';

const Callback = () => {
    const [count, setCount] = React.useState(0);
    const handleIncrease = React.useCallback(() => {
        setCount((prev) => prev + 1);
    }, []);
    return (
        <div>
            <h1>Parent component</h1>
            <Child onIncrease={handleIncrease} />
            <h2>{count}</h2>
        </div>
    );
};

export default Callback;
