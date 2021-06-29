import React, {useContext} from 'react';

import {PlayState,UserState} from "./AVALON/gameSetting";
import Avalon from "./AVALON/Avalon";
import AVALON_TEST from "./AVALON/AVALON_TEST";
import ReducerTest from "./Hook/Reducer/ReducerTest";

function App() {
    const game = useContext(PlayState)
    const user = useContext(UserState)
    return (
        // <PlayState.Provider value={game}>
        //     <UserState.Provider value={user}>
        //         <Avalon/>
        //     </UserState.Provider>
        // </PlayState.Provider>
        // <AVALON_TEST/>
        <ReducerTest/>
    )
}

export default App;