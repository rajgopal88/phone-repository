import React, { Component } from 'react';
import Header from './Header.js';
import './ShowSubscribers.css';
import {Link} from 'react-router-dom';

class ShowSubscribers extends Component {
  render() {
    return (
      <div>
        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <Link to='/addSubscriber'> <button className="custom-btn add-btn">Add</button> </Link>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          {
            this.props.subscriberList.map(x => {
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

export default ShowSubscribers;