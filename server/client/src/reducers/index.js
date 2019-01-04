import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import fetchBygeneSymbolReducer from './fetchBygeneSymbolReducer';
import fetchStudies from './fetchStudies';

export default combineReducers({
   // key used in ? 

  auth: authReducer,
  form: reduxForm,
  dataBygeneSymbol: fetchBygeneSymbolReducer,
  dataByStudies: fetchStudies

});
