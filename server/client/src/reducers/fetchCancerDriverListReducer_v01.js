import { FETCH_CANCER_DRIVER_LIST } from '../actions/types';
import axios from 'axios';

const getInitialCancerDriverList = () => async dispatch => {
    try {
      // fetch data from a url endpoint
      const response = await axios.get('/api/cancer_driver_list', {
        params: {
          geneSymbol: [],
          elementType: [],
          cancerType: [],
          evidenceType: [],
          pmid: []
        }
      });
  
      const data = [response.data.rows];

      console.log('Received initial fetchCancerDriverList action', data);

      dispatch({
        type: FETCH_CANCER_DRIVER_LIST,
        payload: [response.data.rows]
     });
  
    } catch (error) {
      alert(error); // catches both errors
    }
  }



//const initialCancerDriverList = [{
//    type: FETCH_CANCER_DRIVER_LIST,
//    payload: initialData
//}] 

//const initialCancerDriverList = {
//  type: FETCH_CANCER_DRIVER_LIST,
//  payload: getInitialCancerDriverList().then( result => console.log("see inital value",result))
//}

//console.log("initail value", initialCancerDriverList)

//const initialCancerDriverList = dispatch(fetchInitialCancerDriverList)

export default function(state = getInitialCancerDriverList, action) {
  switch (action.type) {
    case FETCH_CANCER_DRIVER_LIST:
      console.log('Action received(driver list)', action);
      return action.payload;
    default:
      console.log('default state',state)  
      return state;
  }
}
