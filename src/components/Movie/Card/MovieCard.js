import React from "react";

import './MovieCard.scss'

const MovieCard = ({ movie }) => {
  const { Poster, Title } = movie
  return (
    <figure className="moviecard__base">
      <img
        className="moviecard__image"
        src={Poster}
        alt={`The movie titled: ${Title}`}
      />
      <figcaption className="moviecard__caption">{Title}</figcaption>
    </figure>
  );
};

export default MovieCard;