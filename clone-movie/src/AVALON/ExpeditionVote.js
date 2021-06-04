import React, {useState} from "react";
import {Players} from "./gameSetting";

function ExpeditionVote(props) {
    const [count, setCount] = useState(1);
    const [vote, setVote] = useState('agree');
    const [click, setClick] = useState(false);
    const onChange = e => {
        setVote(e.target.value);
    };

    const onClick = e => {
        if (e.target.value === 'agree') {
            setVote('agree')
        } else if (e.target.value === 'oppose') {
            setVote('oppose')
            setCount(count + 1);
        }
        Players[props.index].toGo = vote;
        setClick(true);
    };

    return (
        <div>
            {click ?
                <div>{vote === 'agree' ? '찬성' : '반대'}</div> :
                <div>
                    <form>
                        <label>찬성<input
                            type="radio"
                            name={'vote'}
                            value={'agree'}
                            onChange={onChange}/>
                        </label>
                        <label>반대 <input
                            type="radio"
                            name={'vote'}
                            value={'oppose'}
                            onChange={onChange}/>
                        </label>
                    </form>
                    <button
                        onClick={onClick}
                        disabled={click}
                        value={vote}>
                        확인
                    </button>
                </div>
            }
        </div>
    )
}

export default ExpeditionVote