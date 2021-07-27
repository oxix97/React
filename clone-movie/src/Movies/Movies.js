import React from "react";
import PropTypes from "prop-types";
import { GenresLi, GenresUl, Img, MoiveStyle, Title } from "../AppStyle";

function Movies({ title, year, summary, poster, genres }) {
  return (
    <MoiveStyle>
      <Img src={poster} alt={title} />
      <h3 className={"movie_title"}>{title}</h3>
      <h5 className={"movie_year"}>{year}</h5>
      <GenresUl>
        {genres.map((genres, index) => {
          return <GenresLi key={index}>{genres}</GenresLi>;
        })}
        <br />
      </GenresUl>
      <p className={"movie__summary"}>{summary.slice(0, 180)}...</p>
      <br />
    </MoiveStyle>
  );
}

Movies.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movies;
