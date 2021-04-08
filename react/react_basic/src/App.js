import React, {useState} from 'react'
import {Route} from 'react-router-dom'
import {Home, About} from './pages'
import Hello from "./Hello";

const App = () => {

    return (
        <div>
            <Hello name = "react"/>
        </div>
    );
};

export default App;
