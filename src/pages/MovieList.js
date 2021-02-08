import React from 'react';

import { useDispatch, connect } from 'react-redux';

import MovieCards from '../components/MovieCards';
import { loadShows } from '../store/thunk';

const MovieList = ({ movies, isLoading, isFav, favourites }) => {
  const dispatch = useDispatch();
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    if (isFav) setData(favourites);
    else setData(movies);
  }, [isFav]);

  React.useEffect(() => {
    dispatch(loadShows());
  }, []);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {movies.map(({ id, name, image }) => (
          <MovieCards
            loading={isLoading}
            id={id}
            key={id}
            name={name}
            image={image}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  favourites: state.movies.favourites,
  isLoading: state.isLoading,
  isFav: state.movies.showFav,
});

export default connect(mapStateToProps)(MovieList);
