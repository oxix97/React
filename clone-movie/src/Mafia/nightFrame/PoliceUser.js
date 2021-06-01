import {useState} from "react";
import {Game} from "../meetingFrame/Users";

function PoliceUser() {
    const [index, setIndex] = useState(0);
    const [vote, setVote] = useState(Game.users[index].nickname)
    const [isClick, setIsClick] = useState(false);
    const [policeVote, setPoliceVote] = useState(false);

    const onChange = e => {
        setVote(e.target.value);
    };

    const onClick = e => {
        const playerIndex = e.target.value;
        setIndex(playerIndex);
        setPoliceVote(Game.users[playerIndex].role === 'Mafia')
        setIsClick(true);
    };

    return (
        <div>
            <select onChange={onChange}>
                {Game.users.map((user, index) => (
                    <option key={index} value={index}>{user.nickname}</option>
                ))}
            </select>
            <button onClick={onClick} disabled={isClick} value={vote}>수사하기</button>
            {
                isClick ? (
                    policeVote ? (
                        <h3>마피아가 맞습니다.</h3>
                    ) : <h3>마피아가 아닙니다.</h3>
                ) : null
            }
        </div>
    )
}

export default PoliceUser