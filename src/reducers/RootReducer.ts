import {combineReducers} from "redux";
import MovieReducer from "./movie/MoviesReducer";

const RootReducer = combineReducers({
    movies: MovieReducer,
});

export default RootReducer