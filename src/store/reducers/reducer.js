import * as actionTypes from '../actions/types';

const initialState = {
  movies: [
    {
      id: 1,
      name: 'Friends 1',
      description: 'good one',
    },
    {
      id: 2,
      name: 'Friends 2',
      description: 'good one',
    },
    {
      id: 3,
      name: 'Friends 3',
      description: 'good one',
    },
  ],
  favourites: [],
  isLoading: false,
};

export const movieReducer = (state = initialState, action) => {
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
    case actionTypes.REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        favourites: favourites.filter(({ id }) => id !== payload),
      };
    default:
      return state;
  }
};
