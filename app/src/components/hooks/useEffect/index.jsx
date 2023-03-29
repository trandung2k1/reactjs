import React from 'react';
const UseEffect = () => {
    const [title, setTitle] = React.useState('');
    // called callback after component mounted
    // called callback after component re-render
    // called callback after component add element to DOM
    React.useEffect(() => {
        console.log('Re-render');
        document.title = title;
    });

    //Call API;
    // Called back only 1 time after component mounted
    const [todos, setTodos] = React.useState([]);
    React.useEffect(() => {
        (async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3');
            const todos = await res.json();
            setTodos(todos);
        })();
    }, []);
    return (
        <div>
            <h1>UseEffect</h1>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            {console.log('Add element to DOM')}
        </div>
    );
};

export default UseEffect;
