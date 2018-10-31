import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer-section">
                    <footer className="footer-style pt-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 useful-link">
                                    <ul>
                                        <h2 className="title-widget">Useful Links</h2>
                                        <li><a href="#"><i className="fa fa-angle-double-right"></i> &nbsp;About Us</a></li>
                                        <li> <a href="#"><i className="fa fa-angle-double-right"></i> &nbsp;Contact Us</a></li>
                                        <li> <a href="#"><i className="fa fa-angle-double-right"></i> &nbsp;Scuccess Stories</a></li>
                                        <li> <a href="#"><i className="fa fa-angle-double-right"></i> &nbsp;PG Courses</a></li>
                                        <li> <a href="#"><i className="fa fa-angle-double-right"></i> &nbsp;Achiver's Batch</a></li>
                                        <li> <a href="#"><i className="fa fa-angle-double-right"></i> &nbsp;Regular Batch</a></li>
                                        <li> <a href="#"><i className="fa fa-angle-double-right"></i> &nbsp;Test & Discussion</a></li>
                                        <li> <a href="#"><i className="fa fa-angle-double-right"></i> &nbsp;Fast Track T & D</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3 useful-link">
                                    <ul>
                                        <h2 className="title-widget">Useful Links</h2>
                                        <li> <a href="#"><i className="fa fa-angle-double-right"></i> &nbsp;Test Series Schedule</a></li>
                                        <li> <a href="#"><i className="fa fa-angle-double-right"></i> &nbsp;Post Coaching</a></li>
                                        <li> <a href="#"><i className="fa fa-angle-double-right"></i> &nbsp;PG Dr.Bhatia Books</a></li>
                                        <li> <a href="#"><i className="fa fa-angle-double-right"></i> &nbsp;UG Courses</a></li>
                                        <li> <a href="#"><i className="fa fa-angle-double-right"></i> &nbsp;Satellite Education</a></li>
                                        <li> <a href="#"><i className="fa fa-angle-double-right"></i> &nbsp;Study Centers</a></li>
                                        <li> <a href="#"><i className="fa fa-angle-double-right"></i> &nbsp;State PG Mocks</a></li>
                                        <li> <a href="#"><i className="fa fa-angle-double-right"></i> &nbsp;Results</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3 useful-link">
                                    <ul>
                                        <h2 className="title-widget">Useful Links</h2>
                                        <li> <a href="#"><i className="fa fa-angle-double-right"></i> &nbsp;About Us</a></li>
                                        <li> <a href="#"><i className="fa fa-angle-double-right"></i> &nbsp;About Us</a></li>
                                        <li> <a href="#"><i className="fa fa-angle-double-right"></i> &nbsp;About Us</a></li>
                                        <li> <a href="#"><i className="fa fa-angle-double-right"></i> &nbsp;About Us</a></li>
                                        <li> <a href="#"><i className="fa fa-angle-double-right"></i> &nbsp;About Us</a></li>
                                        <li> <a href="#"><i className="fa fa-angle-double-right"></i> &nbsp;About Us</a></li>
                                        <li> <a href="#"><i className="fa fa-angle-double-right"></i> &nbsp;About Us</a></li>
                                        <li> <a href="#"><i className="fa fa-angle-double-right"></i> &nbsp;About Us</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3 useful-link">
                                    <ul>
                                        <h2 className="title-widget">Contact Details</h2>
                                       <div className="title-median">
                                       <h3>Help U.pvt.ltd</h3>
                                       </div>
                                       <h6><b className="text-dark">Email Id:</b><a href="">Info@helpu.com</a></h6>
                                       <h6 className="text-dark">Helping No:<span className="text-warning">(8AM to 10PM):</span> +91-8888999977,8888999966</h6>
                                       <h6 className="text-dark">Corp Office / Postal Address</h6>
                                       <h6 className="text-dark">Phone Numbers : 7042827160,</h6>
                                       <h6 className="text-dark">011-27568832, 9868387223</h6>
                                       <ul className="d-inline-flex p-0">
                                           <li><i className="fa fa-facebook-square fa-3x px-1 social-fb"></i></li>
                                           <li><i className="fa fa-twitter-square fa-3x px-1 social-tw"></i></li>
                                           <li><i className="fa fa-google-plus-square fa-3x px-1 social-gg"></i></li>
                                           <li><i className="fa fa-envelope-square fa-3x px-1 social-ma"></i></li>
                                       </ul>
                                
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </footer>
                    <div className="footer-bottem">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="text-color">© {(new Date().getFullYear())},Help U Today,All Rights Reserved</div>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-color text-right">Services & Development by A2Z Service</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;
