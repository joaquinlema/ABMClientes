import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Login from '../layout/login/Login';
import NotFound from '../pages/NotFound';
import AppRoute from './AppRoute';
import TransaccionRoute from './TransaccionRoute';

const MainRoute = () => {
    return (
        <Router>
            <Switch>
                <Route exact={true} path='/' component={Login} />
                <Route path='/Login' component={Login} />
                <Route path='/App/Common' component={AppRoute} />
                <Route path='/App/Transaccion' component={TransaccionRoute} />
                <Route path='/App/' component={NotFound} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}

export default MainRoute;
