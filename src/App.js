import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { makeServer } from './server/MyServerMirage';
import HomePage from './components/pages/ContainerPage';
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
      <HomePage className="body"/>
    </Provider>
  );
}

export default App;
