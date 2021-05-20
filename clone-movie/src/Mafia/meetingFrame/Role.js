import React, {useState} from 'react';
import {Users,ALIVE,DEAD} from "./Users";
// import shuffle from "lodash.shuffle";
import Begin from "./Begin";

const RoleDistribution = ({history}) => {
    // const [role, setRole] = useState(['Mafia', 'Mafia', 'Police', 'Doctor', 'Reporter', 'Citizen', 'Citizen', 'Citizen']);
    // const shuffleList = () => {
    //     setRole(shuffle(role));
    // }

    return (
        <div>
            {/*<button onClick={shuffleList}>*/}
            {/*    시작*/}
            {/*</button>*/}
            {Users.map((user, index) => {
                Users[index].role = user.role
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
            <button onClick={()=>(history.push({
                pathname: "/vote",
            }))}>
                넘어가기
            </button>
        </div>
    );
};

export default RoleDistribution;