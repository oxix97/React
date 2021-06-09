import React from "react";
import shuffle from 'lodash.shuffle';


export const angels = ['Merlin', 'Percival', 'Citizen'];
export const evils = ['Morgana', 'Assassin', 'Heresy', 'Modred'];
export const merlinSight = ['Morgana', 'Assassin', 'Heresy'];
export const percivalSight = ['Morgana', 'Merlin'];

export const needPlayers = {
    _5P: [2, 3, 2, 3, 3],
    _6P: [2, 3, 4, 3, 4],
    _7P: [2, 3, 3, 4, 4],
    _8to10P: [3, 4, 4, 5, 5],
}
export const voteStageColor = ['white','white','white','white','red'];

export const Background = {
    voteStage : 0,
    expeditionStage : 0,
    represent : 0,
    vote : [],
    takeStage : [],
}

export const Players = [
    {nickname: 'user1', role: '', vote: '', toGo: '', selected: false},
    {nickname: 'user2', role: '', vote: '', toGo: '', selected: false},
    {nickname: 'user3', role: '', vote: '', toGo: '', selected: false},
    {nickname: 'user4', role: '', vote: '', toGo: '', selected: false},
    {nickname: 'user5', role: '', vote: '', toGo: '', selected: false},
    // {nickname: 'user6', role: '', vote: '', toGo: '',selected : false},
    // {nickname: 'user7', role: '', vote: '', toGo: '',selected : false},
    // {nickname: 'user8', role: '', vote: '', toGo: '',selected : false},
    // {nickname: 'user9', role: '', vote: '', toGo: '',selected : false},
]

const mustHaveRoles = ['Merlin', 'Percival', 'Citizen', 'Morgana', 'Assassin'];
const expandRoles = ['Citizen', 'Heresy', 'Citizen', 'Modred', 'Citizen'];

function GameSetting({history}) {
    switch (Players.length) {
        case 5 :
            Background.takeStage = needPlayers._5P;
            break;
        case 6:
            Background.takeStage = needPlayers._6P;
            break;
        case 7:
            Background.takeStage = needPlayers._7P;
            break;
        case 8:
        case 9:
        case 10:
            Background.takeStage = needPlayers._8to10P;
            break;
        default:
            alert('error');
    }
    const onClick = () => {
        const PlayersNumber = Players.length;
        if (PlayersNumber >= 5) {
            const temp = [
                ...mustHaveRoles,
                ...expandRoles.slice(0, PlayersNumber - 5),
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