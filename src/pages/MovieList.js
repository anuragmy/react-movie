import React from 'react';

import { useDispatch, connect } from 'react-redux';

import MovieCards from '../components/MoveiCards';
import { showFavourite } from '../store/actions';
import { loadShows } from '../store/thunk';

const MovieList = ({ movies, isLoading, showFav, favourites }) => {
  const dispatch = useDispatch();
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    if (showFav) setData(favourites);
    else setData(movies);
  }, [showFav]);

  React.useEffect(() => {
    if (movies.lenght === 0) dispatch(loadShows());
  }, []);

  const renderMovies = () =>
    showFav && favourites
      ? favourites.map(({ id, name, image }) => (
          <MovieCards
            loading={isLoading}
            id={id}
            key={id}
            name={name}
            image={image}
          />
        ))
      : movies.map(({ id, name, image }) => (
          <MovieCards
            loading={isLoading}
            id={id}
            key={id}
            name={name}
            image={image}
          />
        ));

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {renderMovies()}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  favourites: state.movies.favourites,
  isLoading: state.movies.isLoading,
  showFav: state.movies.showFav,
});

export default connect(mapStateToProps)(MovieList);
