import * as actionTypes from '../actions/types';

const initialState = {
  movies: [
    // {
    //   id: 1,
    //   name: 'Friends 1',
    //   description: 'good one',
    // },
    // {
    //   id: 2,
    //   name: 'Friends 2',
    //   description: 'good one',
    // },
    // {
    //   id: 3,
    //   name: 'Friends 3',
    //   description: 'good one',
    // },
  ],
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
      console.log('movies', payload);

      let data = [];
      for (let i in payload) {
        data.push({
          name: payload[i].name,
          id: payload[i].id,
          image: payload[i].image?.medium,
          description: payload[i].summary,
        });
        if (i > 11) break;
      }
      console.log('md new', data);
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
