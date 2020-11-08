import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { initialState, reducer } from "../../state/reducer";
import { fetchMovies, processMoviesResponse } from '../../api/api';
import MovieList from "../Movie/List/MovieList";
import SearchBox from "../SearchBox/SearchBox";
import MovieDetail from '../Movie/Detail/MovieDetail';

import './App.scss'

const App = () => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const { movies, message, searchTerm } = state;
  const doSearch = (term) => {
    if (term) {
      fetchMovies(term).then((data) => {
        dispatch(processMoviesResponse(data, term));
      });
    }
  }
  const searchBoxProps = {
    text: "Enter a title",
    buttonText: "Search",
    handleSubmit: doSearch
  }
  const movieListProps = {
    searchTerm,
    movies,
    message
  }

  return (
    <Router>
      <Route exact path="/">
        <main className="app__main">
          <div className="container">
            <SearchBox {...searchBoxProps}/>
            <MovieList {...movieListProps}/>
          </div>
        </main>
      </Route>
      <Route path="/movie/:id">
        <MovieDetail/>
      </Route>
    </Router>
  );
};

export default App