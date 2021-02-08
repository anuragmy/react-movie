import { loadFailure, loadInit, loadSuccess, addMovies } from './actions';
import axios from 'axios';

export const loadShows = () => async (dispatch) => {
  console.log('reached herer');
  await axios
    .get('http://api.tvmaze.com/shows?page=1')
    .then((res) => {
      console.log('novei data', res.data);
      dispatch(loadSuccess(res.data));
      dispatch(addMovies(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(loadFailure(err));
    });
};
