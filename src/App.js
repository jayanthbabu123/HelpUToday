import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './Containers/home/home';
import Login from './Containers/login/login';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div >
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
