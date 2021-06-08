import React, {useState} from "react";
import {Background, Players} from "./gameSetting";
import PlayerInfo from "./PlayerInfo";
import Vote from "./Vote";
import {Title} from "./Styled";
import {withRouter} from "react-router-dom";
import Expedition from "./Expedition";

function ExpeditionVote({history}) {
    const [isClick, setIsClick] = useState(false);
    const [count, setCount] = useState(Background.expeditionStage);
    const onClick = () => {
        setIsClick(true);
    }
    const nextPage = () => {
        let agree = 0;
        let oppose = 0;
        Players.map(e => e.toGo === 'agree' ? ++agree : ++oppose)
        if (agree >= oppose) {
            setCount(0);
            history.push({
                pathname: '/expedition',
            })
        } else if (count === 5) {
            Background.expeditionStage = 1;
        } else {
            Background.expeditionStage += 1;
            history.push({
                pathname: '/main'
            });
        }
        Background.represent += 1;
    }
    return (
        <div>
            <PlayerInfo/>
            <Expedition/>
            <Title>
                {Players.map((user, index) => <Vote key={index} index={index}/>)}
            </Title>
            <br/>
            <button onClick={onClick}>결과</button>
            {/*나중에 Timeout으로 처리*/}
            {
                isClick ?
                    <div>
                        {Players.map((user, index) => (
                            <ul key={index}>
                                <li>{`nickname : ${user.nickname}`}</li>
                                <li>{`vote : ${user.toGo === 'agree' ? '찬성' : '반대'}`}</li>
                            </ul>
                        ))}
                        <button onClick={nextPage}>다음</button>
                    </div> : null
            }
        </div>
    )
}

export default withRouter(ExpeditionVote);