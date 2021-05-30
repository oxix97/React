import React, {useContext, useState} from "react";

const themes = {
    light: {
        foregroundColor: '#000000',
        backgroundColor: '#eeeeee',
    },
    dark: {
        foregroundColor: '#ffffff',
        backgroundColor: '#222222',
    }
};

const ThemeContext = React.createContext(themes.light);

function HomePageCompoent() {
    return (
        <ThemeContext.Provider value={themes.dark}>
            <Toolbar/>
        </ThemeContext.Provider>
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

export default HomePageCompoent;

