import * as actionTypes from '../actions/types';

const initialState = {
  movies: [],
  favourites: [],
  isLoading: false,
  showFav: false,
};

export const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const { favourites, movies } = state;
  switch (type) {
    case actionTypes.LOAD_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.ADD_MOVIE:
      let data = [];
      for (let i in payload) {
        data.push({
          name: payload[i].name,
          id: i,
          image: payload[i].image?.medium,
        });
        if (i > 11) break;
      }

      return {
        ...state,
        movies: [...movies, ...data],
      };
    case actionTypes.SHOW_FAV:
      return {
        ...state,
        showFav: payload,
      };
    case actionTypes.LOAD_SUCCESS:
    case actionTypes.LOAD_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case actionTypes.ADD_TO_FAVOURITE:
      const isPresent = favourites.find((movie) => movie.id === payload);
      return {
        ...state,
        favourites: !isPresent && [...favourites, payload],
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
