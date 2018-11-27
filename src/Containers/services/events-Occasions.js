import React, { Component } from 'react';
import Header from '../../Components/header';
import { Link } from 'react-router-dom';
import CommonFooter from '../../Components/common-footer';

class EventsOccasions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                { name: 'Chef', link: '#Chef', image: require('../../Images/marriages/chef-cooking.svg') },
                { name: 'Food Catering', link: '#Food', image: require('../../Images/marriages/delivering.svg') },
                { name: 'Buffet', link: '#Buffet', image: require('../../Images/marriages/buffet.svg') },
                { name: 'Chairs/Tables', link: '#Chairs', image: require('../../Images/marriages/table.svg') },
                { name: 'Lighting', link: '#Lighting', image: require('../../Images/marriages/desk-lamp.svg') },
                { name: 'Video/Camera', link: '#Video', image: require('../../Images/marriages/video-camera.svg') },
                { name: 'Wedding Invitaions', link: '#Wedding', image: require('../../Images/marriages/wedding-invitation.svg') },
                { name: 'others', link: '#Others', image: require('../../Images/music-player.svg') }
            ],
            popUp: [
                { name: 'Chef', service: 'Chef Service', link: '#Chef', pop: 'Chef', image: require('../../Images/marriages/chef-cooking.svg') },
                { name: 'Food Catering', service: 'Food Catering Service', link: '#Food', pop: 'Food', image: require('../../Images/marriages/delivering.svg') },
                { name: 'Buffet', service: 'Buffet Service', link: '#Buffet', pop: 'Buffet', image: require('../../Images/marriages/buffet.svg') },
                { name: 'Chairs/Tables', service: 'Chairs/Tables Service', link: '#Chairs', pop: 'Chairs', image: require('../../Images/marriages/table.svg') },
                { name: 'Lighting Keeping', service: 'Lighting Service', link: '#Lighting', pop: 'Lighting', image: require('../../Images/marriages/desk-lamp.svg') },
                { name: 'Video/Camera', service: 'Video/Camera Service', link: '#Video', pop: 'Video', image: require('../../Images/marriages/video-camera.svg') },
                { name: 'Wedding Invitaions', service: 'Wedding Invitaions Service', link: '#Wedding', pop: 'Wedding', image: require('../../Images/marriages/wedding-invitation.svg') },
                { name: 'others', service: 'others Service', link: '#Others', pop: 'Others', image: require('../../Images/music-player.svg') }
            ]
        };
    }
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid services-section mt-2">
                    <ul className="breadcrumb theme-bg-color justify-content-end">
                        <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/services">Services</Link></li>
                        <li className="breadcrumb-item active">Home Cleaning</li>
                    </ul>
                    <div className="container">
                        <h2 className="text-center">Marriage Services</h2>
                        <h4 className="theme-blue text-center">All marriage services under one umbrella</h4>
                        <div className="row pt-5">
                            {this.state.list.map((item, index) => {
                                return (
                                    <div className="col-md-3" key={index}>
                                        <div className="card card-body shadow-sm mb-4 animated fadeIn">
                                            <div className="text-center">
                                                <span><img src={item.image} width="50" height="50" className="mt-4" /></span>
                                                <h5 className="text-success my-4" data-toggle="modal" data-target={item.link}> <b>{item.name}</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    {
                        this.state.popUp.map((item, ind) => {
                            return (
                                <div key={ind}>
                                    <div className="modal fade" id={item.pop}>
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">
                                                <div className="modal-header bg-info">
                                                    <h4 className="modal-title">{item.service}</h4>
                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                </div>
                                                <div className="modal-body p-0">
                                                    <div className="jumbotron py-3 text-center">
                                                        <div className="container">
                                                            <span><img src={item.image} width="50" height="50" className="mt-4" /></span>
                                                            <h5 className="text-success my-4" data-toggle="modal" data-target={item.link}> <b>{item.name}</b></h5>
                                                        </div>
                                                    </div>
                                                    <div className="container-fluid">
                                                        <p className="text-justify"><b>Description:</b>Agile software development refers to a group of software
                                                        development methodologies based on iterative development, where requirements and solutions
                                        evolve through collaboration between self-organizing cross-functional teams.</p>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <label htmlFor="usr">First Name:</label>
                                                                <input type="text" className="form-control" id="usr" name="username" placeholder="Enter Your First Name" />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="usr">Last Name:</label>
                                                                <input type="text" className="form-control" id="usr" name="username" placeholder="Enter Your Last Name" />
                                                            </div>
                                                            <div className="col-md-6 my-3">
                                                                <label htmlFor="usr">Mobile Number:</label>
                                                                <input type="number" className="form-control" id="usr" name="username" placeholder="Enter Your mobile Number" />
                                                            </div>
                                                            <div className="col-md-6 my-3">
                                                                <label htmlFor="usr">Select Date:</label>
                                                                <input type="date" className="form-control" id="usr" name="username" placeholder="Select Date" />
                                                            </div>
                                                            <div className="col-md-12 my-3">
                                                                <label htmlFor="usr">Enter Location:</label>
                                                                <input type="search" className="form-control" id="usr" name="username" placeholder="Select Your Location" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-warning" data-dismiss="modal">Close</button>
                                                    <button type="button" className="btn btn-success" data-dismiss="modal">Book</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <CommonFooter/>
            </div>
        )
    }
}
export default EventsOccasions;