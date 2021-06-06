import React, {useState} from "react";
import {expeditionCount, Background} from "./gameSetting";
import {Players} from "./gameSetting";
import {withRouter} from 'react-router-dom';

function Expedition({history}, props) {
    let temp = [];
    switch (Players.length) {
        case 5 :
            temp = expeditionCount._5P;
            break;
        case 6:
            temp = expeditionCount._6P;
            break;
        case 7:
            temp = expeditionCount._7P;
            break;
        case 8:
        case 9:
        case 10:
            temp = expeditionCount._8to10P;
            break;
        default:
            alert('error');
    }
    const [stage, setStage] = useState(0);
    const [count, setCount] = useState(0);
    const [voteStage, setVoteStage] = useState(0);
    const [isClick, setIsClick] = useState(true);

    const onChange = e => {
        e.target.checked ? setCount(count + 1) : setCount(count - 1);
    }

    const onClick = () => {
        if (count === temp[stage]) {
            setVoteStage(voteStage + 1);
            history.push({
                pathname: '/result',
                index: ''
            });
            setIsClick(false);
        } else {
            alert(`${temp[stage]}명을 선택해야합니다.`);
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