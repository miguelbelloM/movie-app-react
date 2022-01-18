import {
    MoviesDispatchTypes,
    MoviesType,
} from "./MoviesType";

interface DefaultStateI {
    loading: boolean,
    data?: MoviesType,
};
const defaultState = {
    loading: false,
};

const MovieReducer = (state: DefaultStateI = defaultState, action: MoviesDispatchTypes): DefaultStateI => {

    const responseState = {
        MOVIES_FAIL: {
            loading: false,
        },
        MOVIES_LOADING: {
            loading: true,
        },
        MOVIES_SUCCESS: {
            loading: false,
            data: action.data,
        },
    }

    return responseState[action.type] || state
}

export default MovieReducer;