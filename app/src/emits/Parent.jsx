import React from 'react';
import Child from './Child';

const Parent = () => {
    const [count, setCount] = React.useState(0);
    const handleEvent = React.useCallback((num) => {
        setCount((prev) => prev + num);
    }, []);
    return (
        <div>
            <h1>Parent</h1>
            <Child onHandle={handleEvent} />
            <h2>{count}</h2>
        </div>
    );
};

export default Parent;
