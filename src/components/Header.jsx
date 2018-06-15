import React, { Component } from 'react';
import logo from 'images/logo.svg';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <img alt="logo" src={logo} style={{ width: 100, height: 100 }} />
                <div>Hello, this is header</div>
            </div>
        );
    }
}

export default Header;
