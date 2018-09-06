import React, { Component } from 'react';
import { HashRouter,Switch, Route, Redirect } from 'react-router-dom'
import FoodMenu from './components/FoodMenu/FoodMenu'
import Home from './components/Home/Home'
import './App.css';

class App extends Component {

    render() {
        return (
            <HashRouter>
                <div className="App">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/paella' component={FoodMenu} />
                        <Route path='/soups' component={FoodMenu} />
                        <Route path='/stews' component={FoodMenu} />
                        <Route path='/tapas' component={FoodMenu} />
                        <Route path='/everthing' component={FoodMenu} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

export default App;
