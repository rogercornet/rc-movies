import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { initialState, reducer } from "../../../state/reducer";
import { fetchMovie, processMovieResponse } from "../../../api/api"

import './MovieDetail.scss'

const MovieDetail = () => {
  const [ movie, dispatch ] = useReducer(reducer, initialState)
  const { id } = useParams();
  useEffect(() => {
    fetchMovie(id).then(response => {
      dispatch(processMovieResponse(response))
    })
  }, [id])
  const infoTemplate = (movie, item) => {
    switch (item) {
      case `BoxOffice`:
      case `Director`:
      case `DVD`:
      case `imdbID`:
      case `Poster`:
      case `Ratings`:
      case `Response`:
      case `Title`:
      case `Type`:
      case `Website`:
      case movie[item] === `N/A`:
        break;
      default:
        return (
          <div key={item} className="moviedetail__infoBlock">
            <p><b>{item}</b>: {movie[item]}</p>
          </div>
        )
    }
  }
  const renderInfo = () => {
    return (
      Object.keys(movie).map(item => infoTemplate(movie, item))
    )
  }
  const {
    Title,
    Director,
    Poster
  } = movie

  return (
    <main className="app__main">
      <article className="moviedetail__base">
        <div className="container">
          <div className="moviedetail__wrapper">
            <figure className="moviedetail__figure">
              <img
                className="moviedetail__image"
                src={Poster}
                alt={`The movie titled: ${Title}`}
              />
            </figure>
            <section className="moviedetail__info">
              <header className="moviedetail__header">
                <h1 className="moviedetail__title headline headline--h1">{Title}</h1>
                {Director !== 'N/A' && <h2 className="moviedetail__director subheadline"><i className="italic">Directed by: </i>{Director}</h2>}
              </header>
              {renderInfo()}
            </section>
          </div>
        </div>
      </article>
    </main>
  );
};

export default MovieDetail;