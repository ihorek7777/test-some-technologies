import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
//import app from './reducers/index';

const configureStore = () => {
    const middlewares = [thunk, createLogger];

    return createStore (
        //app,
        applyMiddleware(...middlewares)
    )
};

export default configureStore;