import React from "react";

class StateExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            formData: 'no data',
        };
        this.handleData = this.handleData.bind(this);
        setTimeout(this.handleData, 2000);
    }

    handleData(data) {
        this.setState(prevState=>({
            loading : false,
            formData : data + prevState.formData
        }))
    }

    render() {
        return (
            <div>
                <div>로딩중 : {String(this.state.loading)}</div>
                <div>결과 : {this.state.formData}</div>
            </div>
        );
    }
}

export default StateExample