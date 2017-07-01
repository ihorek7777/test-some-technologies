import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';


const configureStore = () => {
    const middlewares = [thunk, createLogger];

    return createStore (
        applyMiddleware(...middlewares)
    )
};

export default configureStore;