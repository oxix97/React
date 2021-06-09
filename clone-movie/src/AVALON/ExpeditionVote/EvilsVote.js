import React, {useState} from "react";
import {withRouter} from "react-router-dom";
import {Background, Players} from "../gameSetting";

function EvilsVote({history},props) {
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
            <button onClick={onClick} value={'fail'} disabled={isClick}>
                실패
            </button>
        </div>
    )
}

export default withRouter(EvilsVote);