import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './Containers/home/home';
import Login from './Containers/login/login';
import Electrical from './Containers/services/electrical';
import Services from './Containers/helpuservices/helpuservices';
import Plumbing from './Containers/services/plumbing';
import Homecleaning from './Containers/services/homecleaning';
import Marriages from './Containers/services/marriages';
import Washing from './Containers/services/washing';
import ComputerRepair from './Containers/services/computerRepair'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div >
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/services' component={Services} />
          <Route path='/electrical' component={Electrical} />
          <Route path='/plumbing' component={Plumbing} />
          <Route path='/homecleaning' component={Homecleaning}/>
          <Route path='/marriages' component={Marriages}/>
          <Route path='/washing' component={Washing}/>
          <Route path='/computerRepair' component={ComputerRepair}/>
        </Switch>
      </div>
    );
  }
}

export default App;
