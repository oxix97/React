import {Title} from "./Styled";
import MerlinPlayer from "./MerlinPlayer";
import PercivalPlayer from "./PercivalPlayer";
import React from "react";
import {Players} from "./gameSetting";

const PlayerInfo = () => {
    return (
        <Title>
            {
                Players.map((user, index) => (
                    <div key={index}>
                        <ul>
                            <li>{`nickname : ${user.nickname}`}</li>
                            <li>{`role : ${user.role}`}</li>
                        </ul>
                        {user.role ==='Merlin' ?
                            <MerlinPlayer index={index}/> : null
                        }
                        {user.role==='Percival' ?
                            <PercivalPlayer index={index}/> : null
                        }
                        {/*<Title>*/}
                        {/*    <Vote index={index}/>*/}
                        {/*</Title>*/}
                    </div>

                ))
            }
        </Title>
    )
}
export default PlayerInfo;