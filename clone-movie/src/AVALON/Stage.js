import React, {useState} from "react";
import {angels, Players} from "./gameSetting";
import {is} from "immutable";
import AngelsVote from "./AngelsVote";
import EvilsVote from "./EvilsVote";

function Stage({history},props) {
    const [isClick, setIsClick] = useState(false);
    const onClick = () => {
        setIsClick(true);
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
                                    <AngelsVote/>
                                    :
                                    <EvilsVote/>}
                            </div>
                            : null}
                        {user.selected = false}
                    </ul>
                ))
            }
            <button onClick={onClick}>결과 보기</button>
        </div>
    )
}

export default Stage;