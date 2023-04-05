import React, { useDebugValue } from 'react';

import { useFetch } from './useFetch';
const Main = () => {
    const {
        data: users,
        isLoading,
        error,
    } = useFetch('https://jsonplaceholder.typicode.com/users');
    console.log(users);
    if (error) {
        return 'Something wrong!!!';
    }

    return isLoading ? (
        <h1>Loading...</h1>
    ) : (
        <div>
            <ul>
                {users.map((user) => {
                    return <li key={user.id}>{user.name}</li>;
                })}
            </ul>
        </div>
    );
};

export default Main;
