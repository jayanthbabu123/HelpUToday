import React, { Component } from 'react';
import './App.scss';
import Routing from './Containers/AppRouting/Routing';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Routing />
      </React.Fragment>
    )

  }
};
export default App;
