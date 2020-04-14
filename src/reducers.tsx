import { combineReducers, Reducer } from 'redux';
import User from './reducers/userReducer';
import Covid from './reducers/covidReducer';
import Area from './reducers/areaReducer';

const appReducer: Reducer = combineReducers({
    User,
    Covid,
    Area,
});

export default appReducer;
