import React from "react";
import TakeStage from "./TakeStage";
import VoteStage from "./VoteStage";
import PlayerList from "./PlayerList";

function PublicStage() {
    return(
        <div>
            <TakeStage/>
            <VoteStage/>
            <PlayerList/>
        </div>
    )
}
export default PublicStage