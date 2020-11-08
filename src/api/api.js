import { SEARCH_MOVIES_SUCCESS, SEARCH_MOVIE_SUCCESS, EMPTY_RESPONSE } from '../configs/actions'

const API_KEY = `c16e8902`
const MOVIE_API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

export const fetchMovies = (search = '') => (
  search && fetch(`${MOVIE_API_URL}&s=${search}`)
    .then(response => response.json())
);

export const fetchMovie = (id) => (
  id && fetch(`${MOVIE_API_URL}&i=${id}`)
    .then(response => response.json())
);

export const processMovieResponse = (response) => {
  return {
    type: SEARCH_MOVIE_SUCCESS,
    payload: response
  }
}

export const processMoviesResponse = (response, searchTerm) => {
  const { Response, Search } = response
  let data = {}

  if (Response === `True`) {
    data = {
      payload: Search,
      searchTerm,
      type: SEARCH_MOVIES_SUCCESS
    }
  } else if (Response === `False`) {
    data = {
      searchTerm,
      type: EMPTY_RESPONSE
    }
  }

  return data
}