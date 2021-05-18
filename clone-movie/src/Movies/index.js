import React from "react";

class Index extends React.Component {

    state = {
        isLoading : true,
        movies : [],
    };

    componentDidMount() {
        // 영화 데이터 로딩
        setTimeout(()=>{
            this.setState({isLoading : false});
        },2000);
    }

    render() {
        const {isLoading} = this.state;
        return(
            <div>
                {isLoading ? 'Loading...' : 'We are ready'}
                {/*we are ready 부분에 영화 데이터 넣을 예정*/}
            </div>
        )
    }
}

export default Index