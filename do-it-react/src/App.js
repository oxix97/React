import React from "react";
import LifeCycleExample from "./Component/LifeCycleExample";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hasDestroyed : false}
    }
    componentDidMount(){
        this.setState({hasDestroyed : true})
    }
    
    render() {
        return (
            <div>
                {this.state.hasDestroyed? null : <LifeCycleExample/>}
            </div>
        );
    }
}

export default App;
