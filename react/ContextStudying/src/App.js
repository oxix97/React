import './App.css';
import ContextStudy from './context/context_study'
import React from 'react'

const ThemeContext = React.createContext('light');

class App extends React.Component{
    render() {
        return(
            <div>
                {/*<ThemeContext.Provider value = "dark">*/}
                {/*    <Toolbar/>*/}
                {/*</ThemeContext.Provider>*/}
            </div>

        )
    }
}
//
// function Toolbar(){
//     return(
//         <div>
//             <ThemedButton/>
//         </div>
//     )
// }
//
// class ThemedButton extends React.Component{
//     static contextType = ThemeContext;
//     render() {
//         return <button theme={this.context}/>
//     }
// }

export default App;
