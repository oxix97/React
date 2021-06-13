import React, {createContext, useContext} from 'react';
import {Switch, Route} from 'react-router-dom';
import {
    Setting, Main, Result, Stage, End
} from './AVALON/index'
import {PlayState,UserState} from "./AVALON/gameSetting";
// export const AppContext = createContext()

function App() {
    const game = useContext(PlayState)
    const user = useContext(UserState)
    return (
        <PlayState.Provider value={game}>
            <UserState.Provider value={user}>
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