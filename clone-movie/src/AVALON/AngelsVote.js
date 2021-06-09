import React, {useState} from "react";
import {Background, Players} from "./gameSetting";

function AngelsVote({history},props) {
    const [isClick,setIsClick] = useState(false);
    const onClick = e =>{
        Background.vote.push(e.target.value);
        setIsClick(true);
    }
    return(
        <div>
            <button onClick={onClick} value={'success'} disabled={isClick}>
                성공
            </button>
        </div>
    )
}

export default AngelsVote;