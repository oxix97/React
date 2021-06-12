import React, {useState} from "react";
import {Background, needPlayers, Players} from "../Ability/gameSetting"
import {withRouter} from 'react-router-dom';

function Expedition({history}) {
    const [playerCount, setPlayerCount] = useState(0);
    const [voteStage, setVoteStage] = useState(0);
    const [isClick, setIsClick] = useState(true);
    const takeStage = Background.takeStage;
    const expeditionStage = Background.expeditionStage;
    const onChange = e => {
        Players[e.target.value].selected = e.target.checked;
        e.target.checked ? setPlayerCount(playerCount + 1) : setPlayerCount(playerCount - 1);
    }
    const onClick = () => {
        if (playerCount === takeStage[expeditionStage]) {
            setVoteStage(voteStage + 1);
            history.push({
                pathname: '/result',
            });
            setIsClick(false);
        } else {
            alert(`${takeStage[expeditionStage]}명을 선택해야합니다.`);
        }
    }
    return (
        <div>{
            isClick ?
                Players.map((user, index) => (
                    <ul key={index}>
                        <label>{user.nickname}
                            <input
                                onChange={onChange}
                                type="checkbox"
                                name={'checkbox'}
                                value={index}/>
                        </label>
                    </ul>
                )) : null
        }
            <button disabled={!isClick} onClick={onClick}>결정</button>
        </div>
    );
}

export default withRouter(Expedition)