import React, { useMemo, useState } from 'react';

const Main = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && price) {
            const product = {
                title,
                price: +price,
            };
            setProducts((prev) => [...prev, product]);
            setPrice('');
            setTitle('');
        } else {
            alert('Title and price is required');
        }
    };
    const totalPrice = useMemo(() => {
        console.log('Total price');
        const total = products.reduce((sum, product) => sum + product.price, 0);
        return total;
    }, [products.length]);

    //issues render
    // const totalPrice = products.reduce((rs, product) => {
    //     console.log('Total');
    //     return rs + product.price;
    // }, 0);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title: </label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Price: </label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <button>Add</button>
            </form>
            <h1>Total price: {totalPrice}</h1>
            <ul>
                {products.map((product, i) => (
                    <li key={i}>
                        {product.title} - {product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Main;
