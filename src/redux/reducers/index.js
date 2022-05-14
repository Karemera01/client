import { combineReducers } from 'redux';
import { selectedMovieReducer, movieReducer } from './movieReducer';


export const reducers = combineReducers({
    allMovies: movieReducer,
    movie: selectedMovieReducer,
});