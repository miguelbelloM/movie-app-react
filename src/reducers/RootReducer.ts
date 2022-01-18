import {combineReducers} from "redux";
import MovieReducer from "./MoviesReducer";

const RootReducer = combineReducers({
    movies: MovieReducer,
});

export default RootReducer