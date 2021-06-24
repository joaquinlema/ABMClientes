import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // eslint-disable-next-line no-unused-vars
    Link
} from "react-router-dom";
import Login from '../layout/login/Login';
import MiniDrawer from '../pages/containerPage/ContainerPage';
import NotFound from '../pages/NotFound';
import TransaccionRoute from './TransaccionRoute';

const MainRoute = () => {
    return (
        <Router>
            <Switch>
                <Route exact={true} path='/' component={Login} />
                <Route path='/Login' component={Login} />
                {/* <Route path='/App/Common' component={AppRoute} /> */}
                <Route path='/App/Common/' component={MiniDrawer} />
                <Route path='/App/Transaccion/' component={TransaccionRoute} />
                <Route path='/App/' component={NotFound} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}

export default MainRoute;
