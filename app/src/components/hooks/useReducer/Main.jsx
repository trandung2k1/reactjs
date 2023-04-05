import React, { useReducer } from 'react';
const initialState = {
    count: 0,
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + action.payload,
            };
        case 'decrement':
            return {
                ...state,
                count: state.count - action.payload,
            };
        default:
            return state;
    }
};
const Main = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { count } = state;
    const handleIncrement = () => {
        dispatch({
            type: 'increment',
            payload: 1,
        });
    };
    const handleDecrement = () => {
        dispatch({
            type: 'decrement',
            payload: 1,
        });
    };
    return (
        <div>
            <h1>Main</h1>
            <h2>{count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default Main;
