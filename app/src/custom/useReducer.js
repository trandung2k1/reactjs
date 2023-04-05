import { useState } from 'react';
export const fetchReducer = (state, action) => {
    switch (action.type) {
        case 'fetchAPI/pending':
            return {
                ...state,
                isLoading: action.isLoading,
            };
        case 'fetchAPI/success':
        case 'fetchAPI/error':
            return {
                ...state,
                isLoading: action.isLoading,
                error: action.error,
                data: action.data,
            };
        default:
            return state;
    }
};

const useReducer = (reducer, initialValue) => {
    const [state, setState] = useState(initialValue);
    function dispatch(action) {
        const newState = reducer(state, action);
        setState(newState);
    }
    return [state, dispatch];
};
export default useReducer;
