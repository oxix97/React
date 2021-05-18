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
                data: {movies},
            },
        }
            = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
        this.setState({movies, isLoading: false})
    }

    render() {
        const {isLoading, movies} = this.state;
        return (
            <div>
                {isLoading ? "Loading..." : movies.map((movie) => {
                    console.log(movie)
                    return <Movies
                        key={movie.id}
                        id={movie.id}
                        year={movie.year}
                        title={movie.title}
                        summary={movie.summary}
                        poster={movie.medium_cover_image}
                    />
                })}
            </div>
        )
    }
}

export default Index;