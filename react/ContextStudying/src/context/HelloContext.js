import React from "react";

const helloContext = React.createContext(defaultValue);

<FirstContext.Provider value = {
    hello : "Hello",
    world : "World"
}/>
export default class FirstContext