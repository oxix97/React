import React from 'react';
// import Name from "./JSX/names";
// import Hello from "./JSX/Hello";
// JSX 영역

import {Route} from 'react-router-dom';
import {
    Home,
    About,
    Posts,
    Pad
} from './Route/pages';
import Menu from "./Route/components/Menu";
import SignIn from "./Modal/SignIn";
import Button from "./Modal/Button";
import StateValue from "./State/stateValue";
import InputValue from "./State/InputValue";
import TodoList from "./TodoList/Todo";
function App() {
    return (
        <>
            {/*<Menu/>*/}
            {/*<Route exact path='/' component={Home}/>*/}
            {/*<Route path='/About/:name?' component={About}/>*/}
            {/*<Route path='/Posts' component={Posts}/>*/}
            {/*<Button/>*/}
            {/*<StateValue/>*/}
            {/*<Route exact path = '/pad' component={Pad}/>*/}
            {/*<InputValue />*/}
            <TodoList/>
        </>
    );
}

export default App;