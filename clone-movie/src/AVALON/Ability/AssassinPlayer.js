import React, {useState} from "react";
import {Players} from "../gameSetting";
import {useLocation,useHistory} from "react-router-dom";

function AssassinPlayer() {
    const history = useHistory()
    const [kill,setKill] = useState('');
    const onChange = e => {
        setKill(e.target.value);
    };
    const onClick = e => {
        history.push({
            pathname : '/endGame',
            state : {
                value : e.target.value,
            }
        })
    };
    return(
        <div>
            {Players.map((user,index)=>(
                <label key={index}>{user.nickname}
                    <input type="radio"
                           name={'vote'}
                           value={user.role}
                           onChange={onChange}
                    />
                </label>
            ))}
            <button onClick={onClick} value={kill}>암살</button>
        </div>
    )
}
export default AssassinPlayer;