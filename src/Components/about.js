import React, { Component } from 'react';
import Header from '../Components/header';
import CommonFooter from './common-footer';

export default class About extends Component {
  render() {
    return (
      <div>
          <Header/>
             <div className="container-fluid">
                 <div className="jumbotron mt-5">
                 <h3 className="text-center" style={{color:'#007bff'}}>Who we are..?</h3>
                 <p className="text-justify">HelpU, as the name itself suggests, intends to make people's life easy and convenient, with it's on demand home
          services, especially for those who are living in big cities amidst a hectic lifestyle. Besides, we also realize
          the challenges that every home face on regular basis in getting skilled handyman at convenient time. But with HelpU
          you can have a sigh of relief as our young and talented pool of professionals are committed to make the difference
          in people's lives by providing effective home care services right at their doorsteps. We are constantly striving
          to become the most reliable service partner for every home.</p>
          <p  className="text-justify">
          From repairing the leaking taps to old furniture or
          fixing unexpected electrical issues to appliance installation or painting homes to cleaning them - HelpU does
          it all without causing you even the least inconvenience. Customer satisfaction is our primary objective and so
          we assure round the clock services provided by trained, certified and security verified handymen expert in their
          respective fields with full commitment and at ease. We envision to lead the industry domain by offering trusted
          solutions for all your house needs under HelpU's umbrella. Committed to provide outstanding customer experience
          we ensure best quality hassle free services at no additional cost to make your life HelpU!
          </p>
                 </div>
             </div>
             <CommonFooter/>
      </div>
    )
  }
}
