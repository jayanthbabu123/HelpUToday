import React, { Component } from 'react';
import Header from '../../Components/header';
import { Link } from 'react-router-dom';
import '../../App.scss';
import CommonServices from '../../Components/common-services';
class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards:[]
        }
    }
    componentDidMount(){
        CommonServices.getCardsData().then((res)=>{this.setState(({cards:res}))})
    }
    render() {
        return (    
            <div className="services-section">
                <Header/>
            <div className="container-fluid mt-2">
                    <ul className="breadcrumb theme-bg-color justify-content-end">
                        <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                        <li className="breadcrumb-item active">Services</li>
                    </ul>
                    <div className="row services mt-5">
                    {
                        this.state.cards.map((value,index)=>{
                            return(
                                <div className="col-md-3" key={index}>
                                <Link to={value.redirect} className="text-decotartion-none"><div className="card card-body shadow-sm mb-4 animated fadeIn">
                                    <div className="text-center">
                                    <span><img src={value.main_cat_icon} width="60" height="60" className="mt-4" /></span>
                                        <h5 className="text-success my-4"><b><span className="theme-color">{value.main_cat_name}</span></b></h5>
                                    </div>
                                </div></Link>
                            </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        )
    }
}
export default Services;
