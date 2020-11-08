import React from 'react';
import { Link } from "react-router-dom";
import MovieCard from "../Card/MovieCard";
import './MovieList.scss'

const MovieList = ({ searchTerm, movies, message }) => {
  return (
    <section className="movielist__base">
      <div className="container">
        <header className="movielist__header">
          {searchTerm && !message && <h2 className="headline">
            Results for
            <strong className="strong"> {searchTerm} </strong>
            search</h2>
          }
          {message && <span>{message} <strong className="strong">{searchTerm}</strong></span>}
        </header>
        <div className="movielist__list">
        {movies && movies.map((movie, index) => (
          movie.Poster !== 'N/A' && <div key={`${index}-link`} className="movielist__movie">
            <Link key={`${index}-link`} to={location => ({...location, pathname: `/movie/${movie.imdbID}`})}>
              <MovieCard key={`${index}-${movie.Title}`} movie={movie}/>
            </Link>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default MovieList