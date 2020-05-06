import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from "react-helmet";
import Favicon from "react-favicon";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>Curriculum</title>
    </Helmet>
    <App source="https://raw.githubusercontent.com/phoenisis/test/master/data.json" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
