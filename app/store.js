import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

let middleware;
let initialState = {
    weather: {
        data: {},
        loaded: false
    },
    weatherCities: {
        weatherList: []
    }
};

if (process && process.env && (process.env.NODE_ENV === 'production')) {
    middleware = applyMiddleware(thunk, promise);
} else {
    middleware = applyMiddleware(thunk, promise, logger);
}

export default createStore(rootReducer, initialState, middleware);
