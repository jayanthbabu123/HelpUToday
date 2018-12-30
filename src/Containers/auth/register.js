import React, { Component } from 'react'
import Header from '../../Components/header';
import { Link } from 'react-router-dom';
import firebase from '../../firebase';
import md5 from 'md5';

export default class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    conformPassword: '',
    errors: [],
    loading: false,
    usersRef: firebase.database().ref('users')
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  isFormVaild = () => {
    let errors = [];
    let error;
    if (this.isFormEmpty(this.state)) {
      error = { message: "Please fill all the details" }
      this.setState({ errors: errors.concat(error) })
      return false
    }
    else if (!this.passwordMatch(this.state)) {
      error = { message: "Password is Invalid" }
      this.setState({ errors: errors.concat(error) })
      return false
    }
    else {
      return true
    }
  }

  isFormEmpty = ({ username, email, password, conformPassword }) => {
    return !username.length || !email.length || !password.length || !conformPassword.length
  }
  passwordMatch = ({ password, conformPassword }) => {
    if (password.length < 6 || conformPassword.length < 6) {
      return false
    }
    else if (password !== conformPassword) {
      return false
    }
    else {
      return true
    }
  }

  displayErrors = errors => errors.map((error, i) => <p key={i} className="text-center">{error.message}</p>);

  handleInputErrors = (errors, inputName) => {
    return errors.some(error => error.message.toLowerCase().includes(inputName)) ? "input-error" : "";
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.isFormVaild()) {
      this.setState({ errors: [], loading: true })
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(createUser => {
          console.log(createUser)
          createUser.user.updateProfile({
            displayName: this.state.username,
            photoURL: `http://gravatar.com/avatar/${md5(createUser.user.email)}?d=identicon`
          })
            .then(() => {
              this.saveUser(createUser).then(() => {
                //console.log("user saved successfully")
              })
            })
            .catch(err => {
              this.setState({ errors: this.state.errors.concat(err), loading: false })
            })
        })
        .catch(err => {
          this.setState({ errors: this.state.errors.concat(err), loading: false })
        })
    }
  }

  saveUser = createUser => {
    return this.state.usersRef.child(createUser.user.uid).set({
      name: createUser.user.displayName,
      avatar: createUser.user.photoURL
    })
  }

  render() {
    const { username, email, password, conformPassword, errors } = this.state;
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
                    <h1 className="text-center text-primary">Signup</h1>
                    <form className="pt-3" onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="email">User Name:</label>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-user-circle"></i></span>
                          </div>

                          <input
                            type="text"
                            name="username"
                            className="form-control"
                            placeholder="Username"
                            onChange={this.handleChange}
                            value={username}
                          />

                        </div>
                      </div>
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
                      <div className="form-group">
                        <label htmlFor="pwd">Retype Password:</label>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className={`input-group-text ${this.handleInputErrors(errors, "password")}`}>
                              <i className="fa fa-eye-slash"></i>
                            </span>
                          </div>

                          <input
                            type="password"
                            name="conformPassword"
                            className={`form-control ${this.handleInputErrors(errors, "password")}`}
                            placeholder="Retype the password"
                            autoComplete="true"
                            onChange={this.handleChange}
                            value={conformPassword}
                          />

                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary btn-lg btn-block shadow-sm">Register</button>
                      <p className="text-center pt-3">Already have an account? <Link to="/login">Login</Link></p>
                    </form>
                    {errors.length > 0 && (
                      <div className="card card-body p-1 Error">
                        <h4 className="text-center">Error</h4>
                        {this.displayErrors(errors)}
                      </div>
                    )
                    }
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
