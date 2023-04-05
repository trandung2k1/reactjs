import useReducer, { fetchReducer } from './useReducer';
import React from 'react';
export const useFetch = (url) => {
    const [state, dispatch] = useReducer(fetchReducer, {
        data: [],
        isLoading: false,
        error: null,
    });
    React.useEffect(() => {
        (async () => {
            dispatch({
                type: 'fetchAPI/pending',
                isLoading: true,
            });
            try {
                const res = await fetch(url);
                const data = await res.json();
                dispatch({
                    type: 'fetchAPI/success',
                    isLoading: false,
                    data: data,
                    error: null,
                });
            } catch (error) {
                dispatch({
                    type: 'fetchAPI/error',
                    isLoading: false,
                    data: [],
                    error: error,
                });
            }
        })();
    }, [url]);
    return { ...state };
};
