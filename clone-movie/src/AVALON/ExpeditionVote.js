import React, {useState} from "react";
import {Players} from "./gameSetting";
import PlayerInfo from "./PlayerInfo";
import Vote from "./Vote";
import {Title} from "./Styled";
import {withRouter} from "react-router-dom";

function ExpeditionVote({history}) {
    const [isClick, setIsClick] = useState(false);

    const onClick = () => {
        setIsClick(true);
    }
    const nextPage = () => {
        let agree = 0;
        let oppose = 0;
        Players.map(e => e.toGo === 'agree' ? ++agree : ++oppose)
        agree >= oppose ? history.push({
            pathname : '/expedition'
        }) : history.push({
            pathname : '/main'
        })
    }
    return (
        <div>
            <PlayerInfo/>
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