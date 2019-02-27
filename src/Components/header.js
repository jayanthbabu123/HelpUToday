import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';
import firebase from '../firebase';
import { connect } from 'react-redux';
class Headerpage extends Component {
    state = {
        Logout: false
    }
    handleLogout() {
        firebase
            .auth()
            .signOut()
            .then((user) => {
                sessionStorage.removeItem('userData', JSON.stringify(user));
                window.location.reload(); 
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <div className="header-section navigation-bar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <Link className="navbar-brand" to="/home" className="mx-5"><img src={require('../Images/helpu.png')} width="100" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/home"><b>Home</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about"><b>About</b></Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/contact-us"><b>Contact Us</b></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <b>Help U Services</b></a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/home-maintenance"><img src={require('../Images/home-services/main-services/house.svg')} width="20" height="20" className="mr-2" />Home Maintenance </Link>
                                    <Link className="dropdown-item" to="/cleaning-service"><img src={require('../Images/home-services/main-services/cleaning-service.svg')} width="20" height="20" className="mr-2" />Cleaning Services </Link>
                                    <Link className="dropdown-item" to="/Document-service"><img src={require('../Images/home-services/main-services/document-service.svg')} width="20" height="20" className="mr-2" />Document Services </Link>
                                    <Link className="dropdown-item" to="/events-occasions"><img src={require('../Images/home-services/main-services/events.svg')} width="20" height="20" className="mr-2" />Events & Occasions</Link>
                                    <Link className="dropdown-item" to="/autoMobile-Service"><img src={require('../Images/home-services/main-services/automobile.svg')} width="20" height="20" className="mr-2" />Automobile Services </Link>
                                    <Link className="dropdown-item" to="/helth-services"><img src={require('../Images/home-services/main-services/doctor.svg')} width="20" height="20" className="mr-2" />Health & Personal</Link>
                                    <Link className="dropdown-item" to="/electronics-appliances"><img src={require('../Images/home-services/main-services/Electronics.png')} width="20" height="20" className="mr-2" />Electronics & Appliances </Link>
                                    <Link className="dropdown-item" to="/photography-services"><img src={require('../Images/home-services/main-services/photography.svg')} width="20" height="20" className="mr-2" />Photography Services </Link>
                                </div>
                            </li>
                            {this.props.user ? <li className="nav-item">
                                <Link className="nav-link" to="/my-bookings"><b>My Bookings</b></Link>
                            </li> : null}
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            {this.props.user ?
                                <button className="btn btn-outline-info my-2 my-sm-0" type="button" onClick={this.handleLogout}>Logout</button>
                                :
                                <Link to="/register"><button className="btn btn-outline-success my-2 my-sm-0" type="button">Sign Up</button></Link>}
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    user: state.user.currentUser
})
export default connect(mapStateToProps)(Headerpage);