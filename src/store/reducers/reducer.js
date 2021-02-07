import * as actionTypes from '../actions/types';

const initialState = {
  movies: [],
  favourites: [],
  isLoading: false,
};

export const movierRedicer = (state = initialState, action) => {
  const { type, payload } = action;
  const { favourites } = state;
  switch (type) {
    case actionTypes.LOAD_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.LOAD_SUCCESS:
    case actionTypes.LOAD_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case actionTypes.ADD_TO_FAVOURITE:
      return {
        ...state,
        favourites: [...favourites, payload],
      };
    default:
      return state;
  }
};
