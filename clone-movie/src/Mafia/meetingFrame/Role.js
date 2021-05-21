import React from 'react';
import {Users, ALIVE, DEAD} from "./Users";

const RoleDistribution = ({history}) => {
    return (
        <div>
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
            <button onClick={() => (history.push({
                pathname: "/vote",
            }))}>
                투표로 넘어가기
            </button>
        </div>
    );
};

export default RoleDistribution;