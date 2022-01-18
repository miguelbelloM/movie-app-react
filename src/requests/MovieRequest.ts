import { Dispatch }  from "redux";
import {
    MOVIES_LOADING,
    MOVIES_FAIL,
    MOVIES_SUCCESS,
} from "../actions/MoviesActios";
import {MoviesDispatchTypes} from  "../reducers/movie/MoviesType";
import middlware from "../middleware/middleware";

export const GetMoviesList = (movieTextFilter: string) => async (dispatch: Dispatch<MoviesDispatchTypes>) => {
    try {
        dispatch({
            type: MOVIES_LOADING,
        }) 
        const res = await middlware.get(`search/movie`,{
            params:{
                api_key: "cc84c268a7e2e3aabd16fa8670fbc453",
                language: "en-US",
                query: movieTextFilter,
                page: "1",
            }
        });
        dispatch({
            type: MOVIES_SUCCESS,
            data: res.data,
        }) 
        
    } catch (error) {
        console.error(error)
        dispatch({
            type: MOVIES_FAIL,
        }) 
    }
};