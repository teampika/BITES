/**
 * ************************************
 *
 * @module  signup.jsx
 * @description User Sign Up Form
 *
 * ************************************
 */

import React from 'react';
import { Link } from 'react-router-dom';

import './signup.css';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      companyName: '',
      userEmail: '',
      userPassword: '',
      agreeTerms: false
    }

    this.updateCompanyName = this.updateCompanyName.bind(this);
    this.updateUserEmail = this.updateUserEmail.bind(this);
    this.updateUserPassword = this.updateUserPassword.bind(this);
    this.updateAgreeTerms = this.updateAgreeTerms.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  updateCompanyName(e) {
    this.setState({
      ...this.state,
      companyName: e.target.value,
    });
  }

  updateUserEmail(e) {
    this.setState({
      ...this.state,
      userEmail: e.target.value,
    });
  }

  updateUserPassword(e) {
    this.setState({
      ...this.state,
      userPassword: e.target.value
    });
  }

  updateAgreeTerms() {
    this.setState({
      ...this.state,
      agreeTerms: !this.state.agreeTerms
    })
  }

  handleRegister(e) {
    e.preventDefault();

    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.companyName,
        email: this.state.userEmail,
        password: this.state.userPassword
      })
    })
      .then(response => response.json())
      .then(response => {
        console.log('cool, resp: ', response);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className='register'>
        <div className='register-top'>
          <p className='register-top-title'>BITES</p>
          <p className='register-top-descrip'>Inventory Management System for Perishable Goods</p>
        </div>
        <div className='register-body'>
          <form id='register-form' onSubmit={this.handleRegister}>
            <label>Company Name:</label><br />
            <input type='text' value={this.state.companyName} onChange={this.updateCompanyName} /> <br />
            <label>Email:</label><br />
            <input type='text' value={this.state.userEmail} onChange={this.updateUserEmail} /><br />
            <label>Password:</label><br />
            <input type='password' value={this.state.userPassword} onChange={this.updateUserPassword} /> <br />
            <input type='checkbox' value={this.state.agreeTerms} onChange={this.updateAgreeTerms} /> I agree to stuff <br />
            <input type='submit' value='Register' /><br />
          </form>
          <p>Or</p>
          <Link to='/'>Log In To Your Account</Link>
        </div>
      </div>
    )
  }
}

export default Register;