import React from "react";
import {GameFrame} from "./Styled";
import {Players} from "./gameSetting";

function VoteResult({history}) {
    const onClick = () => {
        const agreeCount =
            Players.map(e => e.toGo).filter(value => 'agree' === value).length;
        const opposeCount =
            Players.map(e => e.toGo).filter(value => 'oppose' === value).length;
        agreeCount >= opposeCount ?
            console.log('찬성') : console.log('반대')
        // history.push('/voteResult')
    };

    return (
        <GameFrame>
            {/*<button onClick={onClick}>button</button>*/}
        </GameFrame>
    );
}

export default VoteResult;