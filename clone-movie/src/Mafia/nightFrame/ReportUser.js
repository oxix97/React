import React, {useState} from "react";
import {Users} from "../meetingFrame/Users";

const ReportUser = ({history},props) => {
    const [index,setIndex] = useState(0);
    const [vote, setVote] = useState(Users[index].nickname)
    const [isClick, setIsClick] = useState(false);
    const [reportVote, setReportVote] = useState('');
    const ReportOnChange = e => {
        setVote(e.target.value);
        console.log('ReportOnChange');
    };

    const ReportOnClick = e => {
        const index = e.target.value;
        setIndex(index);
        setReportVote(Users[index].role);
        setIsClick(true);
        Users[index].skill=false;
        console.log('ReportOnClick')
    }

    return (
        <div>
            <select onChange={ReportOnChange}>
                {Users.map((user, index) =>
                    (<option key={`player${index}`} value={index}>{user.nickname}</option>))}
            </select>
            <button value={vote} disabled={isClick} onClick={ReportOnClick}>취재</button>
            <button onClick={() => history.push({
                    pathname: '/policeVote'
                }
            )}>넘어가기
            </button>
            {
                isClick ? (
                    <h3>{reportVote}입니다.</h3>
                ) : null
            }


        </div>
    )
}

export default ReportUser;