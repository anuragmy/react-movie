import { loadFailure, loadInit, loadSuccess, addMovies } from './actions';
import axios from 'axios';

export const loadShows = () => async (dispatch) => {
  await axios
    .get('https://api.tvmaze.com/shows?page=1')
    .then((res) => {
      dispatch(loadSuccess(res.data));
      dispatch(addMovies(res.data));
    })
    .catch((err) => {
      dispatch(loadFailure(err));
    });
};
