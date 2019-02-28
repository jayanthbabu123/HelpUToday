import React from 'react';
import Header from '../Components/header';

const Contact = () => (
    <div>
        <Header />
        <div className="container-fluid">
            <section className="jumbotron py-3 mt-5">
                <h3 className="text-center mb-5"><span  style={{color:'#007bff'}}>Contact Us</span></h3>
                <div className="row">
                    <div className="col-md-12">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-4 contact-border-right">
                                    <div className="text-center">
                                        <i className="fa fa-map-marker icon-styles"></i>
                                    </div>
                                    <h5 className="text-center">ADDRESS</h5>
                                    <p className="text-center">A108 Adam Street, NY 535022, USA</p>
                                </div>
                                <div className="col-md-4 contact-border-right">
                                    <div className="text-center">
                                        <i className="fa fa-phone icon-styles"></i>
                                    </div>
                                    <h5 className="text-center">PHONE NUMBER</h5>
                                    <p className="text-center">+1 5589 55488 55</p>
                                </div>
                                <div className="col-md-4">
                                    <div className="text-center">
                                        <i className="fa fa-envelope-o icon-styles"></i>
                                    </div>
                                    <h5 className="text-center">EMAIL</h5>
                                    <p className="text-center">info@example.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="container mt-3">
                            <div className="row">
                                <div className="col-md-6 my-3">
                                    <input type="text" placeholder="Your Name" className="form-control" />
                                </div>
                                <div className="col-md-6 my-3">
                                    <input type="email" placeholder="Email" className="form-control" />
                                </div>
                                <div className="col-md-12 my-3">
                                    <input type="text" placeholder="summery" className="form-control" />
                                </div>
                                <div className="col-md-12 my-3">
                                    <textarea rows="5" className="form-control" placeholder="message"></textarea>
                                </div>
                                <div className="col-md-12 text-center">
                                    <button className="btn btn-primary">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br /> <br /> <br />
        </div>
    </div>
);
export default Contact;