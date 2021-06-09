import React, {useState} from "react";
import {angels, Background, Players} from "../gameSetting";
import AngelsVote from "./AngelsVote";
import EvilsVote from "./EvilsVote";

function Stage({history}, props) {
    const [isClick, setIsClick] = useState(false);
    const stage = Background.expeditionStage;
    const onClick = () => {
        setIsClick(true)
        if (Background.expeditionStage === 3) {
            if (Background.vote.filter(element => 'fail' === element).length >= 2) {
                Background.takeStage[stage] = 'fail';
            } else {
                Background.takeStage[stage] = 'success';
            }
        } else {
            Background.vote.includes('fail') ?
                Background.takeStage[stage] = 'fail' :
                Background.takeStage[stage] = 'success';
        }
        Background.expeditionStage += 1;

    }
    const push = () => {
        history.push({
            pathname: '/main',
            vote: stage,
        })
    }
    return (
        <div>
            {
                Players.map((user, index) => (
                    <ul key={index}>
                        {user.selected ?
                            <div>
                                <li>{user.nickname}</li>
                                {angels.includes(user.role) ?
                                    <AngelsVote value={index}/>
                                    :
                                    <EvilsVote value={index}/>}
                            </div>
                            : null}
                        {user.selected = false}
                    </ul>
                ))
            }

            <button onClick={onClick} disabled={isClick}>결과 보기</button>
            {
                isClick ?
                    stage !== 4 ?
                        <div>
                            {Background.vote.includes('fail') ? '원정 실패' : '원정 성공'}
                            <div>성공 개수 : {Background.vote.filter(element => 'success' === element).length}</div>
                            <div>실패 개수 :{Background.vote.filter(element => 'fail' === element).length}</div>
                        </div> :
                        <div>
                            {Players.length >= 7 && Background.vote.filter(element => 'fail' === element).length >= 2 ? '원정 실패' : '원정 성공'}
                            <div>성공 개수 : {Background.vote.filter(element => 'success' === element).length}</div>
                            <div>실패 개수 :{Background.vote.filter(element => 'fail' === element).length}</div>
                        </div>
                    : null
            }
            {Background.vote = []}
            <button onClick={push}>돌아 가기</button>
        </div>
    )
}

export default Stage;