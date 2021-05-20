import React from "react";
import {useLocation} from 'react-router-dom'
import Vote from "./Vote";



function VoteResult({history}) {
    const location = useLocation();
    const voteResult = location.state.vote;

    return(
        <div>
            <h1>{voteResult}</h1>
        </div>
    )
}

export default VoteResult;