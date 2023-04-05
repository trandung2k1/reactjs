import React from 'react';

const Child = ({ onHandle }) => {
    console.log('Child handle');
    return (
        <div>
            <h1>Child</h1>
            <button onClick={() => onHandle(Math.floor(Math.random() * 100))}>Click me!</button>
        </div>
    );
};

export default React.memo(Child);
