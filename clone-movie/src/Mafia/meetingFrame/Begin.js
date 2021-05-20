import React, {useState} from "react";
import shuffle from "lodash.shuffle";
import {Users,ALIVE,DEAD} from "./Users";
import {logDOM} from "@testing-library/react";

function Begin({history}) {
    const [role, setRole] = useState(['Mafia', 'Mafia', 'Police', 'Doctor', 'Reporter', 'Citizen', 'Citizen', 'Citizen']);
    const shuffleList = () => {
        setRole(shuffle(role));
    }
    return (
        <>
            <button onClick={() => (shuffleList)(history.push({
                pathname: "/meetingRoom",
                state: {
                    role : role
                }}))}>
                게임 시작
            </button>
        </>
    );
}

export default Begin;