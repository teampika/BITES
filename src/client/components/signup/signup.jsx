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
      userPhoneNumber: '',
      userStreetAddress: '',
      userCity: '',
      userState: '',
      userZipCode: '',
      agreeTerms: false,
      submitted: false
    }

    this.updateCompanyName = this.updateCompanyName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updatePhoneNumber = this.updatePhoneNumber.bind(this);
    this.updateStreetAddress = this.updateStreetAddress.bind(this);
    this.updateCity = this.updateCity.bind(this);
    this.updateState = this.updateState.bind(this);
    this.updateZipCode = this.updateZipCode.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  updateCompanyName(e) {
    this.setState({
      ...this.state,
      companyName: e.target.value,
    });
  }

  updateEmail(e) {
    this.setState({
      ...this.state,
      userEmail: e.target.value,
    });
  }

  updatePassword(e) {
    this.setState({
      ...this.state,
      userPassword: e.target.value
    });
  }

  updatePhoneNumber(e) {
    this.setState({
      ...this.state,
      userPhoneNumber: e.target.value
    })
  }

  updateStreetAddress(e) {
    this.setState({
      ...this.state,
      userStreetAddress: e.target.value
    })
  }
  updateCity(e) {
    this.setState({
      ...this.state,
      userCity: e.target.value
    })
  }

  updateState(e) {
    this.setState({
      ...this.state,
      userState: e.target.value
    })
  }

  updateZipCode(e) {
    this.setState({
      ...this.state,
      userZipCode: e.target.value
    })
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      ...this.state,
      submitted: true
    })

    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.companyName,
        email: this.state.userEmail,
        password: this.state.userPassword,
        phoneNumber: this.state.userPhoneNumber,
        address: this.state.userStreetAddress,
        city: this.state.userCity,
        state: this.state.userState,
        zipCode: this.state.userZipCode
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
      <div className='register'>
        <div className='register-top'>
          <p className='register-top-title'>BITES</p>
          <p className='register-top-descrip'>Inventory Management System for Perishable Goods</p>
        </div>
        <div className='register-body'>
          <form id='register-form' onSubmit={this.handleRegister}>
            <div className='register-body-left'>
              <label>Company Name:</label><br />
              <input type='text' value={this.state.companyName} onChange={this.updateCompanyName} placeholder='Enter your company name' />
              {this.state.submitted &&
                !this.state.companyName &&
                <div className='help-block'>Company Name is required</div>
              }<br />
              <label>Email:</label><br />
              <input type='text' value={this.state.userEmail} onChange={this.updateEmail} placeholder='Enter your email address' />
              {this.state.submitted &&
                !this.state.userEmail &&
                <div className='help-block'>Email is required</div>
              }<br />
              <label>Password:</label><br />
              <input type='password' value={this.state.userPassword} onChange={this.updatePassword} placeholder='Enter your password' />
              {this.state.submitted &&
                !this.state.userPassword &&
                <div className='help-block'>Password is required</div>
              }<br />
              <label>Phone Number:</label><br />
              <input type='text' value={this.state.userPhoneNumber} onChange={this.updatePhoneNumber} placeholder='(123) 456-7890' />
              {this.state.submitted &&
                !this.state.userPhoneNumber &&
                <div className='help-block'>Phone Number is required</div>
              }<br />
            </div>
            <div className='register-body-right'>
              <label>Street Address:</label><br />
              <input type='text' value={this.state.userStreetAddress} onChange={this.updateStreetAddress} placeholder='1600 Main St.' />
              {this.state.submitted &&
                !this.state.userStreetAddress &&
                <div className='help-block'>Street Address is required</div>
              }<br />
              <label>City:</label><br />
              <input type='text' value={this.state.userCity} onChange={this.updateCity} placeholder='Venice' />
              {this.state.submitted &&
                !this.state.userCity &&
                <div className='help-block'>City is required</div>
              }<br />
              <label>State:</label><br />
              <input type='text' value={this.state.userState} onChange={this.updateState} placeholder='CA' />
              {this.state.submitted &&
                !this.state.userState &&
                <div className='help-block'>State is required</div>
              }<br />
              <label>Zip Code:</label><br />
              <input type='text' value={this.state.userZipCode} onChange={this.updateZipCode} placeholder='90210' />
              {this.state.submitted &&
                !this.state.userZipCode &&
                <div className='help-block'>Zip Code is required</div>
              }<br />
            </div>
            <input id='register-submit' type='submit' value='Register' /><br />
          </form>
          <div className='register-footer'>
            <Link to='/'>Log In To Your Account</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Register;