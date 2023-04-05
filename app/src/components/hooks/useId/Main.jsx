import React, { useId } from 'react';

const Main = () => {
    const id = useId();
    return (
        <div>
            <form>
                <label htmlFor={id}>Name</label>
                <input id={id} />
            </form>
        </div>
    );
};

export default Main;
