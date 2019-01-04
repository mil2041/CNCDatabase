import axios from 'axios';
import { FETCH_BYGENESYMBOL, FETCH_USER, FETCH_ALL_STUDIES } from './types';

export const fetchBygeneSymbol = hgncID => async dispatch => {
  const response = await axios.get('/api/geneSymbol', {
    params: {
      hgncID: hgncID
    }
  });

  const exampleData = [
    { geneName: 'Jane' },
    { geneName: 'Alex' },
    { geneName: 'Jim' }
  ];

  //console.log('Received request', hgncID, exampleData);
  //dispatch({ type: FETCH_BYGENESYMBOL, payload: exampleData });
  console.log('Received request', hgncID, response);

    // only dispatch the content we have interest into the payload
    dispatch({ type: FETCH_BYGENESYMBOL, 
               payload: response.data.rows 
    });
};

export const fetchUser = () => async dispatch => {
     const res = await axios.get('/api/current_user');
     
     dispatch({
             type: FETCH_USER,
             payload: res.data
          });
};  


export const fetchAllStudies = () => async dispatch => {
  const res = await axios.get('/api/studies');
  
  dispatch({
          type: FETCH_ALL_STUDIES,
          payload: res.data.rows
       });
};  