import React, {useState} from "react";
import {needPlayers} from "./gameSetting";
import {Players} from "./gameSetting";
import {withRouter} from 'react-router-dom';

function Expedition({history}) {
    let temp = [];
    switch (Players.length) {
        case 5 :
            temp = needPlayers._5P;
            break;
        case 6:
            temp = needPlayers._6P;
            break;
        case 7:
            temp = needPlayers._7P;
            break;
        case 8:
        case 9:
        case 10:
            temp = needPlayers._8to10P;
            break;
        default:
            alert('error');
    }
    const [expeditionStage, setExpeditionStage] = useState(0);
    const [playerCount, setPlayerCount] = useState(0);
    const [voteStage, setVoteStage] = useState(0);
    const [isClick, setIsClick] = useState(true);

    const onChange = e => {
        Players[e.target.value].selected = e.target.checked;
        e.target.checked ? setPlayerCount(playerCount + 1) : setPlayerCount(playerCount - 1);
    }

    const onClick = () => {
        if (playerCount === temp[expeditionStage]) {
            setVoteStage(voteStage + 1);
            history.push({
                pathname: '/result',
            });
            setIsClick(false);
        } else {
            alert(`${temp[expeditionStage]}명을 선택해야합니다.`);
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