import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from 'reducers/store'

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

registerServiceWorker();
