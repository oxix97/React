import React, {createContext} from 'react';
import {Switch, Route} from 'react-router-dom';
import {
    Setting, Main, Result, Stage, End
} from './AVALON/index'
import {Background, Players} from "./AVALON/Ability/gameSetting";
// export const AppContext = createContext()
export const PlayState= createContext();
export const UserState = createContext();

function App() {
    return (
        <PlayState.Provider value={Background}>
            <UserState.Provider value={Players}>
                <Switch>
                    <Route exact path={'/'} component={Setting}/>
                    <Route exact path={'/main'} component={Main}/>
                    <Route exact path={'/result'} component={Result}/>
                    <Route exact path={'/expedition'} component={Stage}/>
                    <Route exact path={'/endGame'} component={End}/>
                </Switch>
            </UserState.Provider>
        </PlayState.Provider>
    )
}

export default App;