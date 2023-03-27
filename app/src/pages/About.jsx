import React from 'react';

export const About = ({ children }) => {
    const inputRef = React.createRef();
    React.useEffect(() => {
        inputRef.current.focus()
    }, []);
    return (
        <div>
            <h1>About</h1>
            <input ref={inputRef} />
            {children}
        </div>
    );
};
