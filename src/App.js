import React, { Component, Fragment } from 'react';
import { render } from '@testing-library/react';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          Phone Directory
        </div>
        <button>Add</button>
        <div>
          <span>Name</span>
          <span>Phone</span>
        </div>
      </Fragment>
    );
  }
}

export default App;