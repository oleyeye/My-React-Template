import React from 'react';
import Router from 'router/Router';
import { hot } from 'react-hot-loader';

// class App extends PureComponent {
//     render() {
//         return (
//             <Router />
//         );
//     }
// }

const App = () => (<Router />);

export default hot(module)(App);
