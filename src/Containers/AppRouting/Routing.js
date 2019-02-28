import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../auth/login';
import Home from '../../Containers/home/home';
import About from '../../Components/about';
import Services from '../../Containers/helpuservices/helpuservices';
import Homecleaning from '../../Containers/services/homeMaintenance';
import CleaningService from '../../Containers/services/cleaningService';
import DocumentService from '../../Containers/services/documentService';
import EventsOccasions from '../../Containers/services/events-Occasions';
import AutoMobileService from '../../Containers/services/autoMobileService';
import Health from '../../Containers/services/health';
import ElectronicsAppliances from '../../Containers/services/electronicsAppliances';
import Photography from '../../Containers/services/photography';
import Register from '../../Containers/auth/register'
import Forgetpassword from '../auth/Forgetpassword';
import MyBookings from '../MyBookings/MyBookings';
import Contact from '../../Components/ContactUs';

class Routing extends Component {
    render() {
        const userUid = sessionStorage.getItem('userData')
        return (
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
                <Route path='/forgetpassword' component={Forgetpassword} />
                {userUid ? <Route path='/my-bookings' component={MyBookings} /> : null}
                <Route path='/contact-us' component={Contact} />
                <Route component={Login} />
            </Switch>
        )
    }
};
export default Routing;

