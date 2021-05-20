import React from 'react';
import {Switch,Route} from 'react-router-dom';
import {
    RoleDistribution,
    Vote, VoteResult,
} from "./Mafia/index";
function App() {
    return(
        <Switch>
            <Route exact path={'/'} component={RoleDistribution}/>
            <Route exact path={'/vote'} component={Vote}/>
            <Route exact path={'/voteResult'} component={VoteResult}/>
        </Switch>
    )
}

export default App;