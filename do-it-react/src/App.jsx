import ChildComponent from "./Component/ChildComponent";
import React from "react";

class App extends React.Component {
    render() {
        const array = [1,2,3]
        const obj = {name : 'title', age : 30}
        const node = <h1>node</h1>
        const func  = () => {console.log('message')}

        return (
            <div>
                <ChildComponent
                    arrayValue={array}
                    // objValue={obj}
                    nodeValue={node}
                    funcValue={func}
                />
            </div>
        );
    }


}

export default App;
