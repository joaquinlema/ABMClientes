import React from 'react';
import { Provider } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles'
import store from './store';
import { BrowserRouter as Router, HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { makeServer } from './server/MyServerMirage';
import Login from './components/layout/login/Login'
import HomePage from './components/pages/containerPage/ContainerPage';
import './App.css';
import WebFont from 'webfontloader';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'100%',
    margin: theme.spacing(3, 'auto')
  }
}));


WebFont.load({
    google: {
      families: ['Titillium Web:300,400,700', 'sans-serif']
    }
  });

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" })
}

const App = () => {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <HashRouter>
      <div className={classes.root}>
        <Switch>
            <Route exact={true} path='/' component={HomePage} />
            <Route path='/login' component={Login} />
          </Switch>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
