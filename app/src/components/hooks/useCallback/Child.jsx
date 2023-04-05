import React from 'react';
const Child = ({ onIncrease }) => {
    console.log('renderChild');
    return (
        <div>
            <h1>Child component</h1>
            <button onClick={onIncrease}>Increment</button>
        </div>
    );
};

export default React.memo(Child);
