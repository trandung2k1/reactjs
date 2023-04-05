import React from 'react';

const Name = ({ data }) => {
    return (
        <div style={{listStyle: 'none'}}>
            {data.map((item, index) => {
                return <li key={index}>{item}</li>;
            })}
        </div>
    );
};

export default Name;
