import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import Header from '../../Components/header';

class MyBookings extends Component {
    state = {
        user: this.props.user,
        bookings: []
    }
    componentDidMount() {
        this.getMyBookings()
    }
    getMyBookings = () => {
        Axios.get(`/bookings/${this.state.user.uid}/myBookings.json`)
            .then(response => {
                let bookingdata = []
                for (let data in response.data) {
                    bookingdata.push(response.data[data])
                }
                this.setState({ bookings: bookingdata })
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        const { bookings, user } = this.state;
        let myBookings = null;
        if (bookings) {
            myBookings = bookings.map((data, i) => <tr key={i}>
                <td>{data.serviceType}</td>
                <td>{data.name}</td>
                <td>{data.phone}</td>
                <td>{data.address}</td>
                <td>{data.comments}</td>
                <td>{data.date}</td>
            </tr>)
        }
        let error = null
        if (bookings.length === 0) {
          error = <p className="text-center py-5">No services booked..!</p>
        }
        return (
            <React.Fragment>
                <Header />
                <h4 className="text-center mt-3">Hello ..! <b>{user.displayName}</b> <img src={user.photoURL} alt="user" width="30" height="30" /></h4>
                <p className="text-center">Your Bookings</p>
                <div className="container">
                    <div className="card card-body p-0">
                        <table className="table">
                            <thead className="thead-light">
                                <tr>
                                    <th>Service type</th>
                                    <th>Name</th>
                                    <th>Mobile Number</th>
                                    <th>Address</th>
                                    <th>Comments</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myBookings}
                            </tbody>
                        </table>
                        {error}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
const mapSateToProps = state => ({
    user: state.user.currentUser
})
export default connect(mapSateToProps)(MyBookings);
