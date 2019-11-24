import React, {Component, Fragment} from 'react';
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from '../components/Header.jsx';
import Dashboard from '../containers/Dashboard.jsx';
import Login from '../containers/Login.jsx';
import Register from '../containers/Register.jsx';

class RouterNavigation extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                    <Route path="/">
                        <Dashboard />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default RouterNavigation;