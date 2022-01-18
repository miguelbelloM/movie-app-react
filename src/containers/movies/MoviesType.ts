
import {
    MOVIES_LOADING,
    MOVIES_FAIL,
    MOVIES_SUCCESS,
} from "../../actions/MoviesActios";
// TYPES OF MOVIES
export type MoviesType = {
    page: number,
    results: MovieResultsType[]
}

type MovieResultsType ={
    poster_path: string,
    adult: boolean,
    overview: string,
    release_date: string,
    genre_ids: number[],
    id: number,
    original_title: string,
    original_language: string,
    title: string,
    backdrop_path: string,
    popularity: number,
    vote_count: number,
    video: boolean,
    vote_average: number
}

export type MoviesDispatchTypes = {
    type: typeof MOVIES_LOADING | typeof MOVIES_SUCCESS | typeof MOVIES_FAIL,
    data?: MoviesType,
}