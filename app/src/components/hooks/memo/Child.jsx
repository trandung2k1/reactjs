import React from 'react';
const Child = ({ count }) => {
    console.log('Render children');
    return (
        <div>
            <h1>Child</h1>
            <h2>{count}</h2>
        </div>
    );
};

export default React.memo(Child);
