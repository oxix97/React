import React from 'react';
import ChildComponent from "./Component/ChildComponent";

class App extends React.Component {
    render() {
        return(
            <div>
                <ChildComponent
                    boolValue={true}
                    numValue={1}
                    arrayValue={[1,2,3]}
                    objValue={{name: 'title', age : 30}}
                    nodeValue={<h1>node</h1>}
                    funcValue={() => {console.log('message');}}
                />
            </div>
        )
    }
}

export default App;