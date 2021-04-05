import React from "react";
import HelloContext from './HelloContext'
class HelloWorld extends React.Component{
    render() {
        const  value = this.context;

        return(
            <div>
                {hello}{world}
            </div>
        )
    }
}
HelloWorld.contextType = HelloContext;