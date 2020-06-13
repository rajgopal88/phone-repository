import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';

class App extends Component {

  clickHandler(message) {
    alert(message);
  } 

  render() {
    let subscriber = [
      {
        "id": 1,
        "name": "Sneha",
        "phone": "123456"
      },
      {
        "id": 2,
        "name": "Raj",
        "phone": "7891011"
      }
    ]
    return (
      <div>
        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          {
            subscriber.map(x => {
              return <div key={x.id} className="grid-container">
            <span className="grid-item">{x.name}</span>
            <span className="grid-item">{x.phone}</span>
            <span className="grid-item">
              <button className="custom-btn del-btn" onClick={this.clickHandler.bind(this, "Delete Handler Clicked")}>Delete</button>
            </span>
            </div>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;