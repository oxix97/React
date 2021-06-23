import React, {createContext, useContext} from 'react';
import {Switch, Route} from 'react-router-dom';
import {
    Setting, Main, Result, Stage, End
} from './AVALON/index'
import {PlayState,UserState} from "./AVALON/gameSetting";
import Avalon from "./AVALON/Avalon";

function App() {
    const game = useContext(PlayState)
    const user = useContext(UserState)
    return (
        <PlayState.Provider value={game}>
            <UserState.Provider value={user}>
                <Avalon/>
            </UserState.Provider>
        </PlayState.Provider>
    )
}

export default App;