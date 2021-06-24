import React from 'react';
import { Provider } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles'
import store from './store';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, HashRouter, Switch, Route, Redirect } from 'react-router-dom';
//import { makeServer } from './server/MyServerMirage';
// import HomePage from './components/pages/containerPage/ContainerPage';
// import MonedaPage from './components/pages/NuevaMonedaPage'
// import Login from './components/layout/login/Login'
import './App.css';
import WebFont from 'webfontloader';
import MainRoute from './components/route/MainRoute';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));


WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});

// if (process.env.NODE_ENV === "development") {
//   makeServer({ environment: "development" })
// }

const App = () => {
  const classes = useStyles();
  return (
    <Provider store={store}>
        <div className={classes.root}>
          {/* <HashRouter>
              <Switch>
                <Route exact={true} path='/' component={HomePage} />
                <Route path='/Login' component={Login} />
                <Route path='/Moneda' component={MonedaPage} />
              </Switch>
          </HashRouter> */}
          <MainRoute />
        </div>
    </Provider>
  );
}

export default App;
