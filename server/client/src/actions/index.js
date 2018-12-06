import axios from 'axios';
import { FETCH_BYGENESYMBOL } from './types';

export const fetchBygeneSymbol = hgncID => async dispatch => {
  const request = await axios.get('/api/geneSymbol', {
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
  console.log('Received request', hgncID, request);

    dispatch({ type: FETCH_BYGENESYMBOL, 
               payload: request.data.rows 
    });
};
