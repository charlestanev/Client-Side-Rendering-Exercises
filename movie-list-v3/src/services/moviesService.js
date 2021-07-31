import { get, post } from './requester.js';
import * as endpoints from './endpoints.js';

function getAllMovies() {
    return get(endpoints.movies);
}

function createMovie(title, description, imgUrl) {
    return post(endpoints.movies, {title, description, imgUrl})
}

export default {
    getAllMovies,
    createMovie,
}