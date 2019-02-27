import React, { Component } from 'react';
import Header from '../../Components/header';
import { Link } from 'react-router-dom';
import '../../App.scss';
import CommonFooter from '../../Components/common-footer';
import Axios from 'axios';
import { connect } from 'react-redux';
import moment from 'moment'
import uuidv1 from 'uuid/v1'
import CustomModal from '../../Components/Modal/Modal';
class Homecleaning extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Data: [],
            show: false,
            user: this.props.currentUser,
            visible: false,
            subTitle: '',
            fullName: '',
            phoneNumber: '',
            date: moment(new Date()).format('YYYY-MM-DD'),
            address: '',
            comments: '',
            errors: []
        };
    }
    componentDidMount() {
        Axios.get('/main_cat_array/0/sub_cat_array_home.json')
            .then(response => {
                this.setState({ Data: response.data })
            })
            .catch(err => {
                console.log(err)
            })
    }
    openModal = (item) => {
        if (this.isUserExist(this.state.user)) {
            this.setState({ visible: true, subTitle: item.sub_cat_name });
        }
    }

    closeModal = () => {
        this.setState({ visible: false, fullName: '', phoneNumber: '', address: '', comments: '' });
    }
    handleOnChange = event => this.setState({ [event.target.name]: event.target.value })

    handleBookService = event => {
        const { fullName, phoneNumber, date, address, comments, subTitle } = this.state
        event.preventDefault()
        if (this.state.user && this.isFormValid()) {
            const bookingData = {
                id: uuidv1(),
                serviceType: subTitle,
                name: fullName,
                phone: phoneNumber,
                date: date,
                address: address,
                comments: comments
            }
            Axios.post(`/bookings/${this.state.user.uid}/myBookings.json`, bookingData)
                .then(resposne => {
                    this.setState({ visible: false })
                    this.props.history.push('/my-bookings')
                })
                .catch(err => {
                    console.log(err)
                    this.setState({ visible: false })
                })
        }
    }
    isFormValid = () => {
        let errors = [];
        let error;
        if (this.isAllFieldsExists(this.state)) {
            error = { message: "Please fill all the details" }
            this.setState({ errors: errors.concat(error) })
            alert("Please fill all the details")
            return false;
        }
        else {
            return true;
        }
    }
    isAllFieldsExists = ({ fullName, phoneNumber, date, address, comments }) => {
        return !fullName.length || !phoneNumber.length || !date.length || !address.length || !comments.length
    }
    isUserExist = (user) => {
        if (!user) {
            this.props.history.push('/login')
            return false;
        }
        else {
            return true;
        }
    }

    render() {
        const { fullName, phoneNumber, address, date, comments, visible, subTitle } = this.state;
        return (
            <div>
                <Header />
                <CustomModal
                    fullName={fullName}
                    phoneNumber={phoneNumber}
                    date={date}
                    comments={comments}
                    visible={visible}
                    subTitle={subTitle}
                    address={address}
                    handleOnChange={this.handleOnChange}
                    handlCloseModal={() => this.closeModal()}
                    handleBookService={this.handleBookService}
                    closeModal={() => this.closeModal()}
                />
                <div className="container-fluid services-section mt-2">
                    <ul className="breadcrumb theme-bg-color justify-content-end">
                        <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/services">Services</Link></li>
                        <li className="breadcrumb-item active">Home Maintenance</li>
                    </ul>
                    <div className="container">
                        <h2 className="text-center">Home Maintenance Services</h2>
                        <h4 className="theme-blue text-center">All Home Maintenance services under one umbrella</h4>
                        <div className="row pt-5">
                            {this.state.Data.map((item, index) => {
                                return (
                                    <div className="col-md-3" key={index} onClick={() => this.openModal(item)}>
                                        <div className="card card-body shadow-sm mb-4 animated fadeIn">
                                            <div className="text-center">
                                                <span><img src={require(`../../Images/home-maintenance/${item.sub_cat_icon}`)} width="50" height="50" className="mt-4" /></span>
                                                <h5 className="text-success my-4" data-toggle="modal" data-target={item.link}> <b>{item.sub_cat_name}</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <br /><br /><br />
                    </div>
                </div>
                <CommonFooter />
            </div>
        )
    }
}
const mapSatetoProps = state => ({
    currentUser: state.user.currentUser
})
export default connect(mapSatetoProps)(Homecleaning);