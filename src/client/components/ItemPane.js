import React from 'react';

class ItemPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <div style={stylePane} />
    )
  }
}

const stylePane = {
  width: '700px',
  height: '700px',
  background: 'white',
}

export default ItemPane;