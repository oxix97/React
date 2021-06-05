import React, {useState} from "react";
import {expeditionCount} from "./gameSetting";
import {Players} from "./gameSetting";
import {withRouter} from 'react-router-dom'
import {Frame} from "./Styled";
import styled from "styled-components";

const Stage = styled.div`
    display : flex;
    flex-direction : row;
    flex-wrap : wrap;
`

function Expedition({history}) {
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
    const [voteStage,setVoteStage] = useState(0);
    const onChange = e => {
        e.target.checked ? setCount(count + 1) : setCount(count - 1);
    }
    const onClick = () => {
        if (count===temp[stage]){
            setVoteStage(voteStage+1);
            history.push({
                pathname : '/result',
                index : ''
            })
        }else{
            alert(`${temp[stage]}명을 선택해야합니다.`);
        }
    }
    return (
        <div>{
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
            ))
        }
            <button onClick={onClick}>결정</button>
        </div>
    );
}

export default withRouter(Expedition)