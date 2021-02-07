import {
  LOAD_FAILURE,
  LOAD_INIT,
  LOAD_SUCCESS,
  ADD_TO_FAVOURITE,
} from './types';

export const addToFavourite = () => ({
  type: ADD_TO_FAVOURITE,
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
