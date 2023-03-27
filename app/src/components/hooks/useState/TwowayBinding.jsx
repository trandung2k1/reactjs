import React, { useState } from 'react';
const gifts = ['CPU i9', 'RAM 32GB RGB', 'RGB Keyboard'];
const courses = [
    {
        id: 1,
        name: 'HTML/CSS',
    },
    {
        id: 2,
        name: 'JavaScript',
    },
    {
        id: 3,
        name: 'NodeJS',
    },
];
const TwowayBinding = () => {
    const [gift, setGift] = React.useState('Chua co phan thuong');
    const handleClick = () => {
        const index = Math.floor(Math.random() * gifts.length);
        setGift(gifts[index]);
    };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
    };
    // const [id, setId] = useState('');
    const handleSub = () => {
        // const course = courses.find((course) => course.id === id);
        // console.log(course);
    };

    const [arr, setArr] = useState([1, 2]);
    const handleCheck = (id) => {
        if (!arr.includes(id)) {
            setArr((prev) => [...prev, id]);
        } else {
            const data = arr.filter((item) => item !== id);
            setArr(data);
        }
    };
    return (
        <div>
            {/* <h3>{gift}</h3>
            <button onClick={handleClick}>Lấy thưởng</button> */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        value={email}
                        name="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        value={password}
                        name="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {/* 
            {courses.map((course) => {
                return (
                    <div key={course.id}>
                        <input
                            type="radio"
                            checked={id === course.id}
                            onChange={() => setId(course.id)}
                        />
                        {course.name}
                    </div>
                );
            })} */}

            {courses.map((course) => {
                return (
                    <div key={course.id}>
                        <input
                            type="checkbox"
                            checked={arr.includes(course.id)}
                            onChange={() => handleCheck(course.id)}
                        />
                        {course.name}
                    </div>
                );
            })}
            <button onClick={handleSub}>Click</button>
        </div>
    );
};

export default TwowayBinding;
