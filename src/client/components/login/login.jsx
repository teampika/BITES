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
      rememberMe: false,
      submitted: false
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

    this.setState({
      ...this.state,
      submitted: true
    })

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
      .then(response => {
        if (response.status >= 400) throw new Error('Bad response from server');
        console.log('bad, redirect to login, resp: ', response);
        return response.json();
      })
      .then(response => {
        console.log('cool, redirect to app, resp: ', response);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className='login-box'>
        <div className='login-content-box'>
          <div className='login-top'>
            <p className='login-top-title'>BITES</p>
            <p className='login-top-descrip'>Inventory Management System for Perishable Goods</p>
          </div>
          <div className='login-body'>
            <form id='login-form' onSubmit={this.handleLogin}>
              <label>Email:</label><br />
              <input type='text' value={this.state.userEmail} onChange={this.updateEmail} />
              {this.state.submitted &&
                !this.state.userEmail &&
                <div className='help-block'>Username is required</div>
              }<br />
              <label>Password:</label><br />
              <input type='password' value={this.state.userPassword} onChange={this.updatePassword} />
              {this.state.submitted &&
                !this.state.userEmail &&
                <div className='help-block'>Password is required</div>
              }<br />
              <input type='checkbox' value={this.state.rememberMe} onChange={this.updateRememberMe} /> Remember Me <br />
              <input id='login-submit' type='submit' value='Login' /><br />
            </form>
            <div className='login-footer'>
              <Link to='/register'>Sign Up For An Account</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;