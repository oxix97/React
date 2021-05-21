import React from "react";
import shuffle from "lodash.shuffle";
import {Users, Roles} from "./Users";

function Begin({history}) {
    const shuffleList = () => {
        const RoleList = shuffle(Roles);
        Users.map((user, index) => {
            user.role = RoleList[index];
        })
    }

    return (
        <>
            <button onClick={() => (shuffleList)(history.push({
                pathname: "/meetingRoom",
            }))}>
                게임 시작
            </button>
        </>
    );
}

export default Begin;