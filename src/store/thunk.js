import { loadFailure, loadInit, loadSuccess } from './actions/types';
import axios from 'axios';

export const loadShows = () => async (dispatch) => {
  dispatch(loadInit());
  await axios
    .get('http://api.tvmaze.com/shows')
    .then((res) => {
      console.log('novei data', res.data);
      dispatch(loadSuccess(res.data));
    })
    .catch(() => dispatch(loadFailure()));
};
