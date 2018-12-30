import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './Containers/home/home';
import About from './Components/about';
import Login from './Containers/auth/login';
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
import Register from './Containers/auth/register'
import Loader from './Components/Loader';
import firebase from './firebase'

class App extends Component {
  state = {
    loader: true
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loader: false })
        console.log(user)
        this.props.history.push("/home")
      } else {
        this.setState({ loader: false })
        this.props.history.push("/")
      }
    })
  }
  render() {
    return this.state.loader ? <Loader />
      :
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/home-maintenance' component={Homecleaning} />
        <Route path='/cleaning-service' component={CleaningService} />
        <Route path='/Document-service' component={DocumentService} />
        <Route path='/events-occasions' component={EventsOccasions} />
        <Route path='/autoMobile-Service' component={AutoMobileService} />
        <Route path='/electronics-appliances' component={ElectronicsAppliances} />
        <Route path='/helth-services' component={Health} />
        <Route path='/photography-services' component={Photography} />
      </Switch>
  }
};

const RootApp = withRouter(App)

export default RootApp;
