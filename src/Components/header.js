import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.scss'
class Headerpage extends Component {
    render() {
        return (
            <div className="header-section navigation-bar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/home"><img src={require('../Images/helpu.png')} width="100"/></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Services</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/electrical">Electrical <img src={require('../Images/plug.svg')} width="20" height="20" className="pull-right mt-1"/></Link>
                                    <a className="dropdown-item" href="#">Plumbing</a>
                                    <a className="dropdown-item" href="#">Home Cleaning</a>
                                    <a className="dropdown-item" href="#">Marriages</a>
                                    <a className="dropdown-item" href="#">Beauty</a>
                                    <a className="dropdown-item" href="#">Washing</a>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Sign In</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Headerpage;