import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import configureStore from './configureStore';
import routes from './routes/index';

const history = createBrowserHistory();
const store = configureStore();

import './style.scss';

console.log('history', history);
console.log('store', store);
console.log('routes', routes);


ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes} history={history}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('app')
);


