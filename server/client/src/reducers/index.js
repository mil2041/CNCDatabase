import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import fetchBygeneSymbolReducer from './fetchBygeneSymbolReducer';
import fetchStudies from './fetchStudies';
import fetchGeneSummary from './fetchGeneSummaryReducer';
import fetchWeather from './weatherReducer';

export default combineReducers({
   // key used in mapStateToProps function 

  auth: authReducer,
  form: formReducer,
  dataBygeneSymbol: fetchBygeneSymbolReducer,
  dataByStudies: fetchStudies,
  geneSummaryData: fetchGeneSummary,
  weather: fetchWeather

});
