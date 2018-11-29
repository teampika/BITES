/**
 * ************************************
 *
 * @module  login.jsx
 * @description User Login Form
 *
 * ************************************
 */

import React from 'react';
import { Link } from 'react-router-dom'

import './login.css'

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userEmail: '',
      userPassword: '',
      rememberMe: false
    }
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateRememberMe = this.updateRememberMe.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  updateEmail(e) {
    this.setState({
      ...this.state,
      userEmail: e.target.value,
    })
  }

  updatePassword(e) {
    this.setState({
      ...this.state,
      userPassword: e.target.value,
    })
  }

  updateRememberMe() {
    this.setState({
      ...this.state,
      rememberMe: !this.state.rememberMe,
    })
  }

  handleLogin(e) {
    e.preventDefault();

    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
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
      <div className='login'>
        <div className='login-top'>
          <p className='login-top-title'>BITES</p>
          <p className='login-top-descrip'>Inventory Management System for Perishable Goods</p>
        </div>
        <div className='login-body'>
          <form id='login-form' onSubmit={this.handleLogin}>
            <label>Email:</label><br />
            <input type='text' value={this.state.userEmail} onChange={this.updateEmail} /><br />
            <label>Password:</label><br />
            <input type='password' value={this.state.userPassword} onChange={this.updatePassword} /> <br />
            <input type='checkbox' value={this.state.rememberMe} onChange={this.updateRememberMe} /> Remember Me <br />
            <input type='submit' value='Login' /><br />
          </form>
          <p>Or</p>
          <Link to='/register'>Sign Up For An Account</Link>
        </div>
      </div>
    )
  }
}

export default Login;