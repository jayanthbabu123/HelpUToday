import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import Header from '../../Components/header';

class MyBookings extends Component {
    state = {
        user: this.props.user,
        bookings: [],
        currentPage: 1,
        bookingsPerPage: 10
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

    handleClick = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    render() {
        const { bookings, user, currentPage, bookingsPerPage } = this.state;

        const indexOfLastBooking = currentPage * bookingsPerPage;
        const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
        const currentTodos = bookings.slice(indexOfFirstBooking, indexOfLastBooking);
        let myBookings = null;
        if (bookings) {
            myBookings = currentTodos.map((data, index) => <tr key={index}>
                <td>{data.serviceType}</td>
                <td>{data.name}</td>
                <td>{data.phone}</td>
                <td>{data.address}</td>
                <td>{data.comments}</td>
                <td>{data.date}</td>
            </tr>)
        }
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(bookings.length / bookingsPerPage); i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li className="page-item"
                    key={number}
                >
                    <span className="pagination-link-styles" id={number} onClick={this.handleClick}>{number}</span>
                </li>
            );
        });
        let error = null
        if (bookings.length === 0) {
            error = <p className="text-center py-5">No services booked..!</p>
        }
        return (
            <React.Fragment>
                <Header />
                <h4 className="text-center mt-3">Hello ..! <b>{user.displayName}</b> <img src={user.photoURL} alt="user" width="30" height="30" /></h4>
                <p className="text-center">Your Bookings</p>
                <div className="container-fluid">
                    <div className="card card-body p-3">
                        <div className="table-responsive-lg">
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
                    <div className="card card-body py-2">
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="pagination m-0">
                                    <li className="page-item"
                                    >
                                        <i className="fa fa-angle-double-left pagination-link-styles" id={1} onClick={this.handleClick} aria-hidden="true"></i>
                                    </li>
                                    {renderPageNumbers}
                                    <li className="page-item"
                                    >
                                        <i className="fa fa-angle-double-right pagination-link-styles" id={pageNumbers[pageNumbers.length - 1]} onClick={this.handleClick} aria-hidden="true"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
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
