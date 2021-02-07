import React from 'react';
import { Row, Col } from 'antd';
import { useDispatch, connect } from 'react-redux';
import axios from 'axios';

import MovieCards from '../components/MovieCards';
import { loadShows } from '../store/thunk';

const URL = 'http://api.tvmaze.com/shows';

const MovieList = ({ movies, isLoading }) => {
  const dispatch = useDispatch();

  const getMOvies = async () => {
    await axios.get(URL).then((resp) => console.log(resp));
  };
  React.useEffect(() => {
    // dispatch(loadShows());
    getMOvies();
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
        {movies.map(({ id, name, description }) => (
          <MovieCards
            loading={isLoading}
            id={id}
            key={id}
            name={name}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  isLoading: state.isLoading,
});

export default connect(mapStateToProps)(MovieList);
