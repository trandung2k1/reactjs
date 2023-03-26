const root = ReactDOM.createRoot(document.getElementById('root'));
const Course = (props) => {
    return (
        <div>
            <h2 onClick={() => props.onClick(props.title)}>{props.title}</h2>
            <img src={props.image} />
            <p>{props.description}</p>
            <p>{props.studentsCount}</p>
        </div>
    );
};

//Custom component

const Button = ({ title, href, onClick }) => {
    let Component = 'button';
    const props = {};
    if (href) {
        Component = 'a';
        props.href = href;
    }
    if (onClick) {
        props.onClick = onClick;
    }
    return <Component {...props}>{title}</Component>;
};
const Form = {
    Input() {
        return <input />;
    },
    //Good
    Checkbox() {
        return <input type="checkbox" />;
    },
    //Bad
    checkbox() {
        return <input type="checkbox" />;
    },
};
const App = () => {
    const [courses, setCourses] = React.useState([]);
    const fetchCourses = async () => {
        const { data } = await axios.get('http://localhost:3000/courses');
        setCourses(data);
    };
    React.useEffect(() => {
        fetchCourses();
    }, []);

    const handleClick = (title) => {
        alert(title);
    };
    const type = 'Checkbox';
    const Component = Form[type];
    return (
        <div>
            {/* Good */}
            <Form.Checkbox />
            {/* Bad */}
            {/* <Form.checkbox /> */}
            <Component />
            <Button
                href="https://github.com/trandung2k1"
                onClick={() => console.log(Math.floor(Math.random() * 100))}
                title="Click me"
            />
            {courses.map((course) => {
                return (
                    <Course
                        key={course.id}
                        title={course.title}
                        description={course.description}
                        image={course.image_url}
                        studentsCount={course.students_count}
                        onClick={handleClick}
                    />
                );
            })}
        </div>
    );
};

root.render(<App />);
