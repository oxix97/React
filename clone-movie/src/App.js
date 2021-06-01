import React, {useContext} from 'react';
import {Switch, Route} from 'react-router-dom';
import {
    Begin, Night, ReportUser,
    RoleDistribution,
    Vote, VoteResult,
} from "./Mafia/index";
import HomePageComponent from "./Context/HomePageComponent";
import Index from "./Context";
import {Context} from "./Mafia/context";
import {Users} from "./Mafia/meetingFrame/Users";

function App() {
    return (
        <Switch>
            <Context.Provider value={Users}>
                <Route exact path={'/'} component={Begin}/>
                <Route exact path={'/meetingRoom'} component={RoleDistribution}/>
                <Route exact path={'/vote'} component={Vote}/>
                <Route exact path={'/voteResult'} component={VoteResult}/>
                <Route exact path={'/reporterVote'} component={ReportUser}/>
                <Route exact path={'/night'} component={Night}/>
            </Context.Provider>
        </Switch>
        // <div>
        //     <HomePageComponent/>
        //     <Index/>
        // </div>
    )
}

export default App;