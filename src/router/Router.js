import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './../containers/Home'

class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <main>
                <Switch>
                  <Route exact path='/' component={Home}/>
                </Switch>
            </main>
        );
    }
}

export default Router;