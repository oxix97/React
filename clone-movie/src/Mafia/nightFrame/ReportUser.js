import React, {useState} from "react";
import {Game} from "../meetingFrame/Users";

const ReportUser = ({history}) => {
    const [index, setIndex] = useState(0);
    const [vote, setVote] = useState(Game.users[index].nickname)
    const [isClick, setIsClick] = useState(false);
    const [reportVote, setReportVote] = useState('');
    const ReportOnChange = e => {
        setVote(e.target.value);
    };

    const ReportOnClick = e => {
        const index = e.target.value;
        setIndex(index);
        setReportVote(Game.users[index].role);
        setIsClick(true);
        Game.users[index].skill = false;
    }

    return (
        <div>
            <select onChange={ReportOnChange}>
                {Game.users.map((user, index) =>
                    (<option key={`player${index}`} value={index}>{user.nickname}</option>))}
            </select>
            <button value={vote} disabled={isClick} onClick={ReportOnClick}>취재</button>
            {
                isClick ? (
                    <h3>{reportVote}입니다.</h3>
                ) : <button onClick={() => history.push({
                        pathname: '/policeVote'
                    }
                )}>넘어가기
                </button>
            }
        </div>
    )
}

export default ReportUser;