import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/scss/bootstrap.scss';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import firebase from './firebase'
import Loader from './Components/Loader';


class AppRoute extends React.Component {
    state = {
        loader: true
    }
    componentDidMount() {
        this.authenticateUser();
    }
    authenticateUser = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                if (user && user.emailVerified) {
                    sessionStorage.setItem('userData', JSON.stringify(user));
                    this.setState({ loader: false })
                    this.props.history.push('/home')
                } else {
                    this.setState({ errors: "Please verify Account details" ,loader:false})
                }
            } else {
                this.setState({ loader: false })
                this.props.history.push('/login')
            }
        })
    };
    render() {
        return this.state.loader ? <Loader /> : <App />
    }
}
const AppAuth = withRouter(AppRoute);
ReactDOM.render(
    <Router>
        <AppAuth />
    </Router>
    , document.getElementById('root'));
serviceWorker.unregister();
