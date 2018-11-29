/**
 * ************************************
 *
 * @module  root.jsx
 * @description Application / Redux Store
 *
 * ************************************
 */

import React from 'react';
import CompanyPage from './client/CompanyPage';
import Inventory from './client/Inveontory';

const root = () => (
  <div>
    <CompanyPage />
    <Inventory />
  </div>
);

export default root;
