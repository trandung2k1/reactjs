const root = ReactDOM.createRoot(document.getElementById('root'));
const List = ({ cars, children }) => {
    // console.log(children);
    //     (item) {
    //     return /*#__PURE__*/React.createElement("li", {
    //       key: item
    //     }, item);
    //   }
    // return <ul>{cars.map(children)}</ul>;
    // return <ul>{cars.map((...props) => children(...props))}</ul>;
    return <ul>{cars.map((car) => children(car))}</ul>;
};
const App = () => {
    const cars = ['BMV', 'Honda', 'Mercedes'];
    return (
        <div>
            <List cars={cars}>{(item) => <li key={item}>{item}</li>}</List>
        </div>
    );
};

root.render(<App />);
