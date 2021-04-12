import React from 'react';
// import Name from "./JSX/names";
// import Hello from "./JSX/Hello";
// JSX 영역

import {Route} from 'react-router-dom';
import {
    Home,
    About
} from './Route/pages';

function App() {
    return (
        <>
            <Route exact path = '/' component={Home}/>
            <Route path='/About/:name?' component={About}/>
        </>
    );
}

export default App;