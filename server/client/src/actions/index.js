import axios from 'axios';
import { FETCH_MUTATIONS } from './types';

export const fetchMutations = () => async dispatch => {
  const res = await axios.get('/api/mutations');

  dispatch({ type: FETCH_MUTATIONS, payload: res.data });
};
