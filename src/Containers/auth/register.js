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
    confirmPassword: '',
    usersRef: firebase.database().ref("users"),
    errors: [],
    loading: false,
    visible: true,
  }
  handleOnchange = event => this.setState({ [event.target.name]: event.target.value });

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

  isFormEmpty = ({ username, email, password, confirmPassword }) => {
    return !username.length || !email.length || !password.length || !confirmPassword.length
  }
  passwordMatch = ({ password, confirmPassword }) => {
    if (password.length < 6 || confirmPassword.length < 6) {
      return false
    }
    else if (password !== confirmPassword) {
      return false
    }
    else {
      return true
    }
  }


  handleregister = event => {
    event.preventDefault()
    if (this.isFormVaild()) {
      this.setState({ errors: [], loading: true })
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(createdUser => {
          // console.log(createdUser);
          createdUser.user.updateProfile({
            displayName: this.state.username,
            photoURL: `http://gravatar.com/avatar/${md5(createdUser.user.email)}?d=identicon`
          })
            .then(() => {
              this.saveUserData(createdUser)
              this.setState({loading:false})
            })
        })
        .then(() => {
          firebase.auth().currentUser.sendEmailVerification()
            .then(alt => {
              window.alert("verification link has sent to your mail please verify the account")
              this.props.history.push('/login')
            })
        }).catch(err => {
          this.setState({ errors: this.state.errors.concat(err), loading: false })
        })
    }

  }

  saveUserData = (createdUser) => {
    return this.state.usersRef.child(createdUser.user.uid).set({
      name: createdUser.user.displayName,
      avatar: createdUser.user.photoURL
    })
  };

  displayErrors = errors => errors.map((error, i) => <p key={i} className="text-center">{error.message}</p>);

  handleInputErrors = (errors, inputName) => {
    return errors.some(error => error.message.toLowerCase().includes(inputName)) ? "input-error" : "";
  }
  passwordType = () => {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    const { username, email, password, confirmPassword, errors, visible ,loading} = this.state;
    return (
      <div>
        <Header />
        <div className="container-fluid custom-card">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="card card-body mt-10">
                <div className="row">
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                    <h1 className="text-center text-primary">Signup</h1>
                    <form className="pt-3" onSubmit={this.handleregister}>
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
                            onChange={this.handleOnchange}
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
                            onChange={this.handleOnchange}
                            value={email}
                          />

                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend" onClick={this.passwordType}>
                            <span className={`input-group-text ${this.handleInputErrors(errors, "password")}`}>
                              <i className={`${visible ? "fa fa-eye-slash" : "fa fa-eye"}`} aria-hidden="true"></i>
                            </span>
                          </div>

                          <input
                            type={`${visible ? "password" : "text"}`}
                            name="password"
                            className={`form-control ${this.handleInputErrors(errors, "password")}`}
                            placeholder="Enter your password"
                            autoComplete="true"
                            onChange={this.handleOnchange}
                            value={password}
                          />

                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="pwd">Retype Password:</label>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend" onClick={this.passwordType}>
                            <span className={`input-group-text ${this.handleInputErrors(errors, "password")}`}>
                              <i className={`${visible ? "fa fa-eye-slash" : "fa fa-eye"}`} aria-hidden="true"></i>
                            </span>
                          </div>

                          <input
                            type={`${visible ? "password" : "text"}`}
                            name="confirmPassword"
                            className={`form-control ${this.handleInputErrors(errors, "password")}`}
                            placeholder="Retype the password"
                            autoComplete="true"
                            onChange={this.handleOnchange}
                            value={confirmPassword}
                          />

                        </div>
                      </div>
                      <button type="submit" disabled={loading} className="btn btn-primary btn-lg btn-block shadow-sm">Register</button>
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
