/* eslint-disable no-undef */
import React from 'react';
import { hot } from 'react-hot-loader';

import Header from './components/Header';
import MovieList from './pages/MovieList';

const App = () => (
  <div>
    <Header />
    <MovieList />
  </div>
);

export default hot(module)(App);
