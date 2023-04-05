import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import './index.css';
function emitComment(id) {
    setInterval(() => {
        window.dispatchEvent(
            new CustomEvent(`lesson-${id}`, {
                detail: `Noi dung comment lesson ${id}`,
            }),
        );
    }, 2000);
}
emitComment(1);
emitComment(2);
emitComment(3);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
