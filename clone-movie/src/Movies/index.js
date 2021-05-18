import React from "react";
import axios from "axios";

class Index extends React.Component {

    state = {
        isLoading: true,
        movies: [],
    };

    componentDidMount() {
        this.getMovies();
    }

    getMovies = async() => {
        const{
            data : {
                data:{movies},
            },
        }
         = await axios.get('https://yts-proxy.now.sh/list_movies.json');
        this.setState({movies,isLoading:false})
    }


    render() {
        const {isLoading} = this.state;
        return (
            <div>
                {isLoading ? 'Loading...' : 'We are ready'}
                {/*we are ready 부분에 영화 데이터 넣을 예정*/}
            </div>
        )
    }
}

export default Index