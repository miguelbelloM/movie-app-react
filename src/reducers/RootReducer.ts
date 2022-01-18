import {combineReducers} from "redux";

//REDUCERS
import MovieReducer from "./movie/MoviesReducer";

//REDUCERS MAPS
const RootReducer = combineReducers({
    movies: MovieReducer,
});

export default RootReducer