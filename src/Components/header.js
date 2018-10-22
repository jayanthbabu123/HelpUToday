import React, { Component } from 'react';
class Header extends Component {
    render() {
        return (
            <div className="container-fluid main-header">
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" >
                    <img src={require('../Images/logo1.png')} height="40" width="200"/>
                    </a>
                </nav>
            </div>

        )
    }
}

export default Header;