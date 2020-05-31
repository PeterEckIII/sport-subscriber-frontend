import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/signup">
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}

export default Routes;
