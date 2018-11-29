import React, { Component } from 'react';

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: ['apple', 'banana', 'orange'],
      dairy: ['milk', 'eggs', 'cheese'],
      produce: ['chicken', 'meat', 'pork'],
      vegetables: ['corn', 'potato', 'carrot'],
    };
  }

  render() {
    return (
      <div>
        <h2>Inventory</h2>
        <h4>Fruits</h4>
        {this.state.fruits.map(fruit => <div> {fruit} </div>)}
        <h4>Dairy</h4>
        {this.state.dairy.map(dairy => <div> {dairy} </div>)}
        <h4>Vegetables</h4>
        {this.state.vegetables.map(vegetables => <div> {vegetables} </div>)}
        <h4>Produce</h4>
        {this.state.produce.map(produce => <div> {produce} </div>)}
      </div>
    );
  }
}
export default Inventory;
