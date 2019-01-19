import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import fetchBygeneSymbolReducer from './fetchBygeneSymbolReducer';
import fetchStudies from './fetchStudies';
import fetchGeneSummary from './fetchGeneSummaryReducer';
import fetchWeather from './weatherReducer';

export default combineReducers({
   // key used in mapStateToProps function 

  auth: authReducer,
  form: reduxForm,
  dataBygeneSymbol: fetchBygeneSymbolReducer,
  dataByStudies: fetchStudies,
  geneSummaryData: fetchGeneSummary,
  weather: fetchWeather

});
