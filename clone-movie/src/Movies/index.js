import React from "react";
import axios from "axios";
import Movies from "./Movies";

class Index extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class={"container"}>
        {isLoading ? (
          <div class={"movies"}>
            <span class={"load_text"}>Loading...</span>
          </div>
        ) : (
          <div>
            {movies.map((movie) => (
              <Movies
                key={movie.id}
                title={movie.title}
                poster={movie.medium_cover_image}
                summary={movie.summary}
                year={movie.year}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Index;
