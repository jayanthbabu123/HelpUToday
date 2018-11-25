import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './Containers/home/home';
import Login from './Containers/login/login';
import Services from './Containers/helpuservices/helpuservices';
import Homecleaning from './Containers/services/homeMaintenance';
import CleaningService from './Containers/services/cleaningService';
import DocumentService from './Containers/services/documentService';
import EventsOccasions from './Containers/services/events-Occasions';
import AutoMobileService from './Containers/services/autoMobileService';
import Health from './Containers/services/health';
import ElectronicsAppliances from './Containers/services/electronicsAppliances';
import Photography from './Containers/services/photography';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div >
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/services' component={Services} />
          <Route path='/home-maintenance' component={Homecleaning}/>
          <Route path='/cleaning-service' component={CleaningService}/>
          <Route path='/Document-service' component={DocumentService}/>
          <Route path='/events-occasions' component={EventsOccasions}/>
          <Route path='/autoMobile-Service' component={AutoMobileService}/>
          <Route path='/electronics-appliances' component={ElectronicsAppliances}/>
          <Route path='/helth-services' component={Health} />
          <Route path='/photography-services' component={Photography} />
        </Switch>
      </div>
    );
  }
}

export default App;
