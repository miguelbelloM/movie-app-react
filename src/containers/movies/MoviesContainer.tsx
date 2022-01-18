import React, { useState } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import {RootState} from '../../Store';

function MoviesContainer() {
  const movies = useSelector((state: RootState) => state.movies);

  console.log("component", movies)

  return (
    <div className="App">
      {movies.data?.page}
    </div>
  );
}

export default MoviesContainer;
