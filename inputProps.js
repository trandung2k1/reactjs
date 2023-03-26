const root = ReactDOM.createRoot(document.getElementById('root'));
const Input = ({ label, ...inputProps }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...inputProps} />
        </div>
    );
};
const App = () => {
    return (
        <div>
            <Input
                label="Full name"
                onClick={() => console.log(Math.floor(Math.random() * 100))}
                placeholder="Enter full name"
                type="text"
            />
        </div>
    );
};
root.render(<App />);
