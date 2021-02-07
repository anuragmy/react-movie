import {
  LOAD_FAILURE,
  LOAD_INIT,
  LOAD_SUCCESS,
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
} from './types';

export const addToFavourite = (data) => ({
  type: ADD_TO_FAVOURITE,
  payload: data,
});

export const removeFromFavourite = (data) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: data,
});

export const loadInit = () => ({
  type: LOAD_INIT,
});

export const loadFailure = () => ({
  type: LOAD_FAILURE,
});

export const loadSuccess = (data) => ({
  type: LOAD_SUCCESS,
  payload: data,
});
