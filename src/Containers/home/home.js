import React, { Component } from 'react';
import Header from '../../Components/header';
import '../../App.scss';
import { Link } from 'react-router-dom';
import Footer from '../../Components/footer';


class Home extends Component {
    constructor() {
        super();
        this.state = {
            second_section: [
                {
                    heading: 'Home Maintenance ',
                    content: ' Why put your hands in shock prone zones of the complex circuitwhen you can simply call an expert electrician and make your life easy. At LIFEASY we are one-stop- solution for all your needs and understand the urgency and therefore provide guaranteed 120 minutes of turnaround time. Lifeasy\'s professionals help you in any assistance in electrician service and ensure safety of your home and family.',
                    image: require('../../Images/home-services/main-services/house.svg')
                },
                {
                    heading: 'Cleaning Services',
                    content: ' Why put your hands in shock prone zones of the complex circuitwhen you can simply call an expert electrician and make your life easy. At LIFEASY we are one-stop- solution for all your needs and understand the urgency and therefore provide guaranteed 120 minutes of turnaround time. Lifeasy\'s professionals help you in any assistance in electrician service and ensure safety of your home and family.',
                    image: require('../../Images/home-services/main-services/cleaning-service.svg')
                },
                {
                    heading: 'Document Services',
                    content: ' Why put your hands in shock prone zones of the complex circuitwhen you can simply call an expert electrician and make your life easy. At LIFEASY we are one-stop- solution for all your needs and understand the urgency and therefore provide guaranteed 120 minutes of turnaround time. Lifeasy\'s professionals help you in any assistance in electrician service and ensure safety of your home and family.',
                    image: require('../../Images/home-services/main-services/document-service.svg')
                },
                {
                    heading: 'Events & Occasions',
                    content: ' Why put your hands in shock prone zones of the complex circuitwhen you can simply call an expert electrician and make your life easy. At LIFEASY we are one-stop- solution for all your needs and understand the urgency and therefore provide guaranteed 120 minutes of turnaround time. Lifeasy\'s professionals help you in any assistance in electrician service and ensure safety of your home and family.',
                    image: require('../../Images/home-services/main-services/events.svg')
                },
                {
                    heading: 'Automobile Services',
                    content: ' Why put your hands in shock prone zones of the complex circuitwhen you can simply call an expert electrician and make your life easy. At LIFEASY we are one-stop- solution for all your needs and understand the urgency and therefore provide guaranteed 120 minutes of turnaround time. Lifeasy\'s professionals help you in any assistance in electrician service and ensure safety of your home and family.',
                    image: require('../../Images/home-services/main-services/automobile.svg')
                },
                {
                    heading: 'Health & Personal',
                    content: ' Why put your hands in shock prone zones of the complex circuitwhen you can simply call an expert electrician and make your life easy. At LIFEASY we are one-stop- solution for all your needs and understand the urgency and therefore provide guaranteed 120 minutes of turnaround time. Lifeasy\'s professionals help you in any assistance in electrician service and ensure safety of your home and family.',
                    image: require('../../Images/home-services/main-services/doctor.svg')
                }
            ],
            third_section: [
                { heading: 'Book', content: ' Share your need and information with us.', image: require('../../Images/home-services/tick.svg') },
                { heading: 'Scedule', content: ' Schedule a time for us to attend to you.', image: require('../../Images/home-services/calendar.svg') },
                { heading: 'Relax', content: 'Our expert team will do the assigned task while you relax.', image: require('../../Images/home-services/resting.svg') }
            ]
        }
    }
    render() {
        return (
            <div>
                <Header />
                <div className="Home-page">
                    <div className="container-fluid p-0">
                        <div className="background-img section-one">
                            <div className="head-content">
                                <div className="container">
                                    <h1 className="display-4"> <b>Work <span className="theme-color">Smarter</span>, Work <span className="text-info">Together</span></b></h1>
                                    <p>Help U brings you flexibility in choosing the services you want to avail</p>
                                    <ul className="btn-group">
                                        <li><button type="button" className="btn btn-lg btn-success mx-2"><Link to="/services">Book Service</Link></button></li>
                                        <li><Link to="/about"><button type="button" className="btn btn-lg btn-info mx-2">About</button></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5 second-section">
                        <h2 className="text-center mb-5">How Can We Healp you Today ?</h2>
                        <div className="row">
                            {this.state.second_section.map((item, index) => {
                                return (
                                    <div className="col-md-4" key={index}>
                                        <div className="text-center">
                                            <img src={item.image} width="70" height="70" className="mt-4" />
                                            <h4 className="theme-color my-3">{item.heading}</h4>
                                        </div>
                                        <p className="text-justify">
                                            {item.content}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="container-fluid section-three p-0">
                        <div className="col-md-12 p-0">
                            <div className="card card-body">
                                <h2 className="text-center mb-5">How Can We Healp you with ?</h2>
                                <div className="row mt-5">
                                    <div className="col-md-4">
                                        <div className="row">
                                            <div className="col-md-12 my-3 text-center">
                                                <div className="text-center">
                                                    <img src={require('../../Images/home-services/energy.svg')} width="70" height="70" />
                                                    <h4 className="theme-blue my-3">Energy</h4>
                                                    <p className="text-center">
                                                        See our energy products and services <br />available to you.
                                                </p>
                                                </div>
                                            </div>
                                            <div className="col-md-12 my-3 text-center">
                                                <div className="text-center">
                                                    <img src={require('../../Images/home-services/house.svg')} width="70" height="70" />
                                                    <h4 className="theme-blue my-3">Home Services</h4>
                                                    <p className="text-center">
                                                        Protect your boiler, heating, appliances, <br />electricals, plumbing and drains.
                                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 worker-img">
                                        <img src={require('../../Images/home-services/worker.png')} width="100%" height="auto" />
                                    </div>
                                    <div className="col-md-4">
                                        <div className="row">
                                            <div className="col-md-12 my-3 text-center">
                                                <div className="text-center">
                                                    <img src={require('../../Images/home-services/rocket.svg')} width="70" height="70" />
                                                    <h4 className="theme-blue my-3">Smart Homes</h4>
                                                    <p className="text-center">
                                                        Enjoy the benefits of smart meters and find <br />out more about smart products.
                                                </p>
                                                </div>
                                            </div>
                                            <div className="col-md-12 my-3 text-center">
                                                <div className="text-center">
                                                    <img src={require('../../Images/home-services/call.svg')} width="70" height="70" />
                                                    <h4 className="theme-blue my-3">Help & Support</h4>
                                                    <p className="text-center">
                                                        Choose a category to find the best <br />way to contact us.
                                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container section-four mb-5">
                        <h2 className="text-center my-5">Why Choose Us?</h2>
                        <div className="row">
                            <div className="col-md-3 text-center">
                                <i className="fa fa-thumbs-up custom-icon"></i>
                                <h4 className="mt-4">100%</h4>
                                <h4>Quality</h4>
                            </div>
                            <div className="col-md-3 text-center">
                                <i className="fa fa-users custom-icon"></i>
                                <h4 className="mt-4">2244+</h4>
                                <h4>Peoples Working</h4>
                            </div>
                            <div className="col-md-3 text-center">
                                <i className="fa fa-calendar custom-icon"></i>
                                <h4 className="mt-4">8+</h4>
                                <h4>Years Experience</h4>
                            </div>
                            <div className="col-md-3 text-center">
                                <i className="fa fa-smile-o custom-icon"></i>
                                <h4 className="mt-4">1000+</h4>
                                <h4>Smiles</h4>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid section-five p-0">
                        <div className="col-md-12 p-0">
                            <div className="card card-body">
                                <h2 className="text-center mb-5">Your Trust and Security</h2>
                                <div className="row">
                                    <div className="col-md-4 p-5">
                                        <div className="row">
                                            <div className="col-md-3 text-center">
                                                <img src={require('../../Images/home-services/timer.svg')} width="70" height="70" />
                                            </div>
                                            <div className="col-md-9">
                                                <h4 className="theme-color">Saves You Time</h4>
                                                <p className="text-justify">We helps you live smarter, giving you time to focus on whats most important.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 p-5">
                                        <div className="row">
                                            <div className="col-md-3 text-center">
                                                <img src={require('../../Images/home-services/safe.svg')} width="70" height="70" />
                                            </div>
                                            <div className="col-md-9">
                                                <h4 className="theme-color">For your Safety</h4>
                                                <p className="text-justify">All of our Helpers undergo rigorous identity checks and personal interviews. Your safety is even our concern too.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 p-5">
                                        <div className="row">
                                            <div className="col-md-3 text-center">
                                                <img src={require('../../Images/home-services/trophy.svg')} width="70" height="70" />
                                            </div>
                                            <div className="col-md-9">
                                                <h4 className="theme-color">Best Rated Professtionals</h4>
                                                <p className="text-justify">Our experienced taskers perform their tasks with dedication and perfection. We appreciate your reviews about the service.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 p-5">
                                        <div className="row">
                                            <div className="col-md-3 text-center">
                                                <img src={require('../../Images/home-services/medal.svg')} width="70" height="70" />
                                            </div>
                                            <div className="col-md-9">
                                                <h4 className="theme-color">We are Well Equipped</h4>
                                                <p className="text-justify">Let us know if you have any specific equirement, otherwise our guys carry their own supplies.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 p-5">
                                        <div className="row">
                                            <div className="col-md-3 text-center">
                                                <img src={require('../../Images/home-services/shakehand.svg')} width="70" height="70" />
                                            </div>
                                            <div className="col-md-9">
                                                <h4 className="theme-color">Always In Touch</h4>
                                                <p className="text-justify">Book your service online on one tap, keep a track of your service status and also keep in touch with your Helper.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 p-5">
                                        <div className="row">
                                            <div className="col-md-3 text-center">
                                                <img src={require('../../Images/home-services/wallet.svg')} width="70" height="70" />
                                            </div>
                                            <div className="col-md-9">
                                                <h4 className="theme-color">Cash Free Facility</h4>
                                                <p className="text-justify">Pay through secure online mode only after your job is done.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container section-six my-5">
                        <h2 className="text-center mb-5">How it works</h2>
                        <div className="row mb-5">
                            {this.state.third_section.map((item, index) => {
                                return (
                                    <div className="col-md-4" key={index}>
                                        <div className="text-center">
                                            <img src={item.image} width="70" height="70" className="mt-4" />
                                            <h4 className="theme-blue my-3">{item.heading}</h4>
                                            <p>{item.content}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <br />
                <Footer />
            </div>
        )
    }
}

export default Home;
