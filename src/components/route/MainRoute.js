import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // eslint-disable-next-line no-unused-vars
    Link
} from "react-router-dom";
import Login from '../layout/login/Login';
import AppContainerPage from '../pages/containerPage/AppContainerPage';
import TransaccionesContainerPage from '../pages/containerPage/TransaccionesContainerPage';
import NotFound from '../pages/NotFound';
import TransaccionRoute from './TransaccionRoute';

const MainRoute = () => {
    return (
        <Router>
            <Switch>
                <Route exact={true} path='/' component={Login} />
                <Route path='/Login' component={Login} />
                <Route path='/App/Common/' component={AppContainerPage} />
                <Route path='/App/Transaccion/' component={TransaccionesContainerPage} />
                <Route path='/App/' component={NotFound} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}

export default MainRoute;
