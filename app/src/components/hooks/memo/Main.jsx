import React from 'react';
import Child from './Child';

const Main = () => {
    const [count, setCount] = React.useState(0);
    const handleClick = () => {
        setCount((prev) => prev + 1);
    };
    return (
        <div>
            <h1>Memo</h1>
            {count}
            <Child count={count} />
            <button onClick={handleClick}>Count++</button>
        </div>
    );
};

export default Main;
