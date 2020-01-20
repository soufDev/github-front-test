import { combineReducers } from 'redux';
import userReducer from './user';
import reposReducer from './repos';

const reducers = combineReducers({
    user: userReducer,
    repos: reposReducer
});

export default reducers;