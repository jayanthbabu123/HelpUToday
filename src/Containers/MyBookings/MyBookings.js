import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import Header from '../../Components/header';

class MyBookings extends Component {
    state = {
        user: this.props.user,
        bookings: [],
        currentPage: 1,
        bookingsPerPage: 10,
        searchTearm: '',
        searchLoading: false,
        searchResults: []
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
    };

    handleClick = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    handleSearchBookings = event => {
        this.setState({
            searchTearm: event.target.value, searchLoading: true
        }, () => this.searchBookingResults())
    };
    searchBookingResults = () => {
        const searchBookings = [...this.state.bookings];
        const regex = new RegExp(this.state.searchTearm, "gi");
        const searchResults = searchBookings.reduce((acc, seacrhedBookings) => {
            const isResultsCheck = seacrhedBookings.serviceType && seacrhedBookings.serviceType.match(regex) || seacrhedBookings.name.match(regex) || seacrhedBookings.phone.match(regex) || seacrhedBookings.address.match(regex) || seacrhedBookings.date.match(regex)
            if (isResultsCheck) {
                acc.push(seacrhedBookings)
            }
            return acc;
        }, []);
        this.setState({ searchResults })
        setTimeout(() => this.setState({ searchLoading: false }), 500)
    };

    displayBookings = bookings => {
        const { currentPage, bookingsPerPage } = this.state;
        const indexOfLastBooking = currentPage * bookingsPerPage;
        const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
        let searchedBookings = bookings.slice(indexOfFirstBooking, indexOfLastBooking);
        return (
            searchedBookings && (
                searchedBookings.map((data, index) => <tr key={index}>
                    <td>{data.serviceType}</td>
                    <td>{data.name}</td>
                    <td>{data.phone}</td>
                    <td>{data.address}</td>
                    <td>{data.comments}</td>
                    <td>{data.date}</td>
                </tr>)
            )
        )
    }
    handleItemsChange = event => this.setState({ bookingsPerPage: event.target.value });
    pageRefresh = () => window.location.reload()
    render() {
        const { bookings, user, bookingsPerPage, searchTearm, searchResults } = this.state;
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
        if (searchTearm ? searchResults.length === 0 : bookings.length === 0) {
            error = <p className="text-center py-5">No services found..!</p>
        }
        return (
            <React.Fragment>
                <Header />
                <h4 className="text-center mt-3">Hello ..! <b>{user.displayName}</b> <img src={user.photoURL} alt="user" width="30" height="30" /></h4>
                <p className="text-center">Your Bookings</p>
                <div className="container-fluid">
                    <div className="card card-body pt-3 pb-0">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-md-7 text-right p-0"><label className="label-align">No Of Items</label></div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <select name="bookingsPerPage" value={this.state.bookingsPerPage} onChange={this.handleItemsChange} className="form-control">
                                                <option value="10">10</option>
                                                <option value="25">25</option>
                                                <option value="50">50</option>
                                                <option value="100">100</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" placeholder="search your bookings" className="form-control" onChange={this.handleSearchBookings} />
                                    {this.state.searchLoading ? <i className="fa fa-spinner fa-spin loading-styles" aria-hidden="true"></i> : null}
                                </div>
                            </div>
                            <div className="col-md-1">
                                <button className="btn btn-sm btn-outline-primary" onClick={this.pageRefresh}><i className="fa fa-refresh"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-body p-3">
                        <div className="table-responsive-lg">
                            <table className="table table-hover">
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
                                    {searchTearm ? this.displayBookings(searchResults) : this.displayBookings(bookings)}
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
                    <br /><br /><br />
                </div>
            </React.Fragment>
        )
    }
}
const mapSateToProps = state => ({
    user: state.user.currentUser
})
export default connect(mapSateToProps)(MyBookings);
