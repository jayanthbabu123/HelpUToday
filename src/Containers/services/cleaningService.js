import React, { Component } from 'react';
import Header from '../../Components/header';
import { Link } from 'react-router-dom';
import CommonFooter from '../../Components/common-footer';
import Axios from 'axios';
import { connect } from 'react-redux';
import moment from 'moment';
import uuidv1 from 'uuid/v1';
import CustomModal from '../../Components/Modal/Modal';

class CleaningService extends Component {
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
            comments: ''
        };
    }
    componentDidMount() {
        Axios.get('/main_cat_array/1/sub_cat_array_cleaning.json')
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
        if (this.state.user) {
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
                })
                .catch(err => {
                    console.log(err)
                    this.setState({ visible: false })
                })
        }
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
                        <li className="breadcrumb-item active">Cleaning Services</li>
                    </ul>
                    <div className="container">
                        <h2 className="text-center">Cleaning Services</h2>
                        <h4 className="theme-blue text-center">All Cleaning Services under one umbrella</h4>
                        <div className="row pt-5">
                            {this.state.Data.map((item, index) => {
                                return (
                                    <div className="col-md-3" key={index} onClick={() => this.openModal(item)}>
                                        <div className="card card-body shadow-sm mb-4 animated fadeIn">
                                            <div className="text-center">
                                                <span><img src={require(`../../Images/cleaning-services/${item.sub_cat_icon}`)} width="50" height="50" className="mt-4" /></span>
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
export default connect(mapSatetoProps)(CleaningService);