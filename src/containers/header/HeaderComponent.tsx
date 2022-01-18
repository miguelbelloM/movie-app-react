import {
    Box,
    Autocomplete,
    TextField,
    Grid
} from '@mui/material';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import React, { useState } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';
import {GetMoviesList} from "../../requests/MovieRequest";

function HeaderComponent(){
    const dispatch = useDispatch();
    const [movieTextFilter, setMovieTextFilter] = useState("movie");
    const movies = useSelector((state: RootState) => state.movies);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        setMovieTextFilter(event.target.value);
        event.target.value != "" && dispatch(GetMoviesList(event.target.value));
    }
    console.log(movies)
    return (
        <div className='header-component'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={2} className='icon'>
                        <TheaterComedyIcon className='logo-icon' />
                    </Grid>
                    <Grid item xs={7}></Grid>
                    <Grid item xs={3}>
                        <TextField onChange={handleChange} id="outlined-basic" label="Movie" variant="outlined" />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default HeaderComponent;