import React, {useContext} from 'react';

import {Game, Player} from "./AVALON/gameSetting";
import Avalon from "./AVALON/Avalon";
import Store from "./AVALON/RepresentVote/Store";
import AVALON_TEST from "./AVALON/AVALON_TEST";
import PublicStage from "./AVALON/gamePage/mainView/PublicStage";



function App() {

    return (
        // <PlayState.Provider value={game}>
        //     <UserState.Provider value={user}>
        //         <Avalon/>
        //     </UserState.Provider>
        // </PlayState.Provider>
        <AVALON_TEST/>
    )
}

export default App;