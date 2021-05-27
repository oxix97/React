import React from "react";

class ForceUpdateExample extends React.Component {
    constructor(props) {
        super(props);
        this.loading = true;
        this.formData = 'no data';
        this.handleData = this.handleData.bind(this);
        setTimeout(this.handleData, 2000);
    }

    handleData() {
        const data = 'new data';
        this.loading = false;
        this.formData = data + this.formData;
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <div>loading : {String(this.loading)}</div>
                <div>result : {this.formData}</div>
            </div>
        )
    }
}

export default ForceUpdateExample;