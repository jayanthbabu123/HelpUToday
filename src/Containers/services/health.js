import React, { Component } from 'react';
import Header from '../../Components/header';
import { Link } from 'react-router-dom';

class Health extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                { name: 'Wiring & Switching', link: '#electrical', image: require('../../Images/electrical/wiring.svg') },
                { name: 'TV', link: '#tv', image: require('../../Images/electrical/television.svg') },
                { name: 'Refrigerator', link: '#Refrigerator', image: require('../../Images/electrical/refrigerator.svg') },
                { name: 'Fan&Cooler', link: '#fan', image: require('../../Images/electrical/cooler.svg') },
                { name: 'Air Conditioning', link: '#Air', image: require('../../Images/electrical/air-conditioning.svg') },
                { name: 'Mixer&Iron', link: '#Mixer', image: require('../../Images/electrical/blender.svg') },
                { name: 'Micro Oven&Electrics', link: '#Micro', image: require('../../Images/electrical/microwave-oven.svg') },
                { name: 'Others', link: '#Others', image: require('../../Images/electrical/music-player.svg') }
            ],
            popUp: [
                { name: 'Wiring & Switching', service: 'Wiring & Switching Service', link: '#electrical', pop: 'electrical', image: require('../../Images/electrical/wiring.svg') },
                { name: 'TV', service: 'TV Service', link: '#tv', pop: 'tv', image: require('../../Images/electrical/television.svg') },
                { name: 'Refrigerator', service: 'Refrigerator Service', link: '#Refrigerator', pop: 'Refrigerator', image: require('../../Images/electrical/refrigerator.svg') },
                { name: 'Fan&Cooler', service: 'Fan&Cooler Service', link: '#fan', pop: 'fan', image: require('../../Images/electrical/cooler.svg') },
                { name: 'Air Conditioning', service: 'Air Conditioning Service', link: '#Air', pop: 'Air', image: require('../../Images/electrical/air-conditioning.svg') },
                { name: 'Mixer&Iron', service: 'Mixer&Iron Service', link: '#Mixer', pop: 'Mixer', image: require('../../Images/electrical/blender.svg') },
                { name: 'Micro Oven&Electrics', service: 'Micro Oven&Electrics Service', link: '#Micro', pop: 'Micro', image: require('../../Images/electrical/microwave-oven.svg') },
                { name: 'Others', service: 'Others Services', link: '#Others', pop: 'Others', image: require('../../Images/electrical/music-player.svg') },
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
                        <li className="breadcrumb-item active">Electrical</li>
                    </ul>
                    <div className="container">
                        <h2 className="text-center">Health & Wellness</h2>
                        <h4 className="theme-blue text-center">All Health services under one umbrella</h4>
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
                        this.state.popUp.map((item, index) => {
                            return (
                                <div key={index}>
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
                                                        <p className="text-justify"><b>Description:</b>Description: Agile software development refers to a group of software
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
                                                                <input type="calendar" className="form-control" id="usr" name="username" placeholder="Select Date" />
                                                            </div>
                                                            <div className="col-md-12 my-3">
                                                                <label htmlFor="usr">Enter Location:</label>
                                                                <input type="calendar" className="form-control" id="usr" name="username" placeholder="Select Your Location" />
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
            </div>
        )
    }
}
export default Health;
