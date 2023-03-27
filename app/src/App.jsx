import React, { Profiler, Suspense, lazy, cloneElement } from 'react';
import './App.css';
import Frag from './components/builtinReactComponent/Fragment';
import Pro from './components/builtinReactComponent/Profiler';
import UseEffect from './components/hooks/useEffect';
import UseState from './components/hooks/useState';
const Sus = lazy(() =>
    import('./wait.js').then((module) => {
        return module.wait(1000).then(() => import('./components/builtinReactComponent/Suspense'));
    }),
);
const About = lazy(() =>
    import('./wait.js').then((module) => {
        return module.wait(1000).then(() =>
            import('./pages/About').then((module) => {
                return { default: module.About };
            }),
        );
    }),
);
const Head = () => {
    return <h1>Hi</h1>;
};
function App() {
    function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
        console.log('Id', id); //Id Pro
        console.log('Phase', phase); //Phase mount, Phase update
        console.log('Base Duration', baseDuration); //Example: 1.2000000178813934
    }
    const [show, setShow] = React.useState(false);
    const cloneElm = cloneElement(<Head />, null, 'Hi');
    // console.log('cloneElement', cloneElm);

    const [info, setInfo] = React.useState({
        email: '',
        age: '',
        address: '',
    });
    const handleChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            {/* <Frag /> */}
            {/* <Profiler id="Pro" onRender={onRender}>
                <Pro />
            </Profiler> */}
            {/* {show && <UseEffect />}
            <button onClick={() => setShow(!show)}>Set Show</button> */}
            {/* <Suspense fallback={<h1>Loading</h1>}>
                <Sus />
                <About>{cloneElm}</About>
            </Suspense> */}
            <UseState />
            {/* <div>
                <input
                    type="text"
                    value={info.email}
                    name="email"
                    onChange={(e) => handleChange(e)}
                />
                <input type="text" name="age" value={info.age} onChange={(e) => handleChange(e)} />
                <input
                    type="text"
                    name="address"
                    value={info.address}
                    onChange={(e) => handleChange(e)}
                />
            </div> */}
        </>
    );
}

export default App;
