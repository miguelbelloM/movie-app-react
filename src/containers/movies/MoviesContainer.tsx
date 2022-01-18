import { useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { MovieResultsType } from "./MoviesType";
import * as React from 'react';
import {
  Box,
  Grid,
} from '@mui/material';
import CardComponent from "../../components/Card/CardComponent";


function MoviesContainer() {
  const movies = useSelector((state: RootState) => state.movies);

  return (
    <div className="movie-list-container">
      <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={5}>
            {
              movies?.data?.results.map((movie: MovieResultsType)=>{
                return (
                  <Grid item xs={3} key={movie.id}>
                    <CardComponent movie={movie}/>
                  </Grid>
                );
              })
            }
          </Grid>
      </Box>
    </div>
  );
}

export default MoviesContainer;
