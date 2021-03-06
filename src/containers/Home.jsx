import React, { Component } from 'react';
import Header from 'components/Header';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TextValue: '',
        };
    }

    handelTextChange = (e) => {
        this.setState({
            TextValue: e.target.value,
        });
    }

    render() {
        return (
            <div>
                <Header />
                <div>This is home</div>
                <input type="text" value={this.state.TextValue} onChange={this.handelTextChange} />
                <p>{this.state.TextValue}</p>
            </div>
        );
    }
}

export default Home;
