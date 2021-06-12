import React, {createContext} from "react";
import Children from "./Children";

export const UsersContext = createContext('');

function UserContext() {
    const user = {
        nickname: 'Chan',
        isAdmin: true,
    }
    return(
        <UsersContext.Provider value={user}>
            <div>
                <Children/>
            </div>
        </UsersContext.Provider>
    )
}

export default UserContext