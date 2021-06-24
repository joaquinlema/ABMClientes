import React from 'react';
import { Provider } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles'
import store from './store';
import './App.css';
import WebFont from 'webfontloader';
import MainRoute from './components/route/MainRoute';
import './scss/Main.module.scss';

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
        <div className={classes.root + ' App'}>
          <MainRoute />
        </div>
    </Provider>
  );
}

export default App;
