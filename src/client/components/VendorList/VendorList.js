import React from 'react';

function VendorList(props) {
  const divStyle = {
    width: 'auto',
    height: 'auto',
    border: '1px solid black',
    backgroundColor: 'white',
  };

  let { vendors } = props;
  vendors = vendors.map((vendor) => {
    return (
      <button type='button'>{vendor.vendor_name}</button> 
    )
  })


  return (
    <div style={divStyle}>
      {vendors}
    </div>
  )
}

export default VendorList;
