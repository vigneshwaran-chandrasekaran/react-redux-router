import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';
import Navigation from './Navigation';
import SampleRedux from './SampleRedux';

export default function Routes() {
    return (
        <div>
            <Router>
                <Navigation />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/redux-example' component={SampleRedux} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </div>
    )
}
