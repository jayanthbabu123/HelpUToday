import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../../Components/header';
import Icon from '../../Components/svg-loader';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: false,
            formInvalid: false,
            activatedTab: 'login'
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/home' />
        }
    }
    onSubmit = e => {
        e.preventDefault();
        if (this.state.username === 'chenna' && this.state.password === '1234') {
            localStorage.setItem('userInfo', JSON.stringify(this.state));
            this.setState({ redirect: true });
        } else {
            this.setState({ formInvalid: true })
        }
    }
    setActiveElement(value){
      console.log(value);
      this.setState({activatedTab : value})
    }
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    {this.renderRedirect()}
                    <div className="row login-form">
                        <div className="col-md-4 col-sm-4">
                        
                        </div>
                        <div className="col-4 my-auto form-section">
                            <form>
                                <div className="row name-tabs">
                                    <div className={this.state.activatedTab === 'login' ? "activatedTab text-center col-6" : "text-center col-6"} onClick={() => this.setActiveElement('login')}>
                                        <p >Login</p>
                                    </div>
                                    <div className={this.state.activatedTab === 'register' ? "activatedTab text-center col-6" : "text-center col-6"} onClick={() => this.setActiveElement('register')}>
                                        <p>Register</p>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" value={this.state.username} onChange={this.handleChange} name="username" className="form-control" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username">Password</label>
                                    <input type="password" onChange={this.handleChange} value={this.state.password} name="password" className="form-control" placeholder="Enter password" />
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={(e) => this.onSubmit(e)}>Login</button>
                            </form>
                            {this.state.formInvalid ? <p className="animated animatedFadeInUp fadeInUp text-danger">please enter valid credentials</p> : null}
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}

export default Login;