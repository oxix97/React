import React, {useState} from "react";
import {Background, Players}from "../Ability/gameSetting"
import PlayerInfo from "../MainPage/PlayerInfo";
import Vote from "./Vote";
import {Title} from "../MainPage/Styled";
import {withRouter} from "react-router-dom";
import Expedition from "./Expedition";

function ExpeditionVote({history}) {
    const [isClick, setIsClick] = useState(false);
    const onClick = () => {
        setIsClick(true);
    }
    const nextPage = () => {
        let agree = 0;
        let oppose = 0;
        Players.map(e => e.toGo === 'agree' ? ++agree : ++oppose)
        if (agree >= oppose) {
            Background.voteStage = 0;
            history.push({
                pathname: '/expedition',
                state: {
                    vote: Background.voteStage,
                }
            })
        } else {
            if (Background.voteStage === 4) {
                Background.takeStage[Background.expeditionStage] = 'fail';
                Background.expeditionStage += 1;
                Background.voteStage = 0;
            } else {
                Background.voteStage += 1;
            }
            history.push({
                pathname: '/main',
                state: {
                    vote: Background.voteStage,
                }
            });
        }
        Background.represent += 1;
        Background.represent %= Players.length;
        // 해당 부분 state 로 구현하기
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