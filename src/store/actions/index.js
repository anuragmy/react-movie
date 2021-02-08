import {
  LOAD_FAILURE,
  LOAD_INIT,
  LOAD_SUCCESS,
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
  SHOW_FAV,
  ADD_MOVIE,
} from './types';

export const addToFavourite = (data) => ({
  type: ADD_TO_FAVOURITE,
  payload: data,
});

export const addMovies = (data) => ({
  type: ADD_MOVIE,
  payload: data,
});

export const removeFromFavourite = (data) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: data,
});

export const showFav = (data) => ({
  type: SHOW_FAV,
  payload: data,
});

export const loadFailure = () => ({
  type: LOAD_FAILURE,
});

export const loadSuccess = (data) => ({
  type: LOAD_SUCCESS,
  payload: data,
});
