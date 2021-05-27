import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { makeServer } from './server/MyServerMirage';
import Login from './components/layout/login/Login'
import HomePage from './components/pages/containerPage/ContainerPage';
import './App.css';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
      families: ['Titillium Web:300,400,700', 'sans-serif']
    }
  });

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" })
}

const App = () => {

  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
            <Route exact={true} path='/' component={HomePage} />
            <Route path='/login' component={Login} />
          </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;
