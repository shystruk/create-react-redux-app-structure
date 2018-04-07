import { combineReducers } from 'redux';

import alertReducer from './alert';
import weatherReducer from './weather';
import weatherListReducer from './weather_list';
import notificationReducer from './notification';

export default combineReducers({
    alert: alertReducer,
    weather: weatherReducer,
    weatherCities: weatherListReducer,
    notification: notificationReducer
});
