import { combineReducers } from 'redux';
import authReducer from './auth';
import commonReducer from './common';

export default combineReducers({
  auth: authReducer,
  common: commonReducer,
});
