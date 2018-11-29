import React, { Component } from 'react';
import CompanyPage from './client/CompanyPage';
import Inventory from './client/Inventory';


class App extends Component {
  render() {
    return (
      <div>
        <CompanyPage />
        <Inventory />
      </div>
    );
  }
}
export default App;
