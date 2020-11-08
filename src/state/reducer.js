import { SEARCH_MOVIES_SUCCESS, SEARCH_MOVIE_SUCCESS, EMPTY_RESPONSE } from '../configs/actions'

export const initialState = {
  message: 'Search for a movie you like',
  movies: [],
  searchTerm: ''
};

/**
 * @param {object} state
 * @param {object} action
 * @return {object}
 */
export const reducer = (state, action) => {
  switch (action.type) {
    case SEARCH_MOVIES_SUCCESS:
      return {
        message: false,
        movies: action.payload,
        searchTerm: action.searchTerm
      };
    case SEARCH_MOVIE_SUCCESS:
      return action.payload;
    case EMPTY_RESPONSE:
      return {
        message: 'No results for this search',
        searchTerm: action.searchTerm
      };
    default:
      return state;
  }
};