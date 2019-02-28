import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import firebase from './firebase'
import Loader from './Components/Loader';
import axios from 'axios';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './Reducers/Index';
import { setUser } from './Actions/Index';

axios.defaults.baseURL = 'https://helputoday-fae2e.firebaseio.com';

const store = createStore(rootReducer, composeWithDevTools());


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
                    this.props.setUser(user)
                    sessionStorage.setItem('userData', JSON.stringify(user));
                    // sessionStorage.setItem('userUid', JSON.stringify(user.uid));
                    this.setState({ loader: false })
                    // this.props.history.push('/home')
                } else {
                    this.setState({ errors: "Please verify Account details", loader: false })
                }
            } else {
                this.setState({ loader: false })
                // this.props.history.push('/login')
            }
        })
    };
    render() {
        return this.state.loader ? <Loader /> : <App />
    }
}
const AppAuth = withRouter(connect(null, { setUser })(AppRoute));
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <AppAuth />
        </Router>
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
