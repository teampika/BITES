import React from 'react';

function CompanyInfo(props) {
  const divStyle = {
    width: '300px',
    height: '150px',
    border: '1px solid black',
    backgroundColor: 'white',
  };

  const { 
    name,
    phoneNumber,
    street,
    town,
    state,
    zipcode
  } = props;

  return (
    <div style={divStyle}>
      <p>{name}</p>
      <p>{phoneNumber}</p>
      <p>{street}</p>
      <p>{town}</p>
      <p>{state}</p>
      <p>{zipcode}</p>
    </div>
  );
}

export default CompanyInfo;
