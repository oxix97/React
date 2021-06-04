import React, {useState} from "react";
import shuffle from 'lodash.shuffle';
import {Title} from "./Styled";
import ExpeditionVote from "./ExpeditionVote";

export const angels = ['Merlin', 'Percival', 'Citizen'];
export const evils = ['Morgana', 'Assassin', 'Heresy', 'Modred'];
export const merlinSight = ['Morgana', 'Assassin', 'Heresy'];
export const percivalSight = ['Morgana', 'Merlin'];

export const expeditionCount = {
    _5P: [2, 3, 2, 3, 3],
    _6P: [2, 3, 4, 3, 4],
    _7P: [2, 3, 3, 4, 4],
    _8to10P: [3, 4, 4, 5, 5],
}

export const leader = {
    represent: ''
}


export const Players = [
    {nickname: 'user1', vote: '', role: '', toGo: ''},
    {nickname: 'user2', vote: '', role: '', toGo: ''},
    {nickname: 'user3', vote: '', role: '', toGo: ''},
    {nickname: 'user4', vote: '', role: '', toGo: ''},
    {nickname: 'user5', vote: '', role: '', toGo: ''},
    // {nickname: 'user6', vote: '', role: '',toGo : ''},
    // {nickname: 'user7', vote: '', role: '',toGo : ''},
    // {nickname: 'user8', vote: '', role: '',toGo : ''},
    // {nickname: 'user9', vote: '', role: '',toGo : ''},
]

const mustHaveRoles = ['Merlin', 'Percival', 'Citizen', 'Morgana', 'Assassin']
const expandRoles = ['Citizen', 'Heresy', 'Citizen', 'Modred', 'Citizen'];

export const PlayerInfo = () => {
    return (
        <Title>
            {
                Players.map((user, index) => (
                    <div>
                        <ul key={index}>
                            <li>{`nickname : ${user.nickname}`}</li>
                            <li>{`role : ${user.role}`}</li>
                        </ul>
                        <Title>
                            <ExpeditionVote index={index}/>
                        </Title>
                    </div>

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
                pathname: '/main'
            })
        } else {
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