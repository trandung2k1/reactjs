let template = `
<div>
   <h1>Contact</h1>
   <p>{this.state.color}</p>
   <button onClick={this.handleClick}>Click</button>
   <button onClick={this.handleClickValue.bind(this, "Xin chao")}>Click passed value</button>
</div>
`;
class Contact extends React.Component {
    constructor() {
        super();
        this.state = { color: 'red' };
    }
    handleClick = () => {
        alert(this.state.color);
    };
    handleClickValue = (data) => {
        alert(data);
    };
    render() {
        return eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code);
    }
}
export default Contact;
