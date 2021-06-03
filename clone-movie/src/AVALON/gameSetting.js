import React from "react";
import shuffle from 'lodash.shuffle';
import {Title} from "./Styled";

export const angels = ['Merlin','Percival','Citizen'];
export const evils = ['Morgana','Assassin','Heresy','Modred'];
export const merlinSight = ['Morgana','Assassin','Heresy'];
export const percivalSight = ['Morgana','Merlin'];

export const Players = [
    {nickname: 'user1', vote: '', role: '',},
    {nickname: 'user2', vote: '', role: '',},
    {nickname: 'user3', vote: '', role: '',},
    {nickname: 'user4', vote: '', role: '',},
    {nickname: 'user5', vote: '', role: '',},
    {nickname: 'user6', vote: '', role: '',},
    {nickname: 'user7', vote: '', role: '',},
    {nickname: 'user8', vote: '', role: '',},
    {nickname: 'user9', vote: '', role: '',},
]

const mustHaveRoles = ['Merlin','Percival','Citizen','Morgana','Assassin']
const expandRoles = ['Citizen', 'Heresy', 'Citizen', 'Modred', 'Citizen'];

export const PlayerInfo = () => {
    return(
        <Title>
            {
                Players.map((user,index)=>(
                    <ul key={index}>
                        <li>{`nickname : ${user.nickname}`}</li>
                        <li>{`role : ${user.role}`}</li>
                    </ul>
                ))
            }
        </Title>
    )
}

function GameSetting({history}) {
    const onClick = () => {
        if (Players.length >= 5) {
            const temp = [
                ...mustHaveRoles,
                ...expandRoles.slice(0, Players.length - 5),
            ];
            const roles = shuffle(temp);
            Players.map((user, index) => {
                user.role = roles[index];
            });
            history.push({
                pathname : '/main'
            })
        }else{
            alert('error')
        }

    };
    return (
        <div>
            <button onClick={onClick}>게임 시작</button>
        </div>
    )
}

export default GameSetting;