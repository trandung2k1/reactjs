const root = ReactDOM.createRoot(document.getElementById('root'));
const courses = [
    { id: 1, name: 'HTML/CSS' },
    { id: 2, name: 'ReactJS' },
    { id: 3, name: 'TypeScript' },
    { id: 4, name: 'Ruby on Rails' },
];
//Good: JSX
const ul = (
    <ul>
        {courses.map((course) => (
            <li key={course.id}>{course.name}</li>
        ))}
    </ul>
);

//Bad
const ul1 = (
    <ul>
        {courses.map((course) =>
            React.createElement(
                'li',
                {
                    key: course.id,
                },
                course.name,
            ),
        )}
    </ul>
);
//Component Fragment
const element = React.createElement(
    React.Fragment,
    null,
    React.createElement('h1', null, 'Hello'),
    React.createElement('h2', null, 'Hi'),
);

root.render(element);
