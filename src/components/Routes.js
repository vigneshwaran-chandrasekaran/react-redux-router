import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';

export default function Routes() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/login' component={Login} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </div>
    )
}
