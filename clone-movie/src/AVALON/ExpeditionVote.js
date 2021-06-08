import React, {useState} from "react";
import {Background, Players} from "./gameSetting";
import PlayerInfo from "./PlayerInfo";
import Vote from "./Vote";
import {Title} from "./Styled";
import {withRouter} from "react-router-dom";
import Expedition from "./Expedition";

function ExpeditionVote({history}) {
    const [isClick, setIsClick] = useState(false);
    const [vote, setVote] = useState(Background.expeditionStage);
    const [count, setCount] = useState(Background.represent);
    const onClick = () => {
        setIsClick(true);
    }
    const nextPage = () => {
        let agree = 0;
        let oppose = 0;
        Players.map(e => e.toGo === 'agree' ? ++agree : ++oppose)
        if (agree >= oppose) {
            setVote(1);
            history.push({
                pathname: '/expedition',
                state: {
                    vote: vote,
                    count: count,
                }
            })

        } else if (vote === 5) {
            setVote(1)
            // 5스텍 패배시 원정 패배
        } else {
            // 반대 인원이 더 많아 다음 인원에게 대표자를 넘긴다.
            setVote(vote + 1);
            Background.expeditionStage = vote;
            history.push({
                pathname: '/main',
                state: {
                    vote: vote,
                    count: count,
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