import React from 'react';

const UseEffect = () => {
    React.useEffect(() => {
        console.log('Oke');
        return () => {
            console.log('Disk Cleanup');
            alert('Disk Cleanup');
        };
    });
    return <div>index</div>;
};

export default UseEffect;
