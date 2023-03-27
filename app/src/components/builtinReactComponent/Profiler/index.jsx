import React from 'react';
const Post = ({ title }) => {
    return (
        <>
            <h1>{title}</h1>
        </>
    );
};
const Pro = () => {
    const [title, setTitle] = React.useState('');
    const posts = [
        {
            id: 1,
            title: 'Post 1',
        },
        {
            id: 2,
            title: 'Post 2',
        },
    ];
    return (
        <div>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            {posts.map((post) => (
                <Post key={post.id} title={post.title} />
            ))}
        </div>
    );
};

export default Pro;
