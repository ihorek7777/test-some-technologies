import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import configureStore from './configureStore';
import routes from './routes/index';

const history = createBrowserHistory();
const store = configureStore();

//import './styles/index.scss';


ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes} history={history}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('app')
);


