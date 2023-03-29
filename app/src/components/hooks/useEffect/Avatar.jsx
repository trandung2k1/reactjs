import React, { useState, useEffect } from 'react';

const Avatar = () => {
    const [avatar, setAvatar] = useState('');
    useEffect(() => {
        return () => {
            URL.revokeObjectURL(avatar?.preview);
        };
    }, [avatar]);

    const handlePreview = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
        e.target.value = null;
        console.log('Ok');
    };
    return (
        <div>
            <h1>Avatar</h1>
            <input type="file" onChange={handlePreview} />
            {avatar && <img src={avatar.preview} alt="Avatar" />}
        </div>
    );
};

export default Avatar;
