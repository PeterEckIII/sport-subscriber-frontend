import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom';

import { UserContext } from './libs/contextLib';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import AddSubscription from './pages/AddSubscription';
import Profile from './pages/Profile';

const Routes = () => {
    const [user] = useContext(UserContext);
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/signup">
                <Signup />
            </Route>
            <Route exact path="/add-subscription">
                <AddSubscription />
            </Route>
            <Route path={`/profile/${user}`}>
                <Profile />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}

export default Routes;
