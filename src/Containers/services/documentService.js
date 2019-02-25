import React, { Component } from 'react';
import Header from '../../Components/header';
import CommonFooter from '../../Components/common-footer';
import Axios from 'axios';
import { Link } from 'react-router-dom';

export default class DocumentService extends Component {
  constructor(props) {
    super(props)
    this.state = {
        Data:[]
    };
}
componentDidMount() {
    Axios.get('/main_cat_array/2/sub_cat_array_document.json')
        .then(response => {
            this.setState({ Data: response.data })
        })
        .catch(err=>{
            console.log(err)
        })
}
  render() {
    return (
      <div>
          <Header />
                <div className="container-fluid services-section mt-2">
                    <ul className="breadcrumb theme-bg-color justify-content-end">
                        <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/services">Services</Link></li>
                        <li className="breadcrumb-item active">Document Services</li>
                    </ul>
                    <div className="container">
                        <h2 className="text-center">Document Services</h2>
                        <h4 className="theme-blue text-center">All Document services under one umbrella</h4>
                        <div className="row pt-5">
                            {this.state.Data.map((item, index) => {
                                return (
                                    <div className="col-md-3" key={index}>
                                        <div className="card card-body shadow-sm mb-4 animated fadeIn">
                                            <div className="text-center">
                                                <span><img src={require(`../../Images/document-service/${item.sub_cat_icon}`)} width="50" height="50" className="mt-4" /></span>
                                                <h5 className="text-success my-4"> <b>{item.sub_cat_name}</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <br/><br/><br/>
                    </div>
                </div>
                <CommonFooter/>
            </div>
    )
  }
}
