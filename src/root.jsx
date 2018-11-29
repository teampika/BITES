/**
 * ************************************
 *
 * @module  root.jsx
 * @description Application / Redux Store
 *
 * ************************************
 */

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './client/components/login/login';
import Register from './client/components/signup/signup'

const Root = (props) => (
  <Router>
    <div>
      <Route exact path='/' component={Login} />
      <Route exact path='/register' component={Register} />
    </div>
  </Router>
)

export default Root;