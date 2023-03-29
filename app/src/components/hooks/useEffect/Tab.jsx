import { Button } from '@mui/material';
import React from 'react';
const tabs = ['posts', 'comments'];
const Tab = () => {
    const [type, setType] = React.useState('posts');
    const [data, setData] = React.useState([]);
    const [show, setShow] = React.useState(false);
    const [width, setWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
        (async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/${type}?_limit=100`);
            const data = await res.json();
            setData(data);
        })();
    }, [type]);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShow(true);
            } else {
                setShow(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleGoToTop = () => {
        window.scrollTo(0, 0);
        setShow(false);
    };
    React.useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div>
            <h1>Tab</h1>
            {width}
            {tabs.map((tab, i) => {
                return (
                    <button
                        style={{ background: type === tab ? 'red' : '' }}
                        key={i}
                        onClick={() => setType(tab)}
                    >
                        {tab}
                    </button>
                );
            })}
            {data.map((item) => (
                <li key={item.id}>{item.title ?? item.body}</li>
            ))}
            {show && (
                <Button
                    style={{ position: 'fixed', bottom: 20, right: 20 }}
                    variant="contained"
                    onClick={handleGoToTop}
                >
                    Go to top
                </Button>
            )}
        </div>
    );
};

export default Tab;
