import React, {useContext} from 'react';

import {Game, Player} from "./AVALON/gameSetting";
import Avalon from "./AVALON/Avalon";
import AVALON_TEST from "./AVALON/AVALON_TEST";
import ReducerTest from "./Hook/Reducer/ReducerTest";
import StartView from "./AVALON/gamePage/StartView";

function App() {

    return (
        // <PlayState.Provider value={game}>
        //     <UserState.Provider value={user}>
        //         <Avalon/>
        //     </UserState.Provider>
        // </PlayState.Provider>
        <AVALON_TEST/>
        // <ReducerTest/>
    )
}

export default App;