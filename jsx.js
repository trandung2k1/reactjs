const root = ReactDOM.createRoot(document.getElementById('root'));
const ul = (
    <ul>
        <li>ReactJS</li>
        <li>JavaScript</li>
    </ul>
);
const Navbar = () => {
    return (
        <div>
            <h1>Navbar</h1>
        </div>
    );
};
function Header(props) {
    console.log(props.children);
    console.log(props.children.length); //3
    console.log(React.Children.count(props.children)); //React element =  2
    //React.Children.only(props.children)
    // const children = React.Children.toArray(props.children);
    // children.sort();
    return (
        <div>
            <h1>Header</h1>
            {/* {React.Children.map(props.children, (child) => {
                if (child.type === 'h2') return child;
            })} */}
            {props.children.map((child) => {
                if (child.type === 'h2') return child;
                return null;
            })}
            {React.Children.forEach(props.children, (child) => {
                // console.log('name =', child.type);
            })}
        </div>
    );
}
class Footer extends React.Component {
    render() {
        return (
            <div>
                <h1>Footer</h1>
            </div>
        );
    }
}
function App() {
    return (
        <div>
            <h1>App</h1>
            <Header>
                <Navbar />
                <h2>Xin chao</h2>
                {() => 'Hello'}
            </Header>
            <Footer />
        </div>
    );
}
root.render(<App />);

// JSX -> JavaScript XML
// HTML không phải là JSX, cần có JavaScript, Babel để dùng JSX,


