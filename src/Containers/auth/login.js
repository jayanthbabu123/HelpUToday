import React, { Component } from 'react';
import Header from '../../Components/header';
import { Link } from 'react-router-dom';
import firebase from '../../firebase'


export default class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: [],
    loading: false,
    usersRef: firebase.database().ref('users')
  }

  displayErrors = errors => errors.map((error, i) => <p key={i} className="text-center">{error.message}</p>);

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleInputErrors = (errors, InputType) => {
    return errors.some(error =>
      error.message.toLowerCase().includes(InputType)
    ) ?
      "input-error" : "";
  }

  isFormValid = ({ email, password }) => email && password;

  handleSubmit = event => {
    event.preventDefault();
    if (this.isFormValid(this.state)) {
      this.setState({ errors: [], loading: true })
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(signedInUser => {
        })
        .catch(err => {
          this.setState({ errors: this.state.errors.concat(err), loading: false })
        })
    }
  }

  handleGoogleLogin = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((createUser) => {
        this.saveUser(createUser).then(() => {
          //console.log("user saved successfully")
        })
      }).catch(err=>{
        console.log(err)
      })
  }
  saveUser = createUser => {
    return this.state.usersRef.child(createUser.user.uid).set({
      name: createUser.user.displayName,
      avatar: createUser.user.photoURL
    })
  }
  render() {
    const { email, password, errors } = this.state;
    return (
      <div>
        <Header />
        <div className="custom-card">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="card card-body mt-10">
                <div className="row">
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                    <h1 className="text-center text-primary">SignIn</h1>
                    <form className="pt-3" onClick={this.handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className={`input-group-text ${this.handleInputErrors(errors, "email")}`}>
                              <i className="fa fa-envelope"></i>
                            </span>
                          </div>

                          <input
                            type="email"
                            name="email"
                            className={`form-control ${this.handleInputErrors(errors, "email")}`}
                            placeholder="Enter your Email"
                            onChange={this.handleChange}
                            value={email}
                          />

                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className={`input-group-text ${this.handleInputErrors(errors, "password")}`}>
                              <i className="fa fa-eye-slash"></i>
                            </span>
                          </div>

                          <input
                            type="password"
                            name="password"
                            className={`form-control ${this.handleInputErrors(errors, "password")}`}
                            placeholder="Enter your password"
                            autoComplete="true"
                            onChange={this.handleChange}
                            value={password}
                          />

                        </div>
                      </div>
                      <div className="form-group form-check">
                        <label className="form-check-label">
                          <input className="form-check-input" type="checkbox" /> Remember me</label>
                      </div>
                      <button type="submit" className="btn btn-primary btn-lg btn-block shadow-sm">Signin</button>
                      <p className="text-center py-2">Not have an account? <Link to="/register">Register</Link></p>
                    </form>
                    {errors.length > 0 && (
                      <div className="card card-body p-1 mb-3 Error">
                        <h4 className="text-center">Error</h4>
                        {this.displayErrors(errors)}
                      </div>
                    )
                    }
                    <div className="mb-3">
                      <button className="btn btn-lg btn-outline-secondary btn-block text-left pl-7 btn-grad" onClick={this.handleGoogleLogin}><i className="fa fa-google pr-2 pl-4"> </i> with Google</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
