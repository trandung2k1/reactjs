const { createElement: element } = React;
let template = `
<div>
   <h1>About</h1>
   <h2>{msg}</h2>
   <button onClick={handleClick}>Click me!</button>
   <button onClick={() => handleClickValue("Hi")}>Click passed value!</button>
</div>
`;
function About() {
    const [msg, setMsg] = React.useState('Xin chao');
    const handleClick = () => {
        alert(msg);
    };
    const handleClickValue = (value) => {
        alert(value);
    };
    // return element('div', {}, 'hello!!');
    return eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code);
}
export default About;
