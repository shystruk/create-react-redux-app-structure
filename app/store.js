'use strict';

import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const loggerMiddleware = createLogger({
    colors: {}
});

let middleware;
let initialState = {
    weather: {},
    weatherCities: {
        weatherList: []
    }
};

if (process && process.env && (process.env.NODE_ENV === 'production')) {
    middleware = applyMiddleware(thunk, promise);
} else {
    middleware = applyMiddleware(thunk, promise, loggerMiddleware);
}

export default createStore(rootReducer, initialState, middleware);
