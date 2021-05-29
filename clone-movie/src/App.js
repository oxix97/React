import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {
    Begin, Night, ReportUser,
    RoleDistribution,
    Vote, VoteResult,
} from "./Mafia/index";

function App() {
    return (
        <Switch>
            <Route exact path={'/'} component={Begin}/>
            <Route exact path={'/meetingRoom'} component={RoleDistribution}/>
            <Route exact path={'/vote'} component={Vote}/>
            <Route exact path={'/voteResult'} component={VoteResult}/>
            <Route exact path={'/reporterVote'} component={ReportUser}/>
            <Route exact path={'/night'} component={Night}/>
        </Switch>
    )
}

export default App;