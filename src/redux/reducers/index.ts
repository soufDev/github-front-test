import { combineReducers } from 'redux';
import userReducer from './user';
import reposReducer from './repos';
import organizationReducer from './organizations';

const reducers = combineReducers({
    user: userReducer,
    repos: reposReducer,
    organizations: organizationReducer
});

export default reducers;