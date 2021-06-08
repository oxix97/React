import React, {useState} from "react";
import {useLocation} from 'react-router-dom'
function AngelsVote({history},props) {
    const [isClick,setIsClick] = useState(false);
    const onClick = e =>{
        setIsClick(true);
        console.log(e.target.value)
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