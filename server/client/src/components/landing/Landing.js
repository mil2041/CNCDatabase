import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';

import Showcase from './Showcase';
import Introduction from './Introduction';
import DataSummary from './DataSummary';
import Features from './Features';
import ReleaseNote from './ReleaseNote';
import Citation from './Citation';

//import EmailSubscribe from './EmailSubscribe';
//import Testimonial from './Testimonial';
//import ShowcaseCallToAction from './ShowcaseCallToAction';
import UseCases from './UseCases';

class Landing extends Component {
  render() {
    return (
      <div className="container-fluid">


        <Showcase/>
        <Introduction/>
          <DataSummary/>
        
          <UseCases/>

        <Features/>
        <ReleaseNote/>
        <Citation/>

        {/*<Testimonial/> */}
        
        {/*<ShowcaseCallToAction/> */} 
        {/*<EmailSubscribe/> */}

      </div>




      
    );
  }
}

export default Landing;
