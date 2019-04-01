import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
import Showcase from './Showcase';
import DataSummary from './DataSummary';
import ReleaseNote from './ReleaseNote';
import Features from './Features';
//import EmailSubscribe from './EmailSubscribe';
//import Testimonial from './Testimonial';
import ShowcaseCallToAction from './ShowcaseCallToAction';

class Landing extends Component {
  render() {
    return (
      <div className="container-fluid">


        <Showcase/>
        <DataSummary/>
        <Features/>
        <ReleaseNote/>

        {/*<Testimonial/> */}
        
        <ShowcaseCallToAction/>  
        {/*<EmailSubscribe/> */}

      </div>




      
    );
  }
}

export default Landing;
