/* eslint-disable no-undef */
import React from 'react';
import { hot } from 'react-hot-loader';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import MovieList from './pages/MovieList';
import { loadShows } from './store/thunk';

const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadShows());
  }, []);
  return (
    <div>
      <Header />
      <MovieList />
    </div>
  );
};

export default hot(module)(App);
