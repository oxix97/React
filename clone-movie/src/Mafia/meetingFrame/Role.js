import React, {useState} from 'react';
import shuffle from "lodash.shuffle";
import {Users,ALIVE,DEAD} from "./Users";


const RoleDistribution = ({history}) => {
    const [role, setRole] = useState(['Mafia', 'Mafia', 'Police', 'Doctor', 'Reporter', 'Citizen', 'Citizen', 'Citizen']);
    const shuffleList = () => {
        setRole(shuffle(role));
    }

    return (
        <div>
            <button onClick={shuffleList}>
                시작
            </button>
            {role.map((role, index) => {
                Users[index].role = role
            })}

            <div>
                {
                    Users.map((user) => (
                        <div>
                            <li>NICKNAME : {user.nickname}</li>
                            <li>ROLE : {user.role}</li>
                            <li>LIFE : {user.life}</li>
                            <br/>
                        </div>
                    ))
                }
            </div>
            <div>
                {
                    Users.map((user, index) => {
                        if (user.life === ALIVE) {
                            if (user.role === 'Mafia') {
                                console.log('Mafia');
                            } else {
                                console.log('Citizen');
                            }
                        } else if (user.life === DEAD) {
                            console.log('Dead');
                        }
                    })
                }
            </div>
        </div>
    );
};

export default RoleDistribution;