import React from 'react';
import { Link } from 'react-router-dom';
import CompanyInfo from '../CompanyInfo/CompanyInfo';
import Vendor from '../Vendor/Vendor';
import VendorList from '../VendorList/VendorList';
import ItemPane from '../ItemPane';

export default class SalesOrder extends React.Component {
  constructor() {
    super();
    this.state = {
      companyInfo: {
        name: '',
        phoneNumber: '',
        street: '',
        town: '',
        state: '',
        zipcode: '',
      },
      vendors: [],
    };

    this.getCompanyInfoHandler.bind(this);
    this.getVendorsHandler.bind(this);
  }

  componentDidMount() {
    this.getCompanyInfoHandler();
    this.getVendorsHandler();
  }

  getCompanyInfoHandler() {
    fetch('http://localhost:3000/login',
      {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(data => data.json())
      .then((companyInfo) => {
        const newCompanyInfo = {
          name: companyInfo.name,
          phoneNumber: companyInfo.phoneNumber,
          street: companyInfo.street,
          town: companyInfo.town,
          zipcode: companyInfo.zipcode,
        };
        this.setState({ companyInfo: newCompanyInfo });
      });
  }

  getVendorsHandler() {
    fetch('http://localhost:3000/vendors',
      {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(data => data.json())
      .then((vendorsList) => {
        this.setState({ vendors: vendorsList });
        console.log(this.state.vendors);
      });
  }



  render() {
    const { companyInfo } = this.state;
    const {
      name,
      phoneNumber,
      street,
      town,
      state,
      zipcode,
    } = companyInfo;

    const { vendors } = this.state;

    return (
      <div>
        <div style={container}>
          <div style={left}>
            <CompanyInfo
              name={name}
              phoneNumber={phoneNumber}
              street={street}
              town={town}
              state={state}
              zipcode={zipcode}
            />
          </div>
          <div style={right}>
            <VendorList vendors={vendors} />
            <Vendor/>
          </div>
        </div>
        <div style={container}>
          <ItemPane />
        </div>
      </div>
    )
  }
}

const left= {
  marginTop: '20px',
  float: 'left',
}

const rightMenu= {
  float: 'right',
}
const right= {
  float: 'right',
}

const container= {
  display: 'inline-block',
  width: '70%',
  minWidth: '720px',
  marginLeft: '100px',
  marginRight: 'auto',
}