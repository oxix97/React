import React from "react";
import shuffle from "lodash.shuffle";
import {Game, Roles,} from "./Users";

function Begin({history}) {
    const shuffleList = () => {
        const mafiaList = [];
        if (Game.users.length >= 4) {
            if (Game.users.length <= 6) {
                mafiaList.push('Mafia');
            } else if (Game.users.length <= 10) {
                mafiaList.push('Mafia');
                mafiaList.push('Mafia');
            }
            const temp = [
                ...mafiaList,
                ...Roles.slice(0, Game.users.length - mafiaList.length),
            ]
            const roles = shuffle(temp);
            Game.users.map((user, index) => {
                user.role = roles[index];
            });
            history.push({
                pathname: '/meetingRoom',
            })
        } else {
            alert('진행할 수 없습니다.');
        }
    };

    return (
        <>
            <button onClick={shuffleList}>
                게임 시작
            </button>
        </>
    );
}

export default Begin;