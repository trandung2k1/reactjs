import React from 'react';
import names from '../../../data/index.json';
import Name from './Name';
const Main = () => {
    const [searchInput, setSearchInput] = React.useState('');
    const [filterText, setFilterText] = React.useState('');
    const [isLoading, startTransition] = React.useTransition();
    const handleChange = (e) => {
        setSearchInput(e.target.value);
        startTransition(() => {
            setFilterText(e.target.value);
        });
    };
    const data = React.useMemo(() => {
        return names.map((name) => {
            const index = name.indexOf(filterText);
            return index === -1 ? (
                <p>{name}</p>
            ) : (
                <p>
                    {name.slice(0, index)}
                    <span style={{ backgroundColor: 'yellow' }}>
                        {name.slice(index, index + filterText.length)}
                    </span>
                    {name.slice(index + filterText.length)}
                </p>
            );
        });
    }, [filterText]);
    return (
        <div>
            <h3>Form</h3>
            <label>Search</label>
            <input type="text" onChange={handleChange} value={searchInput} />
            {isLoading ? <div>Loading...</div> : <Name data={data} />}
        </div>
    );
};

export default Main;
