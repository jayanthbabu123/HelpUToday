import React, { Component } from 'react';
import Header from '../../Components/header';
import { Link } from 'react-router-dom';
import '../../App.scss';
class Services extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                { name: 'Electricl', link: '/electrical', image: require('../../Images/home-services/plug.svg') },
                { name: 'Plumbing', link: '/plumbing', image: require('../../Images/home-services/pipes.svg') },
                { name: 'Home Cleaning', link: '/homecleaning', image: require('../../Images/home-services/paint-roller.svg') },
                { name: 'Marriages', link: '/marriages', image: require('../../Images/home-services/wedding-couple.svg') },
                { name: 'Washing', link: '/washing', image: require('../../Images/home-services/two-shirts.svg') },
                { name: 'Computer Repair', link: '/computerRepair', image: require('../../Images/home-services/imac.svg') },
                { name: 'Movers & Packers', link: '/electrical', image: require('../../Images/home-services/movers.svg') },
                { name: 'Pest Control', link: '/electrical', image: require('../../Images/home-services/pest-observation.svg') },
                { name: 'Rangoli', link: '/electrical', image: require('../../Images/home-services/rangoli.svg') },
                { name: 'Painting', link: '/electrical', image: require('../../Images/home-services/paint-brush.svg') },
                { name: 'Carpentary', link: '/electrical', image: require('../../Images/home-services/hacksaw.svg') },
                { name: 'Puja and Pandit', link: '/electrical', image: require('../../Images/home-services/hinduism.svg') },
                { name: 'Home Tutors', link: '/electrical', image: require('../../Images/home-services/presentation.svg') },
                { name: 'Driving', link: '/electrical', image: require('../../Images/home-services/driving.svg') },
                { name: 'Beauty', link: '/electrical', image: require('../../Images/home-services/girl.svg') },
                { name: 'Doctor', link: '/electrical', image: require('../../Images/home-services/doctor.svg') },
                { name: 'Fitness', link: '/electrical', image: require('../../Images/home-services/fitness.svg') },
                { name: 'Mobile Services', link: '/electrical', image: require('../../Images/home-services/mobile.svg') }

            ]
        }
    }
    render() {
        return (
            <div className="services-section">
                <Header />
                <div className="container-fluid mt-2">
                    <ul className="breadcrumb theme-bg-color justify-content-end">
                        <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                        <li className="breadcrumb-item active">Services</li>
                    </ul>
                    <div className="row services">
                        {this.state.list.map((item, index) => {
                            return (
                                <div className="col-md-2" key={index}>
                                    <div className="card card-body shadow-sm mb-4 animated fadeIn">
                                        <div className="text-center">
                                            <span><img src={item.image} width="50" height="50" className="mt-4" /></span>
                                            <h5 className="text-success my-4"><b><Link to={item.link} className="theme-color">{item.name}</Link></b></h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
export default Services;
