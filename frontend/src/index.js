import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Landing from './Landing'
import OrderHome from './pages/OrderHome'
import ProfileHome from './pages/ProfileHome'

const HTMLroot = document.getElementById('root')

//need to make/import layout
//<App />

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Landing}></IndexRoute>
      <Route path="OrderHome" component={OrderHome}></Route>
      <Route path="ProfileHome" component={ProfileHome}></Route>
    </Route>
  </Router>,
  HTMLroot
)
