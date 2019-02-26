import React, { Component } from 'react';
import Header from '../../Components/header';
import { Link } from 'react-router-dom';
import '../../App.scss';
import CommonFooter from '../../Components/common-footer';
import Axios from 'axios';
import { connect } from 'react-redux';
import Modal from 'react-awesome-modal';
import moment from 'moment'
import uuidv1 from 'uuid/v1'
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
            comments: ''
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
        this.setState({ visible: true, subTitle: item.sub_cat_name });
    }

    closeModal = () => {
        this.setState({ visible: false });
    }
    handleOnChange = event => this.setState({ [event.target.name]: event.target.value })

    handleBookService = event => {
        const { fullName, phoneNumber, date, address, comments, subTitle } = this.state
        event.preventDefault()
        if (this.isUserExist(this.props.user)) {
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
    isUserExist = user =>{
        if(!user){
           alert('please login to continue')
           return false
        }else{
            return true
        }
    }

    render() {
        const { fullName, phoneNumber, address, date, comments, visible, subTitle } = this.state;
        return (
            <div>
                <Header />
                <section>
                    <Modal visible={visible} width="600" height="500" effect="fadeInDown" onClickAway={() => this.closeModal()}>
                        <div className="p-4">
                            <h2 className="text-center theme-blue">{subTitle}</h2>
                            <p className="text-center">Let's fill the details to get served</p>
                            <form onSubmit={this.handleBookService}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="Name">Name:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Name"
                                                name="fullName"
                                                value={fullName}
                                                onChange={this.handleOnChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="Number">phone Number:</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Mobile number"
                                                name="phoneNumber"
                                                value={phoneNumber}
                                                onChange={this.handleOnChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="date">date:</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                name="date"
                                                value={date}
                                                onChange={this.handleOnChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="Address">Address:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="address"
                                                value={address}
                                                onChange={this.handleOnChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="comment">Comments:</label>
                                            <textarea
                                                className="form-control"
                                                rows="5"
                                                name="comments"
                                                value={comments}
                                                onChange={this.handleOnChange}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="pb-2">
                                    <button className="btn btn-sm btn-danger float-left" onClick={() => this.closeModal()}>CANCEL</button>
                                    <button type="submit" className="btn btn-sm btn-success float-right" >SUBMIT</button>
                                </div>
                            </form>
                        </div>
                    </Modal>
                </section>
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