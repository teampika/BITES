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
import Register from './client/components/signup/signup';

const Root = () => (
  <Router>
    <div>
      <Route exact path='/' component={Login} />
      <Route exact path='/register' component={Register} />
    </div>
  </Router>
);

export default Root;
// import CompanyPage from './client/CompanyPage';
// import Inventory from './client/Inveontory';

// const root = () => (
//   <div>
//     <CompanyPage />
//     <Inventory />
//   </div>
// );

// export default root;
