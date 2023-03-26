const root = ReactDOM.createRoot(document.getElementById('root'));
import About from './components/About.js';
import Contact from './components/Contact.js';
function App() {
    return (
        <div>
            <h1>App</h1>
            <About />
            <Contact />
        </div>
    );
}
root.render(<App />);
