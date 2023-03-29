import React from 'react';
const lessons = [
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
        name: 'React',
    },
];
const Content = () => {
    const [lessonId, setLessonId] = React.useState(1);
    React.useEffect(() => {
        const handleComment = ({ detail }) => {
            console.log(detail);
        };
        window.addEventListener(`lesson-${lessonId}`, handleComment);
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment);
        };
    }, [lessonId]);
    return (
        <div>
            <ul>
                {lessons.map((item) => {
                    return (
                        <li
                            style={lessonId === item.id ? { color: 'red' } : {}}
                            key={item.id}
                            onClick={() => setLessonId(item.id)}
                        >
                            {item.name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Content;
