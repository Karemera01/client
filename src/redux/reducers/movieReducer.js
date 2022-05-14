import { ActionTypes } from "../constants/actionTypes";

const initialState = { movies: [] };


export const selectedMovieReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_MOVIE:
            return { ...state, ...payload };
        case ActionTypes.DELETE_SELECTED_MOVIE:
            return {};
        default:
            return state;
    }
};

export const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_MOVIES:
            return { ...state, movies: payload };
        default:
            return state;
    }
};