import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
//import authReducer from './authReducer';
import mutationsReducer from './mutationsReducer';

export default combineReducers({
  //auth: authReducer,
  form: reduxForm,
  mutations: mutationsReducer
});
