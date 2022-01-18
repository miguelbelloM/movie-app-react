import { useSelector } from 'react-redux';

//LIBS
import {
  Box,
  Grid,
} from '@mui/material';

//COMPONENTS
import CardComponent from "../../components/card/CardComponent";

//REDUCER
import { RootState } from '../../Store';
import { MovieResultsType } from "../../reducers/movie/MoviesType";

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
