import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {
    Setting, Main, Result, Stage
} from './AVALON/index'

function App() {
    return (
        <Switch>
            <Route exact path={'/'} component={Setting}/>
            <Route exact path={'/main'} component={Main}/>
            <Route exact path={'/result'} component={Result}/>
            <Route exact path={'/expedition'} component={Stage}/>
        </Switch>
    )
}

export default App;

// import {
//     Begin, Night, NightResult, ReportUser,
//     RoleDistribution,
//     Vote, VoteResult,
// } from "./Mafia/index";
// import HomePageComponent from "./Context/HomePageComponent";
// import Index from "./Context";
// import {Context} from "./Mafia/context";
// import {Game} from "./Mafia/meetingFrame/Users";

// <Switch>
//     <Context.Provider value={Game}>
//         <Route exact path={'/'} component={Begin}/>
//         <Route exact path={'/meetingRoom'} component={RoleDistribution}/>
//         <Route exact path={'/vote'} component={Vote}/>
//         <Route exact path={'/voteResult'} component={VoteResult}/>
//         <Route exact path={'/reporterVote'} component={ReportUser}/>
//         <Route exact path={'/night'} component={Night}/>
//         <Route exact path={'/nightResult'} component={NightResult}/>
//     </Context.Provider>
// </Switch>