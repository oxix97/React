import React from 'react';
// import Name from "./JSX/names";
// import Hello from "./JSX/Hello";
// JSX 영역

import {Route} from 'react-router-dom';
import {
    Home,
    About,
    Posts
} from './Route/pages';
import Menu from "./Route/components/Menu";

import SignIn from "./Modal/SignIn";
import Button from "./Modal/Button";
import './Modal/sign.scss';

function App() {
    return (
        <>
            {/*<Menu/>*/}
            {/*<Route exact path='/' component={Home}/>*/}
            {/*<Route path='/About/:name?' component={About}/>*/}
            {/*<Route path='/Posts' component={Posts}/>*/}
            <Button/>
        </>
    );
}

export default App;