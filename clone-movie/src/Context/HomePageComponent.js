import React, {useContext, useState} from "react";

const themes = {
    user1: {
        nickname: 'user1',
        role: 'Mafia',
        life: 1,
        skill: true,
        voteCount : 0,
    },
    light: {
        foregroundColor: '#000000',
        backgroundColor: '#eeeeee',
    },
    dark: {
        foregroundColor: '#ffffff',
        backgroundColor: '#222222',
    }
};

const ThemeContext = React.createContext('');
const UserContext = React.createContext('');
function HomePageComponent() {
    return (
        <ThemeContext.Provider value={themes.dark}>
            <UserContext.Provider value={themes.user1}>
                <Memo/>
            </UserContext.Provider>
            <Toolbar/>
        </ThemeContext.Provider>
    );
}
const Memo = () =>{
    return(
        <div>
            {
                themes.user1.nickname = 'user2'
            }
            <li>{`nickname : ${themes.user1.nickname}`}</li>
        </div>
    )

}


function Toolbar(props) {
    return (
        <>
            <ThemeButton/>
        </>
    )
}

function ThemeButton() {
    const [isClick, setIsClick] = useState(false);
    const onClick = () => {
        setIsClick(true);
        console.log('click');
    }
    const theme = useContext(ThemeContext)
    return (
        <button
            style={{background: theme.backgroundColor, color: theme.foregroundColor}}
            onClick={onClick}
            disabled={isClick}
        >
            useContext apply !!
        </button>
    )
}

export default HomePageComponent;

