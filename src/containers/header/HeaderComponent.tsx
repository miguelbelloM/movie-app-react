import React, { useEffect } from 'react';

//LIBS
import {
    Box,
    TextField,
    Grid
} from '@mui/material';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import {useDispatch, useSelector } from 'react-redux';

//REDUCER
import { RootState } from '../../Store';

//REQUEST
import {GetMoviesList} from "../../requests/MovieRequest";

//LABELS
import EN_LABEL from "../../string/en";

function HeaderComponent(){
    const dispatch = useDispatch();
    const movies = useSelector((state: RootState) => state.movies);
    useEffect(() => {
        dispatch(GetMoviesList("marvel"))
    },[])
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        event.target.value != "" && dispatch(GetMoviesList(event.target.value));
    }
    return (
        <div className='header-component'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={2} className='icon'>
                        <TheaterComedyIcon className='logo-icon' />
                    </Grid>
                    <Grid item xs={7}></Grid>
                    <Grid item xs={3}>
                        <TextField onChange={handleChange} id="outlined-basic" label={EN_LABEL.header.searchMovie} variant="outlined" />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default HeaderComponent;