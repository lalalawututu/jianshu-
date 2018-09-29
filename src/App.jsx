import React, {Component, Fragment } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <Fragment>
        <div>hello world</div>
        <button>toggle</button>
      </Fragment>
    )
  }
}

export default App;