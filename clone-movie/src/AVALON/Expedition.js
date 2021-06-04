import React, {useState} from "react";
import {GameFrame} from "./Styled";
import {Players} from "./gameSetting";


function Expedition() {
    const [count, setCount] = useState(0);
    const onClick = () => {
        Players.map((user, index) => {
          console.log(user.nickname);
          console.log(user.toGo)
        })
    };
    return (
        <GameFrame>
            <button onClick={onClick}>button</button>
        </GameFrame>
    );
}

export default Expedition;