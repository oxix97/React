import React from 'react';
import {Switch,Route} from 'react-router-dom';
import {
    Begin, ReportUser,
    RoleDistribution,
    Vote, VoteResult,
} from "./Mafia/index";
import {GlobalStyle,MoiveStyle} from './AppStyle'
import Index from "./Movies";
function App() {
    return(
        // <Switch>
        //     <Route exact path={'/'} component={Begin}/>
        //     <Route exact path={'/meetingRoom'} component={RoleDistribution}/>
        //     <Route exact path={'/vote'} component={Vote}/>
        //     <Route exact path={'/voteResult'} component={VoteResult}/>
        //     <Route exact path={'/reporterVote'} component={ReportUser}/>
        // </Switch>
        <>
            <GlobalStyle/>
            <MoiveStyle>
                <Index/>
            </MoiveStyle>
        </>
    )
}

export default App;