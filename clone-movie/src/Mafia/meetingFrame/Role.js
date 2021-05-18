import React, {useState} from 'react';
import shuffle from "lodash.shuffle";

const ALIVE = 1;

const Users = [{
    nickname: 'user1',
    life: ALIVE,
    role: '',
    skill: '',
}, {
    nickname: 'user2',
    life: ALIVE,
    role: '',
    skill: '',
}, {
    nickname: 'user3', life: ALIVE, role: '', skill: '',
}, {
    nickname: 'user4',
    life: ALIVE,
    role: '',
    skill: '',
}, {
    nickname: 'user5',
    life: ALIVE,
    role: '',
    skill: '',
}, {
    nickname: 'user6',
    life: ALIVE,
    role: '',
    skill: '',
}, {
    nickname: 'user7',
    life: ALIVE,
    role: '',
    skill: '',
}, {
    nickname: 'user8',
    life: ALIVE,
    role: '',
    skill: '',
}]

const RoleDistribution = () => {
    const [role, setRole] = useState(['Mafia', 'Mafia', 'Police', 'Doctor', 'reporter', 'Citizen', 'Citizen', 'Citizen']);
    const shuffleList = () => {
        setRole(shuffle(role));
    }

    return (
        <div>
            <button onClick={shuffleList}>직업 분배</button>
            <div>
                {role.map((role, index) => (
                    <li>{Users[index].role = role}</li>
                ))}
            </div>

        </div>
    );
};


export default RoleDistribution;

