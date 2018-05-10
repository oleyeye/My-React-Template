import React, { Component } from 'react';
import Header from './../components/Header'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Header/>
                <div>This is home</div>
            </div>
        );
    }
}

export default Home;