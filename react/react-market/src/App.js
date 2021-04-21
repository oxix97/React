import './App.css';
import {Switch, Route} from 'react-router-dom';
import MainPage from './main'
import ProductPage from "./product";
import Uploadpage from "./upload";

function App() {
    return (
        <div>
            <Switch>
                <Route exact={true} path={'/'}>
                    <MainPage/>
                </Route>
                <Route exact={true} path={'/upload'}>
                    <Uploadpage/>
                </Route>
                <Route exact={true} path={'/products/:id'}>
                    <ProductPage/>
                </Route>
            </Switch>
        </div>
    )
}

export default App;
