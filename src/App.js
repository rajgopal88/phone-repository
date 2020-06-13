import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';

class App extends Component {
  constructor()
  {
    super();
    this.state = 
    {
        subscriberListToShow: []
    }
  }
  render() {
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
            this.state.subscriberListToShow.map(x => {
              return <div key={x.id} className="grid-container">
            <span className="grid-item">{x.name}</span>
            <span className="grid-item">{x.phone}</span>
            <span className="grid-item">
              <button className="custom-btn del-btn" >Delete</button>
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