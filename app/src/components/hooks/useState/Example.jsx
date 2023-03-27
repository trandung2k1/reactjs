import { Component } from 'react';
class Example extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        name: 'Dung',
        age: 21,
        address: 'Ninh Binh',
    };

    //Merge(shallow)
    handleChange = () => {
        this.setState({ name: 'Nam' });
    };
    render() {
        return (
            <>
                <h2>{this.state.name}</h2>
                <h3>{this.state.age}</h3>
                <h4>{this.state.address}</h4>
                <button onClick={this.handleChange}>Change info</button>
            </>
        );
    }
}

export default Example;
